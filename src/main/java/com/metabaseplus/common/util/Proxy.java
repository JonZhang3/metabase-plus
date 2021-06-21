package com.metabaseplus.common.util;

import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okhttp3.internal.http.RealResponseBody;
import okio.GzipSource;
import okio.InflaterSource;
import okio.Okio;
import org.jetbrains.annotations.NotNull;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.util.MultiValueMap;
import org.springframework.web.server.ServerWebExchange;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.Inflater;

public final class Proxy {

    private static final OkHttpClient HTTP_CLIENT =
        new OkHttpClient.Builder()
            .addInterceptor(new UnGzippingInterceptor())
            .addInterceptor(new InflateInterceptor())
            .build();

    public static Response route(String rootApi, ServerWebExchange exchange) throws IOException {
        return route(rootApi, exchange, getBytesFromRequestBody(exchange.getRequest()));
    }

    public static Response route(String rootApi, ServerWebExchange exchange, byte[] body) throws IOException {
        ServerHttpRequest request = exchange.getRequest();
        HttpMethod method = request.getMethod();
        if (method == null) {
            method = HttpMethod.GET;
        }
        String path = request.getPath().value();
        MultiValueMap<String, String> queryParams = request.getQueryParams();
        Headers headers = getHeaders(request.getHeaders());

        RequestBody requestBody = null;
        if(body != null && body.length > 0) {
            requestBody = RequestBody.create(body, MediaType.get(headers.get(HttpHeaders.CONTENT_TYPE)));
        }

        Request httpRequest = new Request.Builder()
            .url(mkHttpUrl(Utils.resolveUrl(rootApi, path), queryParams))
            .headers(headers)
            .method(method.name(), requestBody)
            .build();
        return HTTP_CLIENT.newCall(httpRequest).execute();
    }

    private static byte[] getBytesFromRequestBody(ServerHttpRequest request) {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        request.getBody().subscribe(buffer -> {
            try {
                bos.write(buffer.asByteBuffer().array());
            } catch (IOException ignore) { }
        });
        return bos.toByteArray();
    }

    private static Headers getHeaders(HttpHeaders httpHeaders) {
        Headers.Builder builder = new Headers.Builder();
        httpHeaders.forEach((name, values) -> {
            if("host".equalsIgnoreCase(name)) {
                return;
            }
            if (values != null && values.size() > 0) {
                for (String value : values) {
                    builder.add(name, value);
                }
            } else {
                builder.add(name, "");
            }
        });
        return builder.build();
    }

    private static RequestBody mkRequestBody(String method, ServerHttpRequest request) {
        if(!okhttp3.internal.http.HttpMethod.requiresRequestBody(method)) {
            return null;
        }
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        request.getBody().subscribe(buffer -> {
            try {
                bos.write(buffer.asByteBuffer().array());
            } catch (IOException ignore) { }
        });
        return bos.size() > 0 ? RequestBody.create(bos.toByteArray()) : null;
    }

    private static HttpUrl mkHttpUrl(String path, MultiValueMap<String, String> queryParams) {
        HttpUrl.Builder builder = HttpUrl.get(path).newBuilder();
        queryParams.forEach((name, values) -> {
            if (values != null && values.size() > 0) {
                for (String value : values) {
                    builder.addQueryParameter(name, value);
                }
            } else {
                builder.addQueryParameter(name, null);
            }
        });
        return builder.build();
    }

    private static class UnGzippingInterceptor implements Interceptor {

        @NotNull
        @Override
        public Response intercept(@NotNull Chain chain) throws IOException {
            Response response = chain.proceed(chain.request());
            ResponseBody responseBody = response.body();
            if (responseBody == null) {
                return response;
            }
            String contentEncoding = response.header("Content-Encoding");
            if ("gzip".equals(contentEncoding)) {
                long contentLength = responseBody.contentLength();
                GzipSource source = new GzipSource(responseBody.source());
                Headers strippedHeaders = response.headers().newBuilder().build();
                return response.newBuilder().headers(strippedHeaders)
                    .body(
                        new RealResponseBody(responseBody.contentType().toString(), contentLength, Okio.buffer(source))
                    )
                    .build();
            }
            return response;
        }
    }

    private static class InflateInterceptor implements Interceptor {

        @NotNull
        @Override
        public Response intercept(@NotNull Chain chain) throws IOException {
            Response response = chain.proceed(chain.request());
            ResponseBody responseBody = response.body();
            if(responseBody == null) {
                return response;
            }
            String contentEncoding = response.header("Content-Encoding");
            if("deflate".equals(contentEncoding)) {
                long contentLength = responseBody.contentLength();
                Inflater inflater = new Inflater();
                InflaterSource source = new InflaterSource(responseBody.source(), inflater);
                Headers strippedHeaders = response.headers().newBuilder().build();
                return response.newBuilder().headers(strippedHeaders)
                    .body(
                        new RealResponseBody(responseBody.contentType().toString(), contentLength, Okio.buffer(source))
                    )
                    .build();
            }
            return response;
        }
    }

}

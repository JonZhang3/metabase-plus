package com.metabaseplus;

import org.jetbrains.annotations.NotNull;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpMethod;
import org.springframework.web.reactive.accept.RequestedContentTypeResolver;
import org.springframework.web.reactive.config.WebFluxConfigurationSupport;
import org.springframework.web.reactive.result.method.annotation.RequestMappingHandlerMapping;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Proxy;

@SpringBootApplication
@MapperScan("com.metabaseplus.mapper")
public class MetabasePlusApplication {

    public static void main(String[] args) {
        SpringApplication.run(MetabasePlusApplication.class, args);
    }

    @Value("${metabase.uri}")
    private String metabaseApiUri;

    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(r -> r.path("/api/database", "/api/database/validate").and().method(HttpMethod.POST, HttpMethod.PUT).negate()
                    .and().path("/api/**")
                    .uri(metabaseApiUri))
                .build();
    }



}

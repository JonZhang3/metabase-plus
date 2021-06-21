package com.metabaseplus.controller;

import com.alibaba.fastjson.JSONObject;
import com.metabaseplus.common.Result;
import com.metabaseplus.common.util.Proxy;
import com.metabaseplus.mapper.DatabaseMapper;
import okhttp3.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import javax.annotation.Resource;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/api/database")
public class DatabaseController {

    @Value("${metabase.uri}")
    private String metabaseApiUri;

    @Resource
    private DatabaseMapper databaseMapper;

    @PostMapping("")
    public Mono<ResponseEntity<Object>> save(ServerWebExchange exchange, @RequestBody Mono<String> body) {
        return body.map(bodyString -> {
            JSONObject bodyObj = JSONObject.parseObject(bodyString);
            String name = bodyObj.getString("name");
            String env = bodyObj.remove("env").toString();
            Integer dbId = databaseMapper.getByNameAndEnv(name, env);
            if(dbId != null) {
                return ResponseEntity.badRequest().body(Result.error("已经存在同名同环境的数据库"));
            }
            try {
                Response response = Proxy.route(metabaseApiUri, exchange, bodyObj.toJSONString().getBytes(StandardCharsets.UTF_8));
                if(response.body() == null) {
                    return ResponseEntity.badRequest().body(Result.error("保存失败"));
                }
                JSONObject apiResult = JSONObject.parseObject(response.body().string());
                if(response.code() == 200) {
                    Integer id = apiResult.getInteger("id");
                    databaseMapper.updateEnvironment(id, env);
                }
                return ResponseEntity.status(response.code()).body(apiResult);
            } catch (IOException e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        });
    }

    @PostMapping("/validate")
    public Mono<ResponseEntity<Object>> validate(ServerWebExchange exchange, @RequestBody String body) throws IOException {
        JSONObject bodyObj = JSONObject.parseObject(body);
        JSONObject details = bodyObj.getJSONObject("details");
        String name = details.getString("name");
        String env = details.getString("env");
        Integer dbId = databaseMapper.getByNameAndEnv(name, env);
        if(dbId != null) {
            return Mono.just(ResponseEntity.badRequest().body(Result.error("已经存在同名同环境的数据库")));
        }
        Response response = Proxy.route(metabaseApiUri, exchange, bodyObj.toJSONString().getBytes(StandardCharsets.UTF_8));
        if(response.body() == null) {
            return Mono.just(ResponseEntity.badRequest().body(Result.error("保存失败")));
        }
        JSONObject apiResult = JSONObject.parseObject(response.body().string());
        return Mono.just(ResponseEntity.status(response.code()).body(apiResult));
    }

    @PutMapping("")
    public Mono<ResponseEntity<Object>> update(ServerWebExchange exchange, @RequestBody String body) {
        return Mono.empty();
    }

}

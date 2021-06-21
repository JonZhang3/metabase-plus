package com.metabaseplus.config;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.web.reactive.result.view.MustacheViewResolver;
import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.ErrorPageRegistrar;
import org.springframework.boot.web.server.ErrorPageRegistry;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.reactive.accept.RequestedContentTypeResolver;
import org.springframework.web.reactive.config.ResourceHandlerRegistry;
import org.springframework.web.reactive.config.ViewResolverRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurationSupport;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.resource.PathResourceResolver;
import org.springframework.web.reactive.resource.ResourceResolver;
import org.springframework.web.reactive.result.method.annotation.RequestMappingHandlerMapping;
import reactor.core.publisher.Mono;

import javax.annotation.Resource;

@Configuration
public class WebFluxConfiguration extends WebFluxConfigurationSupport {

    @Resource
    private MustacheViewResolver mustacheViewResolver;

    @Bean
    @NotNull
    public RequestMappingHandlerMapping requestMappingHandlerMapping(
        @Qualifier("webFluxContentTypeResolver") RequestedContentTypeResolver contentTypeResolver) {
        RequestMappingHandlerMapping mapping =
            super.requestMappingHandlerMapping(contentTypeResolver);
        mapping.setOrder(2);
        return mapping;
    }

//    @Bean
//    @NotNull
//    public WebServerFactoryCustomizer<ConfigurableWebServerFactory> webServerFactoryCustomizer() {
//        return new WebServerFactoryCustomizer<ConfigurableWebServerFactory>() {
//            @Override
//            public void customize(ConfigurableWebServerFactory factory) {
//                ErrorPage page404 = new ErrorPage(HttpStatus.NOT_FOUND, "/");
//                factory.addErrorPages(page404);
//            }
//        };
//    }

    @Override
    public void configureViewResolvers(@NotNull ViewResolverRegistry registry) {
        registry.viewResolver(mustacheViewResolver);
    }

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**")
            .addResourceLocations("classpath:/static/");
    }

}

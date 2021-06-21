package com.metabaseplus.controller;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Controller
@RequestMapping("/")
public class ViewController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(Model model) throws IOException {
        String metabaseBootstrap = IOUtils.toString(this.getClass().getResourceAsStream("/metabase-bootstrap.json"),
            StandardCharsets.UTF_8);
        String metabaseLocalization = IOUtils.toString(this.getClass().getResourceAsStream("/metabase-localization.json"),
            StandardCharsets.UTF_8);
        model.addAttribute("bootstrapJSON", metabaseBootstrap);
        model.addAttribute("localizationJSON", metabaseLocalization);
        return "index";
    }

}

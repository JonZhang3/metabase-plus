package com.metabaseplus.common;

import java.util.HashMap;

public class Result extends HashMap<String, Object> {

    public static Result error(String message) {
        Result result = new Result();
        result.put("dbname", message);
        result.put("message", message);
        result.put("valid", false);
        return result;
    }

}

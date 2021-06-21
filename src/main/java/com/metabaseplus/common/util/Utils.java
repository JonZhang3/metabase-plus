package com.metabaseplus.common.util;

import org.apache.commons.io.IOUtils;
import org.springframework.core.io.buffer.DataBuffer;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

public class Utils {

    private Utils() {

    }

    public static String resolveUrl(String url, String path) {
        String rootPath = url;
        String innerPath = path;
        if (rootPath.endsWith("/")) {
            rootPath = rootPath.substring(0, rootPath.length() - 1);
        }
        if (!innerPath.startsWith("/")) {
            innerPath = "/" + path;
        }
        return rootPath + innerPath;
    }

    public static String dataBufferToString(DataBuffer buffer) {
        InputStream in = buffer.asInputStream(true);
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try {
            IOUtils.copy(in, bos);
        } catch (IOException ignore) {

        } finally {
            IOUtils.closeQuietly(in);
        }
        return bos.size() > 0 ? new String(bos.toByteArray(), StandardCharsets.UTF_8) : "";
    }

}

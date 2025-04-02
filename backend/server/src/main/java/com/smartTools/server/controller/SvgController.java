package com.smartTools.server.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.core.io.ByteArrayResource;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

import com.smartTools.server.utils.SvgToPngConverter;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequestMapping("/api/svg")
@CrossOrigin
public class SvgController {

    @PostMapping("/convert")
    public ResponseEntity<ByteArrayResource> convertSvgToPng(@RequestParam("file")MultipartFile file) {
        try {
            // Convert SVG file content to string
            String svgContent = new String(file.getBytes(), StandardCharsets.UTF_8);
            System.out.println(svgContent);
            return SvgToPngConverter.convertSvgToPng(svgContent);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}


////////////////////////////

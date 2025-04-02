package com.smartTools.server.controller;
import com.google.zxing.WriterException;
import com.smartTools.server.utils.QRCodeGenerator;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.core.io.ByteArrayResource;
import java.io.IOException;

@RestController
@RequestMapping("/api/qrcode")
public class QRCodeController {

    @GetMapping("/generate")
    public ResponseEntity<ByteArrayResource> generateQRCode(
            @RequestParam String text,
            @RequestParam(defaultValue = "300") int width,
            @RequestParam(defaultValue = "300") int height) {
        try {
            return QRCodeGenerator.generateQRCode(text, width, height);
        } catch (WriterException | IOException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}

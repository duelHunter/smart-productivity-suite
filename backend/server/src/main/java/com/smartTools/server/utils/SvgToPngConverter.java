package com.smartTools.server.utils;
import org.apache.batik.transcoder.Transcoder;
import org.apache.batik.transcoder.TranscoderException;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.apache.batik.transcoder.image.PNGTranscoder;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.io.*;

public class SvgToPngConverter {

    public static ResponseEntity<ByteArrayResource> convertSvgToPng(String svgContent) {
        try {
            // Create a transcoder for PNG conversion
            Transcoder transcoder = new PNGTranscoder();

            // Convert SVG string to InputStream
            InputStream svgStream = new ByteArrayInputStream(svgContent.getBytes());
            TranscoderInput input = new TranscoderInput(svgStream);

            // OutputStream to store PNG result
            ByteArrayOutputStream pngStream = new ByteArrayOutputStream();
            TranscoderOutput output = new TranscoderOutput(pngStream);

            // Convert SVG to PNG
            transcoder.transcode(input, output);

            // Convert to ByteArrayResource
            byte[] pngBytes = pngStream.toByteArray();
            ByteArrayResource resource = new ByteArrayResource(pngBytes);

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"image.png\"")
                    .contentType(MediaType.IMAGE_PNG)
                    .body(resource);

        } catch (TranscoderException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}

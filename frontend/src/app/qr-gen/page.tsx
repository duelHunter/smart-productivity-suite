"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Image from "next/image"; 
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = async () => {
    if (!text.trim()) return;

    // Backend API URL
    const apiUrl = `${API_URL}/api/qrcode/generate?text=${encodeURIComponent(text)}`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to generate QR code");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setQrUrl(url);
    }catch (error) {
      console.error("Error generating QR code:", error);
    }

  };

  return (
    <section>
      <Navbar />
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-black mb-6">QR Code Generator</h1>

          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Generate Button */}
          <button
            onClick={generateQR}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Generate QR Code
          </button>

          {/* Display QR Code */}
          {qrUrl && (
            <div className="mt-6 flex justify-center">
              <Image 
                src={qrUrl} 
                alt="QR Code" 
                width={200} 
                height={200} 
                className="border shadow-lg"
              />
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default QRGenerator;

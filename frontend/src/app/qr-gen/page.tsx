"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const generateQR = async () => {
    if (!text.trim()) return;

    // Backend API URL
    const apiUrl = `http://localhost:8080/api/qrcode/generate?text=${encodeURIComponent(text)}`;

    setQrUrl(apiUrl); // Set generated QR code URL
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
              <img src={qrUrl} alt="QR Code" className="border shadow-lg" />
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default QRGenerator;

"use client";

import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [pngUrl, setPngUrl] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const convertSvgToPng = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8080/api/svg/convert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to convert SVG");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPngUrl(url);
    } catch (error) {
      console.error("Error converting SVG:", error);
    }
  };

  return (
    <section>
      <Navbar />
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1>SVG to PNG</h1>

          {/* File Upload Input */}
          <input type="file" accept="image/svg+xml" onChange={handleFileChange} className="mt-4" />

          {/* Convert Button */}
          <button
            onClick={convertSvgToPng}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Convert
          </button>

          {/* Display PNG & Download */}
          {pngUrl && (
            <div className="mt-6">
              <img src={pngUrl} alt="Converted PNG" className="border shadow-lg mx-auto" />
              <a
                href={pngUrl}
                download="converted.png"
                className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Download PNG
              </a>
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default page;

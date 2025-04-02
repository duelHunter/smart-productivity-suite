"use client";

import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";

const page = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  let recognition: SpeechRecognition | null = null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
          let transcript = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          setText(transcript);
        };

        recognition.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <section>
      <Navbar />
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Voice to Text</h1>

          {/* Start & Stop Buttons */}
          <div className="mt-6">
            {!isListening ? (
              <button
                onClick={startListening}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Start Recording 🎙
              </button>
            ) : (
              <button
                onClick={stopListening}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Stop Recording ⏹
              </button>
            )}
          </div>

          {/* Display Transcribed Text */}
          <div className="mt-6 p-4 border rounded bg-gray-100 min-h-[100px] text-left">
            {text || "Start speaking..."}
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;

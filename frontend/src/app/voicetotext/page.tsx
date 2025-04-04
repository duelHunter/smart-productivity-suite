"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const Page = () => {
  const [Text, setText] = useState("");
  const [IsRecording, setIsRecording] = useState(false);
  const [AudioBlob, setAudioBlob] = useState<Blob | null>(null);
  let mediaRecorder: MediaRecorder | null = null;

  const startRecording = async () => {
    if (!navigator.mediaDevices || !window.MediaRecorder) {
      alert("Audio recording is not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const AudioBlob = new Blob(chunks, { type: "audio/wav" });
        setAudioBlob(AudioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const uploadAudio = async () => {
    if (!AudioBlob) {
      alert("No audio recorded.");
      return;
    }

    const formData = new FormData();
    formData.append("file", AudioBlob, "recording.wav");

    try {
      const response = await fetch("/api/voice/transcribe", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.transcript) {
        setText(data.transcript);
      } else {
        alert("Error transcribing audio.");
      }
    } catch (error) {
      console.error("Error sending audio:", error);
    }
  };

  return (
    <section>
      <Navbar />
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold">Voice to Text</h1>

          <div className="mt-6">
            {!IsRecording ? (
              <button
                onClick={startRecording}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Start Recording 🎙
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Stop Recording ⏹
              </button>
            )}
          </div>

          {AudioBlob && (
            <button
              onClick={uploadAudio}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Transcribe Audio
            </button>
          )}

          <div className="mt-6 p-4 border rounded bg-gray-100 min-h-[100px] text-left">
            {Text || "Start speaking..."}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Page;

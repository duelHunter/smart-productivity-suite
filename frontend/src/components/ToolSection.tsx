import React from "react";
import Tool from "./ui/Tool";


const toolsData = [
    { title: "Voice Typing (English)", description: "English Voice Typing....", category: "Voice Tools", categoryColor: "bg-purple-600", link: "/voicetotext" },
    { title: "QR Genarator", description: "QR Genarator.....", category: "AI Tools", categoryColor: "bg-yellow-500", link: "/qr-gen" },
    { title: "SVG to PNG converter", description: "SVG to PNG converter....", category: "AI Tools", categoryColor: "bg-yellow-500", link: "/svgtopng" },
    { title: "Minio", description: "Mini Car with Stones", category: "Games", categoryColor: "bg-red-500", link: "/minio" },
    { title: "TV", description: "All the TV Channels in Sri Lanka", category: "Other Tools", categoryColor: "bg-red-600", link: "/tv" },
    { title: "AI Teacher", description: "Your AI Powered English-Speaking Teacher", category: "AI Tools", categoryColor: "bg-yellow-500", link: "/ai-teacher" },
    { title: "Spy Mic", description: "Hear your earbuds live as a spy", category: "Other Tools", categoryColor: "bg-red-600", link: "/spy-mic" },
    { title: "Mini Racer", description: "Racing Car Game which has Slide Right and Left to Win", category: "Games", categoryColor: "bg-red-500", link: "/mini-racer" },
  ];

const ToolSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 lg:mx-24 gap-6">
        {toolsData.map((tool, index) => (
          <Tool key={index} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolSection;

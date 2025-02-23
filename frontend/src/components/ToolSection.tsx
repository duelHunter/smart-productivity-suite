import React from "react";
import Tool from "./ui/Tool";


const toolsData = [
    { title: "Text to Speech (Voice Powered)", description: "English text convert to audio", category: "voice tool", categoryColor: "bg-purple-600", link: "/text-to-speech" },
    { title: "Sinhala Typing (Voice Powered)", description: "Sinhala Voice Typing and Singlish to Sinhala Support", category: "Sinhala Tools", categoryColor: "bg-purple-600", link: "/singlish" },
    { title: "Invoice Generator (AI)", description: "AI Powered Human Level Invoice Generator", category: "AI Tools", categoryColor: "bg-yellow-500", link: "/invoice-generator" },
    { title: "CV Generator (AI)", description: "AI Powered CV Generator for Your Next Job", category: "AI Tools", categoryColor: "bg-yellow-500", link: "/cv-generator" },
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

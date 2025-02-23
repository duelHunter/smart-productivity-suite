import React from "react";
import Link from "next/link";

interface ToolProps {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  link: string;
}

const Tool: React.FC<ToolProps> = ({ title, description, category, categoryColor, link }) => {
  return (
    <Link href={link} passHref>
      <div className="cursor-pointer h-full bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center transition-transform duration-200 hover:scale-105">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <span
          className={`mt-4 inline-block px-3 py-1 text-xs font-semibold rounded-full text-white ${categoryColor}`}
        >
          {category}
        </span>
      </div>
    </Link>
  );
};

export default Tool;

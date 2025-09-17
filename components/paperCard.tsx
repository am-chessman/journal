"use client"

import { useState } from "react";
import { PaperCardProps } from "@/types";

const PaperCard: React.FC<PaperCardProps> = ({ paper, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
        className={`bg-gray-50/35 p-6 rounded-xl border-l-4 border-slate-500 cursor-pointer transition-all duration-300 ${
            isHovered ? 'transform translate-x-2 shadow-lg border-gray-600' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        >
        <h4 className="text-xl font-bold mb-3 text-white/90">{paper.title}</h4>
        <p className="text-white/60 italic mb-3">{paper.author}</p>
        <p className="text-white/90 text-md leading-relaxed mb-4">{paper.abstract}</p>
        <div className="flex flex-wrap gap-2">
            {paper.tags.map((tag, index) => (
            <span
                key={index}
                className="bg-black/40 text-white px-3 py-1 rounded-full text-xs font-medium"
            >
                {tag}
            </span>
            ))}
        </div>
        </div>
    );
};

export default PaperCard
"use client"

import { useState } from "react";
import { FeatureCardProps } from "@/types";

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
        className={`mt-10 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl transition-all duration-300 relative overflow-hidden ${
            isHovered ? 'transform -translate-y-2 rotate-1 shadow-2xl' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10 animate-pulse" />
        )}
        <div className="relative z-10 text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
        </div>
    );
};

export default FeatureCard
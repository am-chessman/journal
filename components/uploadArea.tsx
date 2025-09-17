"use client"

import React, { useState } from 'react';
import { Paper } from '@/types';
import { Upload } from 'lucide-react';

const UploadArea: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
        className={`bg-white/10 backdrop-blur-sm border-3 border-dashed border-white/50 rounded-3xl p-12 text-center cursor-pointer transition-all duration-300 ${
            isHovered ? 'border-gray-400 bg-gray-400/10 transform scale-105' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        >
        <Upload className="w-16 h-16 mx-auto mb-6 text-white/80" />
        <div className="text-white text-xl mb-3">Click here to submit your hilarious research!</div>
        <div className="text-white/70">Upload PDFs, docs, or just paste your content</div>
        </div>
    );
};

export default UploadArea

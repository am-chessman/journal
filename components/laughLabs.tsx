"use client"

import { useState } from "react";
import { Paper } from "@/types";
import Header from "./header";
// import Hero from "./hero";
import FeatureCard from "./featureCard";
import PaperCard from "./paperCard";
// import UploadArea from "./uploadArea";
import { Target, Globe } from "lucide-react";
import data from "@/utils/researchData";

const LaughLabs: React.FC = () => {
    const [papers] = useState<Paper[]>(data);

    const showAlert = (title: string, content: string) => {
        alert(`${title}\n\n${content}`);
    };

    const handlePublishClick = () => {
        showAlert('📝 Publication Form', 
        'Features would include:\n• Upload paper files (PDF, DOC, etc.)\n• Add title, abstract, keywords\n• Select research category\n• Set humor rating\n• Submit for peer review'
        );
    };

    const handleBrowseClick = () => {
        showAlert('📖 Browse Section',
        'Features would include:\n• Filter by category/humor level\n• Search functionality\n• Sort by date/popularity/funniness\n• Advanced filtering options'
        );
    };

    const handleProfileClick = () => {
        showAlert('👤 User Profile',
        'Features would include:\n• Your published papers\n• Submission history\n• Peer review assignments\n• Achievement badges\n• Statistics dashboard'
        );
    };

    const handlePaperClick = (paper: Paper) => {
        showAlert(`📄 "${paper.title}"`,
        'Full paper view would open here with:\n• Complete abstract\n• Download options\n• Citation tools\n• Comments section\n• Related papers'
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-600 via-gray-700 to-slate-800">        
        <Header 
            onPublish={handlePublishClick}
            onBrowse={handleBrowseClick}
            onProfile={handleProfileClick}
        />

        <div className="max-w-6xl mx-auto  px-6">
            {/* <Hero onPublish={handlePublishClick} /> */}

            <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FeatureCard
                icon={<Target />}
                title="Peer-Reviewed Research"
                description="All submissions undergo rigorous review for both scientific validity and comedic value. We maintain the highest standards of hilarity."
            />
            {/* <FeatureCard
                icon={<Award />}
                title="Awards & Recognition"
                description="Monthly awards for 'Most Likely to Make You Snort-Laugh' and 'Best Use of Statistical Absurdity' in research."
            /> */}
            <FeatureCard
                icon={<Globe />}
                title="Global Community"
                description="Connect with researchers worldwide who understand that laughter is the best research methodology."
            />
            </div>

            {/* <div className="mb-12">
            <UploadArea onClick={handlePublishClick} />
            </div> */}

            <section className="bg-black/40 backdrop-blur-sm p-10 rounded-3xl shadow-2xl mb-12">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-white/50">
                Featured Research
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
                {papers.map((paper) => (
                <PaperCard
                    key={paper.id}
                    paper={paper}
                    onClick={() => handlePaperClick(paper)}
                />
                ))}
            </div>
            </section>
        </div>
        </div>
    );
};

export default LaughLabs

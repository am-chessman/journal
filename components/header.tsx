import { useState } from "react";
import Button from "./button";
import { FileText, User, BookOpen } from "lucide-react";

const Header: React.FC<{
    onPublish: () => void;
    onBrowse: () => void;
    onProfile: () => void;
    }> = ({ onPublish, onBrowse, onProfile }) => {
    const [logoClicks, setLogoClicks] = useState(0);

    const handleLogoClick = () => {
        setLogoClicks(prev => prev + 1);
        if (logoClicks === 2) {
        // Reset after animation
        setTimeout(() => setLogoClicks(0), 500);
        }
    };

    return (
        <header className="bg-white/95 backdrop-blur-md shadow-xl rounded-b-3xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div
                className={`text-2xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent cursor-pointer transition-all duration-300 ${
                logoClicks === 3 ? 'animate-bounce' : ''
                }`}
                onClick={handleLogoClick}
            >
                Proceedings of Preposterous Sciences
            </div>
            <nav className="flex gap-4">
                <Button onClick={onPublish} variant="secondary">
                <FileText className="w-4 h-4 mr-2 inline" />
                Publish Paper
                </Button>
                <Button onClick={onBrowse}>
                <BookOpen className="w-4 h-4 mr-2 inline" />
                Browse Papers
                </Button>
                <Button onClick={onProfile} variant="secondary">
                <User className="w-4 h-4 mr-2 inline" />
                Profile
                </Button>
            </nav>
            </div>
        </div>
        </header>
    );
};

export default Header
import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    className = '' 
    }) => {
    const baseClasses = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1";
    const variantClasses = {
        primary: "bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg hover:shadow-xl hover:shadow-slate-500/25",
        secondary: "bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg hover:shadow-xl hover:shadow-gray-500/25"
    };

    return (
        <button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
        {children}
        </button>
    );
};

export default Button
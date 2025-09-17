export interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Paper {
    id: number;
    title: string;
    author: string;
    abstract: string;
    tags: string[];
}

export interface PaperCardProps {
    paper: Paper;
    onClick: () => void;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
}
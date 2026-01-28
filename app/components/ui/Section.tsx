import { ReactNode } from "react"

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    background?: 'primary' | 'secondary' | 'neutral';
    fullHeight: boolean;
    centered: boolean;
}

export default function Section ({
    id,
    children,
    className= '',
    background= 'neutral',
}: SectionProps) {

    const bgClasses = {
        primary: 'bg-primary-500',
        secondary: 'bg-secondary-500',
        neutral: 'bg-neutral-500',
    };

    return (
        <section
        id={id}
        className={`
            relative
            ${bgClasses[background]}
            px-6 md:px-12 lg:px-24
            py-8 md:py-12 lg:pb-16
            overflow-hidden
            ${className}
            `}
        >
            {children}
        </section>
    )
}
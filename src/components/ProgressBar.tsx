

interface ProgressIndicatorProps {
    className?: string
}

export default function ProgressIndicator({ className = "" }: ProgressIndicatorProps) {
    return (
        <div className={`flex items-center gap-0 ${className}`}>
            {/* First dot */}
            <div className="w-2 h-2 bg-[#4a4e54] rounded-full flex-shrink-0" />

            {/* Connecting line */}
            <div className="w-16 h-0.5 bg-[#4a4e54] mx-1" />

            {/* Second dot */}
            <div className="w-2 h-2 bg-[#4a4e54] rounded-full flex-shrink-0" />
        </div>
    )
}
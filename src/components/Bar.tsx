interface BarProps {
    className?: string
    width?: string | number
    height?: string | number
}

/**
 * Bar Component - Glassmorphic Design Element
 * Recreated from Figma design node 1:131
 * Features backdrop blur and gradient overlay effects
 */
export default function Bar({ className = "", width, height }: BarProps) {
    const sizeClasses = width || height ? "" : "size-full"

    return (
        <div
            className={`bar-glass-effect backdrop-blur-[4.919px] backdrop-filter rounded-[2.459px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] ${sizeClasses} ${className}`}
            data-node-id="1:131"
        />
    )
}
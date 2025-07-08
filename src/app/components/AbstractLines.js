import React from "react";

export default function AbstractLines({ opacity, topOffset, bottomOffset }) {
    // Calculate new path "d" values based on offsets
    const topPath = `M0 ${25 + topOffset} L50 ${0 + topOffset} L100 ${25 + topOffset} L50 ${50 + topOffset} Z`;
    const midPath = "M0 50 L50 25 L100 50 L50 75 Z"; // unchanged
    const bottomPath = `M0 ${75 + bottomOffset} L50 ${50 + bottomOffset} L100 ${75 + bottomOffset} L50 ${100 + bottomOffset} Z`;

    return (
        <div className="abstract-lines" style={{ opacity }} id="abstract-lines">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                opacity="0.25"
            >
                <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#6a0dad', stopOpacity: 1 }} />
                        <stop offset="25%" style={{ stopColor: '#8d3da3', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#b15cdb', stopOpacity: 1 }} />
                        <stop offset="75%" style={{ stopColor: '#000717', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#355EF2', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <path
                    d={topPath}
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="0.3"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
                <path
                    d={midPath}
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="0.25"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
                <path
                    d={bottomPath}
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="0.25"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
            </svg>
        </div>
    );
} 
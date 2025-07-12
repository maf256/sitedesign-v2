import React from "react";
export default function CareerIllustration() {
    return (
        <div style={{ width: "100%" }} >

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
                    d="M0 25 L50 0 L100 25 L50 50 Z"
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="0.25"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
                <path
                    d="M0 50 L50 25 L100 50 L50 75 Z"
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="0.25"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
                <path
                    d="M0 75 L50 50 L100 75 L50 100 Z"
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="0.25"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
            </svg>
        </div >
    );
}

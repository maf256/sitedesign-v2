import React, { useEffect, useState, useRef } from 'react';

const FadeMount = ({ children, show, duration = 300 }) => {
    const [shouldRender, setShouldRender] = useState(show);
    const [visible, setVisible] = useState(show);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (show) {
            setShouldRender(true);
            // Allow next tick for transition
            timeoutRef.current = setTimeout(() => setVisible(true), 10);
        } else {
            setVisible(false);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [show]);

    const onTransitionEnd = () => {
        if (!visible) setShouldRender(false);
    };

    return shouldRender ? (
        <div
            style={{
                transition: `opacity ${duration}ms`,
                opacity: visible ? 1 : 0,
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
            onTransitionEnd={onTransitionEnd}
        >
            {children}
        </div>
    ) : null;
};

export default FadeMount; 
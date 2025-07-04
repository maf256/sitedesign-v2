import React, { useEffect, useState } from 'react';

const FadeMount = ({ children, show, duration = 300 }) => {
    const [shouldRender, setShouldRender] = useState(show);

    useEffect(() => {
        if (show) setShouldRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setShouldRender(false);
    };

    return shouldRender ? (
        <div
            style={{
                transition: `opacity ${duration}ms`,
                opacity: show ? 1 : 0,
            }}
            onTransitionEnd={onAnimationEnd}
        >
            {children}
        </div>
    ) : null;
};

export default FadeMount; 
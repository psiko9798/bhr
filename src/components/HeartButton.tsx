import React from 'react';
import '../styles/HeartButton.css';

const HeartButton = ({heartCount} :{heartCount: number}) => {
    const handleClick = () => {
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDelay = `${Math.random() * 0.5}s`; 
            document.body.appendChild(heart);

            if (document.body.contains(heart)) {
                setTimeout(() => {
                    heart.remove();
                }, 1500); /* Match the animation duration */
            } else {
                console.error(`Failed to append heart ${i} to the body.`);
            }
        }
    };

    return (
        <button className="heart-button" onClick={handleClick}>
            ❤️
        </button>
    );
};

export default HeartButton;

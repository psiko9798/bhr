import React from 'react';
import { useTheme } from '../ThemeContext';
import '../styles/ToggleSwitch.css';

const ToggleSwitch: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="switch">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
            <span className="slider round">
                <span className="icon sun">🌞</span>
                <span className="icon moon">🌜</span>
            </span>
        </label>
    );
};

export default ToggleSwitch;
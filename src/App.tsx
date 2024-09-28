import React from 'react';
import './App.css';
import QuestionForm from './components/QuestionForm';
import ToggleSwitch from './components/ToggleSwitch';
import HeartButton from './components/HeartButton';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="header">
                <ToggleSwitch />
            </div>
            <div className="content"> {/* Add a content wrapper */}
                <QuestionForm />
            </div>
            <HeartButton heartCount={10} />
            <div>
            </div>
        </div>
    );
};

export default App;

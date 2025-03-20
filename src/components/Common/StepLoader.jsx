import {useState} from "react";
import PropTypes from "prop-types";

export function StepLoader({ steps}){
    const [currentStep, setCurrentStep] = useState(0);
    const [currentStepName, setCurrentStepName] = useState('Ładowanie');




    return (
        <div className="step-loader">
            <h1>{currentStepName}</h1>
            <div className="progress-bar">
                <div className="progress" style={{width: `${(currentStep+1)/steps.length*100}%`}}></div>
            </div>
        </div>
    )
}

StepLoader.prototype = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        component: PropTypes.element
    }))
}
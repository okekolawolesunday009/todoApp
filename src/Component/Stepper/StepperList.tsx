import React, { useState, useEffect } from 'react'
import { StepperContainer } from './Styles_stepper/style.js';
import Stepper, {StepperProps } from './Stepper'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { stepsIcon } from './StepIcon.js';

export interface LoadedStepProps extends StepperProps {
  step: any;
}


const StepperList = ({Steps}: StepperProps) => {
  const  [activeStep, setActiveStep] = useState<number>(1);
  const location = useLocation();

  useEffect(() => {
    const loadedStep = Steps.find((stepItem) => stepItem.path === location.pathname) as LoadedStepProps | undefined;
    if (loadedStep && loadedStep.step) {
      setActiveStep(loadedStep.step);
      // console.log(loadedStep.step);
    }

  }, [Steps, location.pathname]);

  const handleItemClickIndex = (stepItem: any) => {
    if ('step' in stepItem) {
      setActiveStep(stepItem.step);
    }
    // console.log(stepItem.step);

  };
  let stepIcon: any;


  const handleChange = (stepItem: any) => {    
    if (stepItem.step === activeStep) {
      stepIcon = stepsIcon.active;
      // console.log(activeStep);

    }
    else if (stepItem.step != activeStep) {
      stepIcon = stepsIcon.notActive;
      // console.log(activeStep);

    }
   
    return stepIcon;
  };

  return (
    <div>
        <StepperContainer>
          {Steps.map((stepItem, index) => (
             <Link to={stepItem.path || ''} onClick = {()=> handleItemClickIndex(stepItem)}>
                 <Stepper key = {stepItem.step} title = {stepItem.title} stepBg= {handleChange(stepItem)}/>


             </Link>
          ))}
          </StepperContainer>
    </div>
  )
}

export default StepperList
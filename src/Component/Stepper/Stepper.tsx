import React from 'react'
import { StepperWrapper } from './Styles_stepper/style.js'
// type StepType = 'All' | 'Active'| 'Completed'
interface StepProps  {
    title: string
    path?: string
    index?: number
    to?: string
    stepActive?:string
    step?: any
    stepBg?: any
   
    // type?: StepType
}
export interface StepperProps  {
    Steps: StepProps[]
   
    
}

const Stepper: React.FC<StepProps> = ({title, stepBg}: StepProps) => {
   
    
  return (
    <div className = ''>
        <StepperWrapper stepBg  = {stepBg} >
            <div className='content'>
                
           
                <h3 
                // onClick={handleClick}
                className={` title text-small lg:text-lg font-bold`}>
                    {title}
                    </h3>
            
            </div>
            
        </StepperWrapper>
      
      
    </div>
  )
}

export default Stepper
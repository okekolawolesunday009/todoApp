import styled from "styled-components";

export const StepperWrapper = styled.li`
display: flex;
justify-content: space-between;
gap: 1rem;
position: relative;




&::after {
  width: 100%;
  padding: 0 30px;
  content: "";
  height: 10px; 
  position: absolute;
  top: 35px;
  background: ${(props) => props.stepBg};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index:100;




}

  .content {
        width: 100%;
        position: relative;
   
   

    
  
  }
  
  
  
`

export const StepperContainer = styled.ol`
display: flex;
justify-content: space-between;
 position: absolute
padding-left:30px;
padding-bottom:17px;

margin-left:30px;
margin-right:30px;
top: 120px;
border-bottom: 2px solid #ccc;

@media screen and (max-width: 768px){
 
padding-bottom:19px;
margin-left:25px;
margin-right:25px;
}

@media screen and (max-width:1000px){
  
padding-bottom:20px;

}



`
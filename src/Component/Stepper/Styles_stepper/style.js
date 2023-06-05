import styled from "styled-components";

export const StepperWrapper = styled.li`
display: flex;
justify-content: space-between;
gap: 1rem;
position: relative;




// &::before {
//     position: absolute;
//     content: "";
//     border-bottom: 2px solid #ccc;
//     width: 100%;
//     top: 40px;
//     z-index: 2;
//     margin-bottom: 20px;
  
//   }

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
    // background-color: green;
   

    
  
  }
  
  
  
`

export const StepperContainer = styled.ol`
display: flex;
justify-content: space-between;
// gap: 1rem;
padding-left:30px;
padding-right:30px;
// background-color: blue;
// position: relative;
// // width: 50%;

&::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 76%;
  top: 120px;
  z-index: 2;
  margin-bottom: 20px;

}


`
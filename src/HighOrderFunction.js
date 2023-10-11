import React from 'react'
import HOC1 from './HOC1.png';
import HOC2 from './HOC2.png';
import HOC3 from './HOC3.png';

import CouterFunctionality from "./CouterFunctionality";
import { FiveCounter, TenCounter, OneCounter } from './CommonFunctionality';
function HighOrderFunction() {
    return (
       
 
 <div className="CompoBox">
 <div className="DescriptionBox">
     <strong>2. High Order Component :</strong> A <strong>H</strong>igh <strong>O</strong>rder <strong>C</strong>omponent (HOC) is a design pattern that allows us to reuse component logic and add extra functionality to our components. It is a function that takes a component and return a new component with extra functionality.
 </div>
 <div className="HOCImgBox">
     <img src={HOC3} alt="codeSnap" className="HoccodeSnap" />
     <img src={HOC2} alt="codeSnap" className="HoccodeSnap" />
     <img src={HOC1} alt="codeSnap" className="HoccodeSnap" />
 </div>
 {
     <FiveCounter commonFun={<CouterFunctionality />} />
 }
 {
     <TenCounter commonFun={<CouterFunctionality />} />
 }
 {
     <OneCounter commonFun={<CouterFunctionality />} />
 }
 <div className="explanationBox">
     In the above example, I created three function components name as FiveCounter, TenCounter, and OneCounter. All these three functions are used for increment the count Value. To achieve this functinality we have two ways :  <br />

     First  Way is to simply create three different function component for increasing the count value, which is not good practice for DRY principle. <br /> 

     Second  way is, we can create a component where we write increment logic and then pass that component as a props in FiveCounter, TenCounter and OneCounter function components.
     <br />
     Here, I used second approach, where i created a  separate  logic for the increment of count value and then passing the component as props to these Component. As per their name they will increase the count value by 5, 10 and 1.

 </div>
</div>
    )
}

export default HighOrderFunction

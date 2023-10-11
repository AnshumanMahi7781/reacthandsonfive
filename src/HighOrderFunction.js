import React from 'react'
import HOC1 from './HOC1.png';
import HOC2 from './HOC2.png';
import CouterFunctionality from "./CouterFunctionality";
import { FiveCounter, TenCounter, OneCounter } from './CommonFunctionality';
function HighOrderFunction() {
    return (
        <div className="CompoBox">
            <div className="DescriptionBox">
                <strong>2. High Order Component :</strong> A <strong>H</strong>igh <strong>O</strong>rder <strong>C</strong>omponent (HOC) is a design pattern that allows us to reuse component logic and add extra functionality to our components. It is a function that takes a component and return a new component with extra functionality.
            </div>
            <div className="exampleBox">
                <img src={HOC1} alt="codeSnap" className="codeSnap" />
                <img src={HOC2} alt="codeSnap" className="codeSnap" />
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
                In the above example, I created three function name as FiveCounter, TenCounter, and OneCounter. All these three functions are used for increment the count Value. To achieve this functinality we have two ways :  <br />

                First  Way is to simply create three different function for increase the count value, which is not good practice for DRY principle. <br /> 

                Second  way is we can create a component where we write increment logic and then pass that component as a props in FiveCounter, TenCounter and OneCounter functions.
                <br />
                Here, I used second approach, where i creating a seprate logic for increment of count value and then pass the component as props to these functions. As per there name they will increase the count value by 5, 10 and 1.

            </div>
        </div>
    )
}

export default HighOrderFunction

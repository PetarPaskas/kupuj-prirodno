import { useState } from "react";

interface QuantityStepperProps{
    step:number,
    startValue:number
}

const QuantityStepper = ({startValue,step}:QuantityStepperProps)=>{
    const [value, setValue] = useState<number>(startValue);

    const increaseStep = ()=>{
        setValue((prevValue)=>prevValue+step);
    }

    const decreaseStep = ()=>{
        setValue((prevValue)=>prevValue-step);
    }

    return <div className="quantity_stepper">
        <button type="button" onClick={increaseStep} className="quantity_stepper__increase_step">+</button>
        <span className="quantity_stepper__value">{value}</span>
        <button type="button" onClick={decreaseStep} className="quantity_stepper__decrease_step">-</button>
    </div>
}

export default QuantityStepper;
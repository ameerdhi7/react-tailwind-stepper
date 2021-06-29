import React, {FunctionComponent} from 'react';
import Step, {Istep} from "./Step";

interface OwnProps {
    currentStep: number,
    steps: Array<Istep>
}


type Props = OwnProps;

const Stepper: FunctionComponent<Props> = (props) => {

    return (
        <div className="flex items-center">
            {
                props.steps.map((step, index) => <Step
                    key={index}
                    circleContent={step.circleContent}
                    prev={props.currentStep > index}
                    active={props.currentStep === index}
                    label={step.label}
                />)
            }
        </div>
    );

};

export default Stepper;

import React, {FunctionComponent} from 'react';


export interface Istep {
    label: string,
    active: boolean,
    prev: boolean,
    circleContent: string | FunctionComponent
}

type Props = Istep;

const Step: FunctionComponent<Props> = (props) => {
    const circleClasses = props.active
        ? "border-2 border-talabatey-red-dark text-talabatey-red-dark"
        : props.prev ? "bg-talabatey-red-dark text-white" : "bg-gray-500 text-white";
    return (
        <>
            <div className="relative flex items-center">
                <div
                    className={`${circleClasses} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3  bg-teal-600 border-teal-600   `}>
                    <h6 className={"text-center"}>{props.circleContent}</h6>
                    {/*<step.icon*/}
                    {/*    className={`${step.active ? "text-talabatey-red-dark" : "text-gray-500"}`}/>*/}

                </div>
                <div
                    className={`${props.active ? "text-talabatey-red-dark" : "text-gray-500"} absolute top-0 lg:-ml-10 capitalize text-center mt-16 lg:text-base md:text-sm  text-xs font-medium`}>
                    {props.label}
                </div>
            </div>
            <div
                className={`flex-auto ${props.prev ? "border-talabatey-red-dark" : "border-gray-500"} step-border border-t-2 transition duration-500 ease-in-out`}/>
        </>
    );

};

export default Step;

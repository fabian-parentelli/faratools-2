import { useState } from "react";
import SpinnerHorPrint from "./SpinnerHorPrint";
import SpinnerHorInputs from "./SpinnerHorInputs";
import SpinnerHorView from "./SpinnerHorView";

const SpinnerHorExp = () => {

    const [values, setValues] = useState('white');

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>

            <SpinnerHorPrint />
            <SpinnerHorInputs values={values} setValues={setValues} />
            <SpinnerHorView values={values} />
        </div>
    );
};

export default SpinnerHorExp;
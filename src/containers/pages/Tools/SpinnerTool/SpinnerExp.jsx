import { useState } from "react";
import SpinnerPrint from "./SpinnerPrint.jsx";
import SpinnerInputs from "./SpinnerInputs.jsx";
import SpinnerView from "./SpinnerView.jsx";

const SpinnerExp = () => {

    const [values, setValues] = useState({ color: '#094c90', size: '36px' });

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>

            <SpinnerPrint />
            <SpinnerInputs values={values} setValues={setValues} />
            <SpinnerView values={values} />
        </div>
    );
};

export default SpinnerExp;
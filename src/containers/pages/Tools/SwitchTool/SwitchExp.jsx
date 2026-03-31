import { useState } from "react";
import SwitchPrint from "./switchPrint.jsx";
import SwitchInputs from "./SwitchInputs.jsx";
import SwitchView from "./SwitchView.jsx";

const SwitchExp = () => {

    const [values, setValues] = useState({
        activeColor: '#094c90', label: 'label-2', statusFalse: 'NO', statusTrue: 'SI'
    });

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>

            <SwitchPrint />
            <SwitchInputs values={values} setValues={setValues} />
            <SwitchView values={values} />
        </div>
    );
};

export default SwitchExp;
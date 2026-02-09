import { useState } from "react";
import ProgressBarrCopy from "./ProgressBarrCopy";
import ProgressBarrInputs from "./ProgressBarrInputs";
import ProgressBarView from "./ProgressBarView";

const ProgressBarrExt = () => {

    const [values, setValues] = useState({ active: 'false', color: '#094c90' });

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>

            <ProgressBarrCopy />
            <ProgressBarrInputs values={values} setValues={setValues} />
            <ProgressBarView values={values} />
        </div>
    );
};

export default ProgressBarrExt;
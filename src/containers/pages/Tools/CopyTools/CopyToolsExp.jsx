import { useState } from "react";
import CopyToolsInputs from "./CopyToolsInputs.jsx";
import CopyToolsCopy from "./CopyToolsCopy.jsx";
import CopyToolsView from "./CopyToolsView.jsx";

const CopyToolsExp = () => {

    const [values, setValues] = useState({ text: 'texto 1', size: 18, color: '#00a67e', duration: 4000 });

    return (
        <div className="copyToolsExp flex-col">
            <h4 className="colaccent">Implementación</h4>
            <CopyToolsCopy />
            <CopyToolsInputs values={values} setValues={setValues} />
            <CopyToolsView values={values} />
        </div>
    );
};

export default CopyToolsExp;
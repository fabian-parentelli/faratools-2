import { useState } from "react";
import PagerCopy from "./PagerCopy.jsx";
import PagerInputs from "./PagerInputs.jsx";
import PagerView from "./PagerView.jsx";

const PagerExt = () => {

    const [values, setValues] = useState({ backgroundColor: '#094c90', top: 'false' });

    return (
        <div className="pagerExt flex-col">
            <h4 className="colaccent">Implementación</h4>
            <PagerCopy />
            <PagerInputs values={values} setValues={setValues} />
            <PagerView values={values} />
        </div>
    );
};

export default PagerExt;
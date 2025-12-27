import { useState } from "react";
import BadgeToolInputs from "./BadgeToolInputs.jsx";
import BadgeToolCopy from "./BadgeToolCopy.jsx";
import BadgeToolView from "./BadgeToolView.jsx";

const BadgeToolExecute = () => {

    const [values, setValues] = useState({ type: 'app', name: 5, backgroundColor: '#00a67e', size: 40 });

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>
            <BadgeToolCopy />
            <BadgeToolInputs values={values} setValues={setValues} />
            <BadgeToolView values={values} />
        </div>
    );
};

export default BadgeToolExecute;
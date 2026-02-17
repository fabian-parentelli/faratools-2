import PopupCopy from "./PopupCopy.jsx";
import PopupView from "./PopupView.jsx";
import PopupInputs from "./PopupInputs.jsx";
import { useState, useEffect } from "react";

const PopupExt = () => {

    const [values, setValues] = useState({
        text: 'user', icon: '', color: '#094c90', size: '30px', width: '300px', position: 'r'
    });

    useEffect(() => {
        if (values.text !== '') setValues({ ...values, icon: '' });
        if (values.icon !== '') setValues({ ...values, text: '' });
    }, [values.text, values.icon]);

    return (
        <div className="popupExt flex-col">
            <h4 className="colaccent">Implementación</h4>

            <PopupCopy />
            <PopupInputs values={values} setValues={setValues} />
            <PopupView values={values} />
        </div>
    );
};

export default PopupExt;
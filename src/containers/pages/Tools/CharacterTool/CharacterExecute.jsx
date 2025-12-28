import { useState } from "react";
import CharacterCopy from "./CharacterCopy";
import CharacterInputs from "./CharacterInputs";
import CharacterView from "./CharacterView";

const CharacterExecute = () => {

    const [values, setValues] = useState({ min: 20, max: 40, text: 'Escribe un texto para poder ver el funcionamiento' });

    return (
        <div className="flex-col">
            <h4 className="colaccent">Implementación</h4>
            <CharacterCopy />
            <CharacterInputs values={values} setValues={setValues} />
            <CharacterView values={values} />
        </div>
    );
};

export default CharacterExecute;
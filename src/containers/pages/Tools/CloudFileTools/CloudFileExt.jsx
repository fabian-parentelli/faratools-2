import { useState } from "react";
import CloudFileCopy from "./CloudFileCopy";
import CloudFileInputs from "./CloudFileInputs";
import CloudFileView from "./CloudFileView";
import CloudFileMirror from "./CloudFileMirror";

const CloudFileExt = () => {

    const [values, setValues] = useState({ folderName: 'avatars', contClass: 'cfCircle', preImg: 'none' });

    return (
        <div className="cloudFileExt flex-col">
            <h4 className="colaccent">Implementación</h4>
            <CloudFileCopy />
            <CloudFileInputs values={values} setValues={setValues} />
            <CloudFileView values={values} />
            {values.contClass === 'mycss' && <CloudFileMirror />}

            <div className="cloudFileExtP">
                <p><strong className="colaccent">onChange</strong>: función callback que se ejecuta cuando se selecciona o cambia el archivo.</p>
                <p><strong className="colaccent">folderName</strong>: nombre de la carpeta destino donde se almacenará el archivo, puedes crear tu propio css y pasarlo por este prop, para hacer las pruebas puedes seleccionar en el input mycss, aclaro que puedes pasarle el nombre que vos quieras.</p>
                <p><strong className="colaccent">contClass</strong>: clase CSS aplicada al contenedor del componente.</p>
                <p><strong className="colaccent">id</strong>: identificador único del componente o recurso asociado, esto es opcional solo si lo becesias.</p>
                <p><strong className="colaccent">preImg</strong>: URL de una imagen previa que se muestra como preview, si no le pasas ninguna tomará por defecto de tu carpeta public la opción '/logo.png'</p>
            </div>

        </div>
    );
};

export default CloudFileExt;
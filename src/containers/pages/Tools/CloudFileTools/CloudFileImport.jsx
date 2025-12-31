import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const CloudFileImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { CloudFile } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cloudFileImport">
            <h4 className="colaccent">Importación</h4>
            <p>El componente CloudFile permite a los usuarios subir archivos de forma interactiva, mostrando una vista previa inmediata de la imagen y un icono representativo para los archivos PDF. Gestiona internamente el estado de los archivos seleccionados y genera un objeto FormData que contiene los archivos y metadatos, como el nombre de la carpeta o un identificador opcional, y lo envía al componente principal mediante la función onChange. También proporciona un área clicable que activa el selector de archivos y organiza visualmente las vistas previas por número y tipo de archivo.</p>

            <div className="cod-back cloudFileImportImp" onClick={handleCopy}>

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">CloudFile</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' color='#00a67e' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default CloudFileImport;
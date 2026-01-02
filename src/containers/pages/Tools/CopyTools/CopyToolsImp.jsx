import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const CopyToolsImp = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Copy } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cloudFileImport">
            <h4 className="colaccent">Importación</h4>
            <p>El componente Copy permite al usuario copiar texto al portapapeles de forma interactiva. Al hacer clic, el texto especificado en la propiedad de texto se copia automáticamente y su apariencia se puede personalizar mediante las propiedades de tamaño y color. Además, ofrece la opción de definir la duración de una señal visual que confirma que el texto se copió correctamente, lo que mejora la experiencia del usuario.</p>

            <div className="cod-back cloudFileImportImp" onClick={handleCopy}>

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Copy</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right'  >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default CopyToolsImp;
import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const ModalImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Modal } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="modalImport flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className="modalImportP">El componente Modal genera una ventana emergente superpuesta que muestra contenido personalizado (hijos) cuando la propiedad "open" es verdadera. Permite cerrar la ventana haciendo clic fuera del contenido o usando un botón configurable. Su diseño y colores se pueden personalizar mediante las propiedades del botón, lo que proporciona una estructura reutilizable para mostrar mensajes, formularios u otros elementos dentro de una capa modal.</p>

            <div className="cod-back downPdfToolParaImp" onClick={handleCopy}>

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Modal</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default ModalImport;
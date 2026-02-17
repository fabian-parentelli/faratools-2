import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const PopupImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Popup } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>Una ventana emergente es un componente de la interfaz de usuario que muestra un pequeño panel flotante al hacer clic en un elemento desencadenante (texto o icono). Es útil para mostrar información adicional, acciones o contenido interactivo sin salir de la vista actual.</p>

            <div className="cod-back flex-center" onClick={handleCopy}
                style={{ alignItems: 'flex-start', gap: '1rem' }}
            >

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Popup</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default PopupImport;
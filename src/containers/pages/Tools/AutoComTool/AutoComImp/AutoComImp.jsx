import './autoComImp.css';
import { useState } from 'react';
import { Tooltip, Icons } from "fara-comp-react";

const AutoComImp = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { AutoComplete } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="autoComImp flex-col">
            <h4>Importación</h4>

            <p>AutoComplete es un componente de entrada interactiva que permite seleccionar un elemento desde una lista de opciones de forma rápida y eficiente. A medida que el usuario escribe, el componente filtra y muestra coincidencias disponibles, facilitando la búsqueda y reduciendo errores de selección.</p>

            <p>El componente admite opciones personalizadas, control del elemento seleccionado mediante un identificador y comunicación directa con el estado de la aplicación. Es ideal para formularios, buscadores o cualquier contexto donde se requiera seleccionar datos predefinidos con una experiencia de usuario clara y fluida.</p>

            <section className='cod-back autoComImpCode' onClick={handleCopy}>
                <div className='tooltipImpCodeDiv'>
                    <pre><code>
                        <p><span className='cod-pink'>import</span> <span className='cod-yellow'>{'{'}</span> <span className='cod-skyblue'>AutoComplete</span> <span className='cod-yellow'>{'}'}</span> <span className='cod-pink'>from</span> <span className='cod-orange'>'fara-comp-react'</span>;</p>
                    </code></pre>

                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
            </section>
        </div>
    );
};

export default AutoComImp;
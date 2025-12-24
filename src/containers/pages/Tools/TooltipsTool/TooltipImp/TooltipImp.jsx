import './tooltipImp.css';
import { useState } from 'react';
import { Tooltip, Icons } from "fara-comp-react";

const TooltipImp = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Tooltip } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div id="tooltipImp">
            <h4>Importación</h4>
            <p>Tooltip es un componente de React que permite mostrar información contextual de forma clara y no intrusiva al interactuar con un elemento. Está pensado para aportar ayuda rápida, aclaraciones o mensajes complementarios sin afectar el flujo principal de la interfaz.</p>
            <p>Se integra envolviendo cualquier contenido (texto, íconos u otros componentes) y permite configurar su comportamiento y apariencia según las necesidades del proyecto. Su uso favorece interfaces más limpias, mejorando la experiencia del usuario al mostrar información solo cuando es necesaria.</p>

            <section className='cod-back tooltipImpCode' onClick={handleCopy}>
                <div className='tooltipImpCodeDiv'>
                    <pre><code>
                        <p><span className='cod-pink'>import</span> <span className='cod-yellow'>{'{'}</span> <span className='cod-skyblue'>Tooltip</span> <span className='cod-yellow'>{'}'}</span> <span className='cod-pink'>from</span> <span className='cod-orange'>'fara-comp-react'</span>;</p>
                    </code></pre>

                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
            </section>
        </div>
    );
};

export default TooltipImp;
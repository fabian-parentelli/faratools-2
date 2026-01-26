import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const PrintImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Print } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="printImport flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>El componente Print es un botón interactivo que le permite imprimir solo una sección específica de la página, definida por una referencia (ref) pasada desde el componente principal.</p>

            <div className="cod-back flex-center" onClick={handleCopy}
                style={{ alignItems: 'flex-start', gap: '1rem' }}
            >

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Print</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default PrintImport;
import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const LoaderImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Loader } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col loaderImport">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>El componente Loader muestra un indicador visual de carga cuando una acción o proceso está en curso. Utiliza el componente Spinner para representar gráficamente la espera y, opcionalmente, puede mostrar texto descriptivo debajo del spinner. El color del spinner se puede personalizar e informa claramente al usuario de que la aplicación está procesando información..</p>

            <div className="cod-back downPdfToolParaImp" onClick={handleCopy}>

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Loader</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default LoaderImport;
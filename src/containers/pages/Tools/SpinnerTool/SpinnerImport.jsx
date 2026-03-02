import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const SpinnerImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Spinner } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>El componente Spinner es un indicador visual de carga que informa al usuario de que una operación o proceso se está ejecutando. Se representa como un círculo giratorio cuya apariencia se puede personalizar mediante las propiedades de color y tamaño. El color del borde superior se define mediante la propiedad de color, mientras que el tamaño del spinner se define mediante la propiedad de tamaño.</p>

            <div className="cod-back flex-center" onClick={handleCopy}
                style={{ alignItems: 'flex-start', gap: '1rem' }}
            >

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Spinner</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default SpinnerImport;
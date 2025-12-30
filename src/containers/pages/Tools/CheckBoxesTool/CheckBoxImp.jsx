import { useState } from 'react';
import { Icons, Tooltip } from 'fara-comp-react';

const CheckBoxImp = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { CheckBoxes } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="checkBoxImp">
            <h4 className="colaccent">Importación</h4>
            <p>El componente muestra un conjunto de casillas de verificación personalizables que pueden funcionar en modo de selección simple o múltiple. Toma una matriz de etiquetas con nombres e identificadores, mantiene internamente el estado de los elementos seleccionados y actualiza el valor externo mediante la función proporcionada. También permite definir la dirección del diseño de las casillas de verificación y aplicarles un color de acento personalizado.</p>
            
            <div className="cod-back flex-center" style={{ gap: '12px', margin: '1rem 0' }} onClick={handleCopy}>
                <pre>
                    <code>
                        <p><span className='cod-pink'>import</span> <span className='cod-yellow'>{'{'}</span> <span className='cod-skyblue'>CheckBoxes</span> <span className='cod-yellow'>{'}'}</span> <span className='cod-pink'>from</span> <span className='cod-orange'>'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer'>
                    <Icons type={copy ? 'success' : 'copy'} size='15px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default CheckBoxImp;
import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const ProgressBarrPrint = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { ProgressBar } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="progressBarrPrint flex-col">

            <h4 className="colaccent">Importación</h4>
            
            <p className='downPdfToolPara'>El componente ProgressBar es una barra de progreso dinámica que muestra visualmente el progreso de una operación o proceso. Se controla mediante la propiedad de progreso, que indica si la barra está activa (abierta) y puede incluir un color de fondo personalizado. Mientras la barra está activa, el progreso aumenta automáticamente de forma aleatoria hasta aproximadamente el 95 %, simulando un proceso en curso. Cuando la barra de progreso finaliza o se cierra, alcanza el 100 % y se oculta gradualmente. La barra incluye un indicador numérico central que muestra el porcentaje de finalización actual, lo que proporciona una representación visual y cuantitativa del progreso clara y moderna.</p>

            <div className="cod-back flex-center" onClick={handleCopy}
                style={{ alignItems: 'flex-start', gap: '1rem' }}
            >

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">ProgressBar</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default ProgressBarrPrint;
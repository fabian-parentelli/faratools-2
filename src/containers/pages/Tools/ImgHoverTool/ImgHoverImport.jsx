import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const ImgHoverImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { ImgHover } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>El componente ImgHover muestra una imagen que genera un efecto visual al pasar el cursor. Permite controlar si la imagen tiene bordes redondeados, ajustar la escala del contenido mediante ObjectFit y definir si el cursor se convierte en puntero al pasar el cursor sobre la imagen. Al interactuar con la imagen, se activa un contenedor adicional que crea el efecto al pasar el cursor, mejorando la presentación visual sin afectar la imagen original.</p>

            <div className="cod-back downPdfToolParaImp" onClick={handleCopy}>

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">ImgHover</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default ImgHoverImport;
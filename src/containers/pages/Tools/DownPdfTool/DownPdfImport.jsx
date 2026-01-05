import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const DiwnPdfImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Downpdf } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>El componente Downpdf permite descargar un archivo PDF de forma interactiva desde una URL. Al hacer clic en el icono, se descarga automáticamente el archivo con un nombre predeterminado, y una descripción emergente informa al usuario de que la acción es descargar el PDF. Está diseñado para integrarse fácilmente en la interfaz, mostrando un icono de PDF que mejora la experiencia visual y funcional del usuario.</p>

            <div className="cod-back downPdfToolParaImp" onClick={handleCopy}>

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Downpdf</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default DiwnPdfImport;
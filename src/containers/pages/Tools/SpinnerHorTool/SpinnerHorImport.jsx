import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const SpinnerHorImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { SpinnerH } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>El componente SpinnerH es un indicador de carga horizontal compuesto por cinco barras animadas que se mueven secuencialmente, creando un efecto visual dinámico de espera o de un proceso en ejecución. La propiedad de color permite personalizar el color de las barras para que coincida con el tema o estilo de la aplicación; por defecto, utiliza el color gris. Este tipo de indicador giratorio es útil para mostrar que una acción está en progreso de forma visualmente atractiva, especialmente en interfaces donde se prefieren animaciones lineales o menos intrusivas que un indicador giratorio circular.</p>

            <div className="cod-back flex-center" onClick={handleCopy}
                style={{ alignItems: 'flex-start', gap: '1rem' }}
            >

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">SpinnerH</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default SpinnerHorImport;
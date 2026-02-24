import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const SnackbarImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Snackbar } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>El componente Snackbar es una notificación temporal que aparece en pantalla para informar al usuario sobre eventos importantes, como errores, advertencias, información o confirmaciones de éxito. Su visibilidad se controla mediante la propiedad Snack, que define si está abierto (open), el mensaje que se mostrará (message) y el tipo de notificación (status). Al activarse, el componente se muestra durante un tiempo específico (duration) y luego se oculta automáticamente. Incluye un icono correspondiente al tipo de notificación y un mensaje de texto, lo que proporciona una forma clara y visualmente distintiva de comunicar información al usuario de forma concisa y destacada.</p>

            <div className="cod-back flex-center" onClick={handleCopy}
                style={{ alignItems: 'flex-start', gap: '1rem' }}
            >

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Snackbar</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' >
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default SnackbarImport;
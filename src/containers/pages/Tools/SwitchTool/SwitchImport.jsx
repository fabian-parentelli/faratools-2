import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const SwitchImport = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Switch } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col">
            <h4 className="colaccent">Importación</h4>
            <p className='downPdfToolPara'>El componente se integra con un objeto de valores externo (values) mediante `setValues`, actualizando automáticamente la propiedad correspondiente cuando el usuario cambia el estado del interruptor. También permite definir un valor inicial con `pre` y ejecutar una función opcional `setChange` al cambiar el estado.</p>
            <p className='downPdfToolPara'>Además, incluye una etiqueta opcional que se muestra junto al interruptor y utiliza un diseño visual que resalta claramente la opción activa, proporcionando una experiencia de usuario limpia y moderna para controles binarios en formularios o configuraciones.</p>

            <div className="cod-back flex-center" onClick={handleCopy}
                style={{ alignItems: 'flex-start', gap: '1rem' }}
            >

                <pre>
                    <code>
                        <p><span className="cod-pink">import</span> <span className="cod-yellow">{'{'}</span> <span className="cod-skyblue">Switch</span> <span className="cod-yellow">{'}'}</span> <span className="cod-pink">from</span> <span className="cod-orange">'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer' backgroundColor='#00a67e' color='#141414'>
                    <Icons type={copy ? 'success' : 'copy'} size='16px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default SwitchImport;
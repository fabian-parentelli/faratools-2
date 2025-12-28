import { useState } from 'react';
import { Icons, Tooltip } from 'fara-comp-react';

const CharacterIntr = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { CharacterCounter } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="flex-col characterIntr">
            <h4 className='colaccent'>Importación</h4>
            <p>CharacterCounter es un componente de React que permite controlar y visualizar la cantidad de caracteres ingresados en un texto, definiendo límites mínimos y máximos.</p>

            <p>Se utiliza para validar inputs de forma visual y simple, indicando si el contenido cumple con las restricciones establecidas. min, max, text.</p>

            <div className="cod-back flex-center" style={{ gap: '12px', margin: '1rem 0' }} onClick={handleCopy}>
                <pre>
                    <code>
                        <p><span className='cod-pink'>import</span> <span className='cod-yellow'>{'{'}</span> <span className='cod-skyblue'>CharacterCounter</span> <span className='cod-yellow'>{'}'}</span> <span className='cod-pink'>from</span> <span className='cod-orange'>'fara-comp-react'</span>;</p>
                    </code>
                </pre>

                <Tooltip text='Copiar' position='right' cursor='pointer'>
                    <Icons type={copy ? 'success' : 'copy'} size='15px' />
                </Tooltip>
            </div>
        </div>
    );
};

export default CharacterIntr;
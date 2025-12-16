import './import.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons, Tooltip } from "fara-comp-react";

const Import = ({ setParams }) => {

    const navigate = useNavigate();
    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("import { Icons } from 'fara-comp-react';");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="import">
            <h2>Inportación</h2>

            <p>Para instalar y usar este componente en tu proyecto de React es muy sencillo. Solo necesitás agregar la dependencia e importar los íconos donde los vayas a usar. Una vez instalado, podés acceder a todos los íconos directamente mediante:</p>

            <section className='cod-back' onClick={handleCopy}>
                <div className='importDiv'>
                    <pre><code>
                        <p><span className='cod-pink'>import</span> <span className='cod-yellow'>{'{'}</span> <span className='cod-skyblue'>Icons</span> <span className='cod-yellow'>{'}'}</span> <span className='cod-pink'>from</span> <span className='cod-orange'>'fara-comp-react'</span>;</p>
                    </code></pre>

                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'dev' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
            </section>

            <p>Con esto ya tenés disponible el set completo de íconos para integrarlos en tus vistas de forma rápida y limpia.</p>

            <section className='modBottom'>
                <p onClick={() => { navigate('/page/doc?sect=intr'); setParams({ sect: 'intr' }) }}>Documentación</p>
                <p onClick={() => setParams({sect: 'impl'})}>Implementación</p>
            </section>
        </div>
    );
};

export default Import;
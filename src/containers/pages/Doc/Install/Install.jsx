import './install.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons, Tooltip } from "fara-comp-react";

const Install = ({ setParams }) => {

    const navigate = useNavigate();

    const [copy, setCopy] = useState({ copy: false, type: null });

    const handleCopy = (link, type) => {
        setCopy({ copy: true, type });
        navigator.clipboard.writeText(link);
        setTimeout(() => { setCopy({ copy: false, type: null }) }, 2000);
    };

    return (
        <div className="flex-col">
            <h2>Instalación</h2>

            <section className='installText'>
                <p>Instalar faraday-comp-react es muy sencillo. Esta librería fue diseñada para que puedas integrar rápidamente componentes reutilizables, herramientas y clases de estilo en cualquier proyecto React basado en Vite o similar.</p>
                <p>Solo necesitás instalar el paquete desde npm e importar los componentes que quieras utilizar. En pocos minutos vas a tener acceso a botones, iconos, tarjetas, layouts y utilidades pensadas para acelerar tu desarrollo y mantener una interfaz coherente en toda tu aplicación.</p>
            </section>

            <section className='cod-back' onClick={() => handleCopy('pnpm install fara-comp-react', 'inst')}>
                <div className='introDiv'>
                    <p className='introDivText'>pnpm install fara-comp-react</p>

                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'inst' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
            </section>

            <h3>¿Cuál es la mejor forma de usar los estilos?</h3>

            <section className='installText'>
                <p>Para obtener el mejor rendimiento, se recomienda importar la hoja de estilos directamente desde el HTML. De esta manera, el navegador puede cargar el CSS antes del JavaScript, mejorando el tiempo de renderizado y evitando retrasos en la visualización de la interfaz.</p>
                <p>Podés elegir entre dos versiones:</p>
                <p>Versión de desarrollo (Dev): Incluye clases sin minificar, útil para depurar y trabajar más cómodo.</p>
            </section>

            <section className='cod-back' onClick={() => handleCopy('<link rel="stylesheet" href="https://fabian-parentelli.github.io/fara-css/dev.css">', 'dev')}>
                <div className='introDiv'>
                    <pre><code>
                        <p><span className='cod-gray'>{'<'}</span><span className='cod-blue'>link</span> <span className='cod-skyblue'>rel</span>=<span className='cod-orange'>"stylesheet"</span> <span className='cod-skyblue'>href</span>=<span className='cod-orange'>"https://fabian-parentelli.github.io/fara-css/dev.css"</span><span className='cod-gray'>{'>'}</span></p>
                    </code></pre>

                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'dev' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
            </section>

            <section className='installText'>
                <p>Versión estable (Prod): Es la hoja optimizada, minificada y lista para producción.</p>
            </section>

            <section className='cod-back' onClick={() => handleCopy('<link rel="stylesheet" href="https://fabian-parentelli.github.io/fara-css/prod.css">', 'prod')}>
                <div className='introDiv'>
                    <pre><code>
                        <p><span className='cod-gray'>{'<'}</span><span className='cod-blue'>link</span> <span className='cod-skyblue'>rel</span>=<span className='cod-orange'>"stylesheet"</span> <span className='cod-skyblue'>href</span>=<span className='cod-orange'>"https://fabian-parentelli.github.io/fara-css/prod.css"</span><span className='cod-gray'>{'>'}</span></p>
                    </code></pre>

                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'prod' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
            </section>

            <section className='installText'>
                <p>Importando una de estas versiones en tu HTML, ya tendrás disponibles todas las clases, utilidades y estilos globales de la librería sin necesidad de configuraciones adicionales.</p>
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'intr' })}>Introducción</p>
                <p onClick={() => { navigate('/page/icons'); setParams({ sect: 'import' }) }}>Icons</p>
            </section>
        </div>
    );
};

export default Install;
import './intro.css';

const Intro = ({ setParams }) => {

    return (
        <div className="intro">
            <h2>Introducción</h2>

            <section className='introSect'>
                <p>Este proyecto reúne todos los componentes UI que utilizamos en nuestras aplicaciones React: iconos, popups, tooltips, formularios, calendarios, layouts y otros elementos modulares diseñados para ser reutilizables en cualquier parte del sistema. También incluye un conjunto de utilidades de estilo y clases genéricas de CSS que funcionan como un mini-framework, similar a un pequeño Bootstrap adaptado a nuestras necesidades.</p>
                <p>El objetivo es centralizar la documentación y ofrecer una vista previa interactiva de cada componente. Desde esta página podés inspeccionar su funcionamiento, revisar sus propiedades, modificar parámetros en tiempo real y ver cómo responde cada variante. Esto facilita el desarrollo, asegura consistencia visual y agiliza la integración en nuevos proyectos.</p>
                <p>Esta documentación dinámica sirve como referencia para todo el equipo, permitiendo mantener un estándar unificado y evolucionar la librería de componentes de forma ordenada.</p>
            </section>

            <section className='modBottom'>
                <img src="/logo.png" width='60px' alt="img" />
                <p onClick={() => setParams({ sect: 'inst' })}>Instalación</p>
            </section>

        </div>
    );
};

export default Intro;
import './toolsIntro.css';
import { useNavigate } from 'react-router-dom';

const ToolsIntro = ({ setParams }) => {

    const navigate = useNavigate();

    return (
        <div className="toolsIntro">
            <h2>Tools</h2>
            <p>Tools es un conjunto de componentes reutilizables desarrollados en React, pensados para resolver necesidades comunes de interfaz y experiencia de usuario dentro de una aplicación. Su objetivo es acelerar el desarrollo, mantener consistencia visual y simplificar la implementación de patrones UI frecuentes, sin imponer una lógica rígida ni limitar la personalización.</p>
            <p>Estos componentes actúan como bloques funcionales que pueden integrarse fácilmente en distintos contextos del proyecto, adaptándose a flujos simples o más complejos. Tools está orientado a mejorar la usabilidad, el feedback al usuario y la organización de la interfaz, permitiendo construir experiencias claras, predecibles y escalables a lo largo del tiempo.</p>
            <p>La colección está diseñada para ser liviana, flexible y fácil de extender, acompañando el crecimiento de la aplicación sin convertirse en una dependencia restrictiva.</p>
        
            <section className='modBottom'>
                <p onClick={() => { navigate('/page/icons?sect=import'); setParams({ sect: 'import' }) }}>Iconos</p>
                <p onClick={() => setParams({sect: 'tooltip'})}>Tooltip</p>
            </section>
        </div>
    );
};

export default ToolsIntro;
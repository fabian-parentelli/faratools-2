import './header.css';
import { Link } from 'react-router-dom';
import { versions } from '../../../utils/versions.util.js';

const Header = () => {

    return (
        <div className="header">
            <div className='headerTop'>
                <div></div>
                <h5>Faraday´s Tools</h5>
            </div>
            
            <h1>Una colección de componentes modernos y herramientas listas para usar.</h1>

            <div className='headerp'>
                <p>Personalizá, integrá y ampliá cada pieza según tus necesidades. Encontrá calendarios, tooltips, accordions, íconos SVG y más.</p>
                <p>Incluye también un archivo CSS estilo framework para acelerar tu desarrollo.</p>
                <p>Diseñado para que puedas usarlo directamente en tus proyectos.</p>
            </div>

            <div className='btns-row'>
                <Link className='btn decoration-none flex-center btnA'>Inicio</Link>
                <Link className='btn decoration-none flex-center headerA'>Herramientas</Link>
            </div>

            <p className='headerVersion'>Version {versions.generic}</p>
        </div>
    );
};

export default Header;
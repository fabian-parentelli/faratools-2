import './footer.css';
import { Link } from 'react-router-dom';
import FooterColumn from './FooterColumn/FooterColumn';
import FooterSocial from './FooterSocial/FooterSocial';

const Footer = () => {

    return (
        <div className='footer'>

            <Link to={'/'} className='footerA'>
                <img src={`${import.meta.env.BASE_URL}logo.png`} width={'30px'} alt="carrot" />
                <p>Faraday´s Tools</p>
            </Link>

            <section className='footerTop'>
                <FooterColumn data={columnA} />
                <FooterColumn data={columnB} />
                <FooterColumn data={columnC} />
                <FooterColumn data={columnD} />
            </section>

            <section className='footerBottom'>

                <div className='footerBottomL'>
                    <Link to={'/'}>
                        <img src={`${import.meta.env.BASE_URL}logo.png`} width={'50px'} alt="logo" />
                    </Link>
                    <p className='footerBottomCata'>Faraday´s Tools</p>
                    <FooterSocial />
                </div>

                <div className='footerBottomL'>
                    <p className='pgray'>© 2025 Faraday's House </p>

                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img className='footerBottomImg' src={`${import.meta.env.BASE_URL}faraday.png`} width='30px' alt="img" />
                    </a>
                    <p className='pgray'>Todos los derechos reservados.</p>

                    <Link to={'/condition'} style={{ textDecoration: 'none' }}>
                        <p className='pgray'>Términos y condicones</p>
                    </Link>
                    <p className='pgray'>|</p>

                    <Link to={'/securitypolicies'} style={{ textDecoration: 'none' }}>
                        <p className='pgray'>Política de Privacidad</p>
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default Footer;

const columnA = {
    title: 'Faraday´s Tools',
    content: [
        { text: 'Introducción', link: '/page/doc?sect=intr' },
        { text: 'Instalación', link: '/page/doc?sect=inst' },
        { text: 'Versión', link: '/version' },
    ]
};

const columnB = {
    title: 'Iconos',
    content: [
        { text: 'Importación', link: '/page/icons?sect=import' },
        { text: 'Implementación', link: '/page/icons?sect=impl' },
        { text: 'Iconos', link: '/page/icons?sect=icons' },
        { text: 'Actualizaciones', link: '/page/icons?sect=update' },
    ]
};

const columnC = {
    title: 'Tools',
    content: [
        { text: 'Introducción', link: '/page/tools?sect=intr' },
        { text: 'Autocomplete', link: '/page/tools?sect=autocomplete' },
        { text: 'Badge', link: '/page/tools?sect=badge' },
        { text: 'CharacterCounter', link: '/page/tools?sect=character' },
        { text: 'Tooltips', link: '/page/tools?sect=tooltip' },
    ]
};

const columnD = {
    title: 'Css',
    content: [
        { text: '', link: '/' },
    ]
};
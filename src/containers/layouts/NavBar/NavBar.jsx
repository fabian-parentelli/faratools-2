import './navBar.css';
import { Icons, Modal } from "fara-comp-react";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();
    const [traslate, setTraslate] = useState('0');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 767) setTraslate('-320px');
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="navBar">

            <div className='navBarHamb' onClick={() => setTraslate(traslate === '-320px' ? '0' : '-320px')}>
                <Icons type='menu' color='white' />
            </div>

            <section className='navBarSect' style={{ transform: window.innerWidth < 767 ? `translateX(${traslate})` : '' }}>
                <img src="/logo.png" width='30px' alt="logo" onClick={() => navigate('/')} />
                <Link to={'/page/doc?sect=intr'}>Doc</Link>
                <Link>Iconos</Link>
                <Link>Tools</Link>
                <Link>Componentes</Link>
                <Link>Css</Link>
                <Link>Contacto</Link>
            </section>

            <section className='navBarIcons'>
                <div onClick={() => setOpen(true)}>
                    <Icons type='search' color='white' />
                    <p className='pgray'>Buscar documentación</p>
                </div>

                <a href="https://github.com/fabian-parentelli/fara-comp-react" target='_blank'>
                    <Icons type='github' color='white' hover={true} />
                </a>

                <a href="https://www.npmjs.com/package/fara-comp-react" target='_blank'>
                    <Icons type='npm' color='white' />
                </a>
            </section>

            <Modal open={open} onClose={() => setOpen(false)}>
                <p className='pgray'>Modal que busca ...</p>
            </Modal>
        </div>
    );
};

export default NavBar;
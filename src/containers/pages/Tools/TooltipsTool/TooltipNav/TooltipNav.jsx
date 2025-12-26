import './tooltipNav.css';
import { useEffect, useState } from 'react';

const TooltipNav = () => {

    const [scroll, setScroll] = useState(0);

    const scrollTo = (y) => {
        window.scrollTo({ top: y, behavior: 'smooth' });
        setScroll(y);
    };

    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="tooltipNav">
            <p style={{ color: scroll < 400 ? '#00a67e' : 'white' }} onClick={() => scrollTo(0)}>Importación</p>
            <p style={{ color: (scroll >= 400 && scroll < 800) ? '#00a67e' : 'white' }} onClick={() => scrollTo(400)}>Implementación</p>
            <p style={{ color: scroll >= 800 ? '#00a67e' : 'white' }} onClick={() => scrollTo(800)}>Actualización</p>
            <img src="/logo.png" width='100px' alt="" />
        </div>
    );
};

export default TooltipNav;
import './tooltipNav.css';
import { useEffect, useState } from 'react';

const TooltipNav = ({ b = 400, c = 800 }) => {

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
            <p style={{ color: scroll < b ? '#00a67e' : 'white' }} onClick={() => scrollTo(0)}>Importación</p>
            <p style={{ color: (scroll >= b && scroll < c) ? '#00a67e' : 'white' }} onClick={() => scrollTo(b)}>Implementación</p>
            <p style={{ color: scroll >= c ? '#00a67e' : 'white' }} onClick={() => scrollTo(c)}>Actualización</p>
            <img src={`${import.meta.env.BASE_URL}logo.png`} width='100px' alt="" />
        </div>
    );
};

export default TooltipNav;
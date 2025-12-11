import './sider.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sider = ({ params, setParams }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [modules, setModules] = useState([]);

    useEffect(() => {
        const path = location.pathname.split('/')[2];
        const maps = { doc: modDoc, icons: modIcons };
        setModules(maps[path] || []);
    }, [location.pathname]);

    return (
        <div className="sider">

            <section className='siderTop'>
                <img src="/logo.png" width='20px' alt="img" />
                <h5>Documentación</h5>
            </section>

            <section className='siderData'>
                {modules && modules.map(doc => (
                    <p
                        key={doc.id}
                        onClick={doc.link
                            ? () => setParams({ sect: doc.link })
                            : () =>{ navigate(doc.mod); setParams({sect: doc.mod.split('sect=')[1]})}
                        }
                        style={{ color: params.sect === doc.link ? '#00a67e' : '' }}
                    >
                        {doc.name}
                    </p>
                ))}
            </section>

        </div>
    );
};

export default Sider;

const modDoc = [
    {
        id: 1,
        name: 'Introducción',
        link: 'intr'
    },
    {
        id: 2,
        name: 'Instalación',
        link: 'inst'
    },
    {
        id: 3,
        name: 'Iconos',
        mod: 'icons?sect=import'
    },
];

const modIcons = [
    {
        id: 4,
        name: 'Importación',
        link: 'import'
    },
    {
        id: 5,
        name: 'Implementación',
        link: 'impl'
    },
    {
        id: 6,
        name: 'Iconos',
        link: 'vew'
    },
    {
        id: 7,
        name: 'Actualización',
        link: 'update'
    },
    {
        id: 8,
        name: 'Documentación',
        mod: '/page/doc?sect=intr'
    },
    {
        id: 9,
        name: 'Tools',
        mod: 'vew'
    },
    {
        id: 10,
        name: 'Componentes',
        mod: 'vew'
    },
    {
        id: 11,
        name: 'Css',
        mod: 'vew'
    },
    {
        id: 12,
        name: 'Contacto',
        mod: 'vew'
    },
];
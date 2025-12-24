import './sider.css';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { modDoc, modIcons, toolIcons } from '../../../utils/modules.utills.js';

const Sider = ({ params, setParams }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [modules, setModules] = useState([]);

    useEffect(() => {
        const path = location.pathname.split('/')[2];
        const maps = { doc: modDoc, icons: modIcons, tools: toolIcons };
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
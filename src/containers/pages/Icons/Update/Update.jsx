import './update.css';
import { useNavigate } from 'react-router-dom';
import UpdateNav from './UpdateNav/UpdateNav.jsx';
import Update0012 from "./Upd_0.0.12/Upd_0.0.12.jsx";

const Update = ({ setParams }) => {

    const navigate = useNavigate();

    return (
        <div className="flex-col update">
            <h2>Actualizaciones</h2>
            
            <section className='updateSect'>
                
                <div>
                    <Update0012 />
                </div>

                <UpdateNav />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({sect: 'icons'})}>Iconos</p>
                <p onClick={() => { navigate('/page/tools?sect=intr'); setParams({ sect: 'intr' }) }}>Herramientas</p>
            </section>
        </div>
    );
};

export default Update;
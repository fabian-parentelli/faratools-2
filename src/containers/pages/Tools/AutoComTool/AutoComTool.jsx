import './autoComTool.css';
import AutoComImp from './AutoComImp/AutoComImp.jsx';
import AutoComExecute from './AutoComExecute/AutoComExecute.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const AutoComTool = ({ setParams }) => {

    return (
        <div className="autoComTool">
            <h2>AutoComplete</h2>

            <section className='autoComToolSect'>

                <div className='autoComToolDiv'>
                    <AutoComImp />
                    <AutoComExecute />
                </div>

                <TooltipNav b={450} c={1300} />
            </section>

            <h4>Actualización</h4>

            <p>Versión original</p>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'intr' })}>Herramientas</p>
                <p onClick={() => setParams({ sect: 'badge' })}>Badge</p>
            </section>
        </div>
    );
};

export default AutoComTool;
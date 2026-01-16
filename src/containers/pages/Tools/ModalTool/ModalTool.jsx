import './modalTool.css';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav';
import ModalImport from './ModalImport';
import ModalEx from './ModalEx';

const ModalTool = ({ setParams }) => {

    return (
        <div className="modalTool flex-col">
            <h2>Modal</h2>

            <section className='modalToolSect flex-col'>

                <div className='modalToolDiv flex-col'>
                    <ModalImport />
                    <ModalEx />

                    <h4 className="colaccent">Actualizaciónes</h4>
                    <p>Versión original</p>
                </div>

                <TooltipNav b={330} c={880} />
            </section>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'loader' })}>Loader</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltips</p>
            </section>
        </div>
    );
};

export default ModalTool;
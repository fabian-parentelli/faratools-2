import './checkBoxesTool.css';
import CheckBoxExt from './CheckBoxExt.jsx';
import CheckBoxImp from './CheckBoxImp.jsx';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav.jsx';

const CheckBoxesTool = ({ setParams }) => {

    return (
        <div className="checkBoxesTool">
            <h2>CheckBoxes</h2>

            <section className='checkBoxesToolSect'>

                <div className='checkBoxesToolDiv'>
                    <CheckBoxImp />
                    <CheckBoxExt />
                </div>

                <TooltipNav c={1250} />
            </section>

            <h4 className="colaccent">Actualización</h4>

            <p>Versión original</p>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'character' })}>CharacterCounter</p>
                <p onClick={() => setParams({ sect: 'cloudfile' })}>CloudFile</p>
            </section>
        </div>
    );
};

export default CheckBoxesTool;
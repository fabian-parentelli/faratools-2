import './checkBoxesTool.css';
import CheckBoxExt from './CheckBoxExt';
import CheckBoxImp from './CheckBoxImp';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav';

const CheckBoxesTool = ({ setParams }) => {

    return (
        <div className="checkBoxesTool">
            <h2>CheckBoxes</h2>

            <section className='checkBoxesToolSect'>

                <div className='checkBoxesToolDiv'>
                    <CheckBoxImp />
                    <CheckBoxExt />
                </div>

                <TooltipNav />
            </section>

            <h4 className="colaccent">Actualización</h4>

            <p>Versión original</p>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'character' })}>CharacterCounter</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltips</p>
            </section>
        </div>
    );
};

export default CheckBoxesTool;
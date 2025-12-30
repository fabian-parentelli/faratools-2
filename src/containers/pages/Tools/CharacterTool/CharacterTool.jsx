import './characterTool.css';
import TooltipNav from '../TooltipsTool/TooltipNav/TooltipNav';
import CharacterIntr from './CharacterIntr';
import CharacterExecute from './CharacterExecute';

const CharacterTool = ({ setParams }) => {

    return (
        <div className="flex-col">
            <h2>CharacterCounter</h2>

            <section className='flex-center characterToolSect'>

                <div className='characterToolDiv'>
                    <CharacterIntr />
                    <CharacterExecute />
                </div>

                <TooltipNav />
            </section>

            <h4 className="colaccent">Actualización</h4>

            <p>Versión original</p>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'badge' })}>Badge</p>
                <p onClick={() => setParams({ sect: 'chebockses' })}>CheckBoxes</p>
            </section>
        </div>
    );
};

export default CharacterTool;
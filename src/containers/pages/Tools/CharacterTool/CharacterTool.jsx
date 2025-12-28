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

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'badge' })}>Badge</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltips</p>
            </section>
        </div>
    );
};

export default CharacterTool;
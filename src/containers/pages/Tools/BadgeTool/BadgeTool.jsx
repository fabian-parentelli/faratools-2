import TooltipNav from "../TooltipsTool/TooltipNav/TooltipNav.jsx";
import BadgeToolExecute from "./BadgeToolExecute.jsx";
import BadgeToolIntr from "./BadgeToolIntr.jsx";

const BadgeTool = ({ setParams }) => {

    return (
        <div className="flex-col">
            <h2>Badge</h2>

            <section className="flex-center" style={{ alignItems: 'flex-start' }}>

                <div style={{ width: '700px' }}>
                    <BadgeToolIntr />
                    <BadgeToolExecute />
                </div>

                <TooltipNav />
            </section>

            <h4 className="colaccent">Actualización</h4>

            <p>Versión original</p>

            <section className='modBottom'>
                <p onClick={() => setParams({ sect: 'autocomplete' })}>Autocomplete</p>
                <p onClick={() => setParams({ sect: 'tooltip' })}>Tooltip</p>
            </section>
        </div>
    );
};

export default BadgeTool;
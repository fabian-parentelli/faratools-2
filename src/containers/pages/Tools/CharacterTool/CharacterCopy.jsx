import { Tooltip, Icons } from 'fara-comp-react';
import { useState } from 'react';

const CharacterCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<CharacterCounter  min={30} max={100} text={'text'} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center characterCopy" onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">CharacterCounter</span>  <span className="cod-skyblue">min</span>=<span className="cod-yellow">{'{'}</span><span className="cod-skyblue">30</span><span className="cod-yellow">{'}'}</span> <span className="cod-skyblue">max</span>=<span className="cod-yellow">{'{'}</span><span className="cod-skyblue">100</span><span className="cod-yellow">{'}'}</span> <span className="cod-skyblue">text</span>=<span className="cod-yellow">{'{'}</span><span className="cod-orange">{"'text'"}</span><span className="cod-yellow">{'}'}</span> <span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default CharacterCopy;
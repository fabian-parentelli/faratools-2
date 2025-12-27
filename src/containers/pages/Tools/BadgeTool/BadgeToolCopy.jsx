import { Tooltip, Icons } from 'fara-comp-react';
import { useState } from 'react';

const BadgeToolCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Badge type='app' name={3} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center" style={{ gap: '1rem', margin: '1rem 0' }} onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Badge</span> <span className="cod-skyblue">type</span>=<span className="cod-orange">'app'</span> <span className="cod-skyblue">name</span>=<span className="cod-yellow">{'{'}</span><span className="cod-skyblue">3</span><span className="cod-yellow">{'}'}</span> <span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default BadgeToolCopy;
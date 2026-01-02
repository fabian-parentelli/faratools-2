import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const CopyToolsCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Copy text='text' size={12} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center" style={{ gap: '1rem', margin: '1rem 0' }} onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Copy</span> <span className="cod-skyblue">text</span>=<span className="cod-orange">'text'</span> <span className="cod-skyblue">size</span>=<span className="cod-yellow">{'{'}</span><span className="cod-skyblue">12</span><span className="cod-yellow">{'}'}</span> <span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default CopyToolsCopy;
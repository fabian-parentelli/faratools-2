import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const PrintCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Print useRef={ref} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center loaderCopy" onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Print</span> <span className="cod-skyblue">useRef</span>=<span className="cod-yellow">{'{'}</span><span className='cod-blue'>ref</span><span className='cod-yellow'>{'}'}</span> <span className='cod-gray'>{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default PrintCopy;
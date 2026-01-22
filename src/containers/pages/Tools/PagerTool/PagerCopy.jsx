import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const PagerCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Pager docs={docs} setQuery={setQuery} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center loaderCopy" onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Pager</span> <span className="cod-skyblue">docs</span>=<span className="cod-yellow">{'{'}</span><span className='cod-blue'>docs</span><span className='cod-yellow'>{'}'}</span> <span className="cod-gray"><span className='cod-skyblue'>setQuery</span>=<span className='cod-yellow'>{'{'}</span><span className='cod-blue'>setQuery</span><span className='cod-yellow'>{'}'}</span> {'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default PagerCopy;
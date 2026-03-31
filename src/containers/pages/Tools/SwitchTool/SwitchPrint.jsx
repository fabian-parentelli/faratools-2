import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const switchPrint = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Switch value={values} setValues={setValues} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center loaderCopy" onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Switch</span> <span className="cod-skyblue">value</span>=<span className='cod-yellow'>{'{'}</span><span className='cod-skyblue'>values</span><span className='cod-yellow'>{'}'}</span> <span className="cod-skyblue">setValues</span>=<span className='cod-yellow'>{'{'}</span><span className='cod-skyblue'>setValues</span><span className='cod-yellow'>{'}'}</span> <span className='cod-gray'>{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer' backgroundColor='#00a67e' color='#141414'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default switchPrint;
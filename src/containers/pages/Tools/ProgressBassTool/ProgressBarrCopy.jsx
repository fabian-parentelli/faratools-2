import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const ProgressBarrCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<ProgressBar open={false} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
       <div className="cod-back flex-center loaderCopy" onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">ProgressBar</span> <span className="cod-skyblue">open</span>=<span className="cod-yellow">{'{'}</span><span className='cod-blue'>false</span><span className='cod-yellow'>{'}'}</span> <span className='cod-gray'>{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default ProgressBarrCopy;
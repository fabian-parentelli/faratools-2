import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const LoaderCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Loader loading={true} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center loaderCopy" onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Loader</span> <span className="cod-skyblue">loading</span>=<span className="cod-yellow">{'{'}</span><span className='cod-blue'>true</span><span className='cod-yellow'>{'}'}</span> <span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default LoaderCopy;
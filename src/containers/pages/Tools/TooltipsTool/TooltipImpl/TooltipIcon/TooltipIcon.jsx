import { useState } from 'react';
import { Icons, Tooltip } from "fara-comp-react";

const TooltipIcon = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText(`<Tooltip text=''>

            </Tooltip>`
        );
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <section className='cod-back flex-center' onClick={handleCopy} style={{ width: '260px', }}>
            <pre><code>
                <p><span className='cod-gray'>{'<'}</span><span className='cod-green'>Tooltip</span> <span className='cod-skyblue'>text</span>=<span className='cod-orange'>''</span><span className='cod-gray'></span><span className='cod-gray'>{'>'}</span> <span className='cod-gray'>{'</'}</span><span className='cod-green'>Tooltip</span><span className='cod-gray'></span><span className='cod-gray'>{'>'}</span></p>
            </code></pre>

            <Tooltip text='Copiar' position='right'>
                <Icons type={copy ? 'success' : 'copy'} size='23px' hover={true} />
            </Tooltip>
        </section>
    );
};

export default TooltipIcon;
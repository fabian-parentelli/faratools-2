import { useState } from 'react';
import { Icons, Tooltip } from "fara-comp-react";

const ImpleIcon = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Icons type='app' />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <section className='cod-back impleDiv' onClick={handleCopy}>
            <pre><code>
                <p><span className='cod-gray'>{'<'}</span><span className='cod-green'>Tooltip</span> <span className='cod-skyblue'>type</span>=<span className='cod-orange'>'app'</span> <span className='cod-gray'>/</span><span className='cod-gray'>{'>'}</span></p>
            </code></pre>

            <Tooltip text='Copiar' position='right'>
                <Icons type={copy ? 'success' : 'copy'} size='23px' hover={true} />
            </Tooltip>
        </section>
    );
};

export default ImpleIcon;
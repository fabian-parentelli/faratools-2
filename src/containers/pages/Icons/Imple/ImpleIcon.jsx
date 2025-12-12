import { useState } from 'react';
import { Icons, Tooltip } from "fara-comp-react";

const ImpleIcon = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Icons />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <section className='cod-back impleDiv' onClick={handleCopy}>
            <pre><code>
                <p><span className='cod-gray'>{'<'}</span><span className='cod-green'>Icons</span> <span className='cod-gray'>/</span><span className='cod-gray'>{'>'}</span></p>
            </code></pre>

            <Tooltip text='Copiar' position='right'>
                <Icons type={copy ? 'success' : 'copy'} size='23px' hover={true} />
            </Tooltip>
        </section>
    );
};

export default ImpleIcon;
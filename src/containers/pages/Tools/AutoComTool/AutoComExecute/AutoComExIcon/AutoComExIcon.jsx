import { useState } from 'react';
import { Icons, Tooltip } from "fara-comp-react";

const AutoComExIcon = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<AutoComplete options={[]} labelKey='label' />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <section className='cod-back flex-center' onClick={handleCopy} style={{ width: '360px', }}>
            <pre><code>
                <p><span className='cod-gray'>{'<'}</span><span className='cod-green'>AutoComplete</span> <span className='cod-skyblue'>options</span>=<span className='cod-yellow'>{'{}'}</span><span className='cod-gray'></span> <span className='cod-skyblue'>labelKey</span>=<span className='cod-orange'>'label'</span> <span className='cod-gray'>{'/>'}</span></p>
            </code></pre>

            <Tooltip text='Copiar' position='right'>
                <Icons type={copy ? 'success' : 'copy'} size='23px' hover={true} />
            </Tooltip>
        </section>
    );
};

export default AutoComExIcon;
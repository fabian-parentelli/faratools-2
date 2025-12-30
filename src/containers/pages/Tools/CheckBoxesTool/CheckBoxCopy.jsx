import { useState } from 'react';
import { Icons, Tooltip } from 'fara-comp-react';

const CheckBoxCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<CheckBoxes labels={[]} setType={setType} />");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center" style={{ gap: '12px', margin: '1rem 0' }} onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className='cod-gray'>{'<'}</span><span className='cod-green'>CheckBoxes</span> <span className='cod-skyblue'>labels</span>=<span className='cod-blue'>{'{'}</span><span className='cod-skyyellow'>{'[]'}</span><span className='cod-blue'>{'}'}</span> <span className='cod-skyblue'>setType</span>=<span className='cod-blue'>{'{'}</span><span className='cod-skyyellow'>setType</span><span className='cod-blue'>{'}'}</span> <span className='cod-gray'>{'/>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} size='15px' />
            </Tooltip>
        </div>
    );
};

export default CheckBoxCopy;
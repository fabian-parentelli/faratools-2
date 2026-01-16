import { useState } from 'react';
import { Tooltip, Icons } from 'fara-comp-react';

const ModalCopy = () => {

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        setCopy(true);
        navigator.clipboard.writeText("<Modal open={open} onClose={()=> setOpen(false)}> </Modal>");
        setTimeout(() => { setCopy(false) }, 2000);
    };

    return (
        <div className="cod-back flex-center modalCopy" onClick={handleCopy}>
            <pre>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Modal</span> <span className="cod-skyblue">open</span>=<span className="cod-yellow">{'{'}</span><span className='cod-blue'>open</span><span className='cod-yellow'>{'}'}</span> <span className='cod-skyblue'>onClose</span>=<span className='cod-yellow'>{'{'}</span><span className='cod-blue'>{'()=>'}</span> <span className='cod-skyyellow'>setOpen</span><span className='cod-blue'>{'('}</span><span className='cod-skyblue'>false</span><span className='cod-blue'>{')'}</span><span className='cod-yellow'>{'}'}</span><span className="cod-gray">{'>'}</span> <span className='cod-gray'>{'</'}</span><span className='cod-green'>Modal</span><span className='cod-gray'>{'>'}</span></p>
                </code>
            </pre>

            <Tooltip text='Copiar' position='right' cursor='pointer'>
                <Icons type={copy ? 'success' : 'copy'} color='gray' size='15px' />
            </Tooltip>
        </div>
    );
};

export default ModalCopy;
import { useState } from "react";
import { Icons, Tooltip } from "fara-comp-react";

const ImpleInputs = () => {

    const [copy, setCopy] = useState({ copy: false, type: 'null' });

    return (
        <section className='impleInputs'>

            <label>
                <div className='impleDiv'>
                    <p>color</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'color' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
                <input type="text" />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>size</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'size' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
                <input type="text" />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>onClick</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'onClick' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
                <input type="text" />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>backCol</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'backCol' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
                <input type="text" />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>bold</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'bold' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
                <input type="text" />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>type</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'type' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
                <input type="text" />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>hover</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'hover' ? 'success' : 'copy'} size='23px' hover={true} />
                    </Tooltip>
                </div>
                <input type="text" />
            </label>

        </section>
    );
};

export default ImpleInputs;
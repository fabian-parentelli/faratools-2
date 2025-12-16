import { useState } from "react";
import { Icons, Tooltip } from "fara-comp-react";

const ImpleInputs = ({ values, setValus }) => {

    const [copy, setCopy] = useState({ copy: false, type: 'null' });

    const handleCopy = (type) => {
        setCopy({ copy: true, type });
        navigator.clipboard.writeText(type);
        setTimeout(() => { setCopy({ copy: false, type: null }) }, 2000);
    };

    const handleChange = (e) => setValus({ ...values, [e.target.name]: e.target.value });

    return (
        <section className='impleInputs'>

            <label>
                <div className='impleDiv'>
                    <p>color</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'color' ? 'success' : 'copy'} size='23px' hover={true} onClick={() => handleCopy('color')} />
                    </Tooltip>
                </div>
                <input type="text" name="color" value={values?.color || ''} onChange={handleChange} />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>size</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'size' ? 'success' : 'copy'} size='23px' hover={true} onClick={() => handleCopy('size')} />
                    </Tooltip>
                </div>
                <input type="text" name="size" value={values?.size || ''} onChange={handleChange} />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>onClick</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'onClick' ? 'success' : 'copy'} size='23px' hover={true} onClick={() => handleCopy('onClick')} />
                    </Tooltip>
                </div>
                <input type="text" name="onClick" value={values?.onClick || ''} onChange={handleChange} />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>backCol</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'backCol' ? 'success' : 'copy'} size='23px' hover={true} onClick={() => handleCopy('backCol')} />
                    </Tooltip>
                </div>
                <input type="text" name="backCol" value={values?.backCol || ''} onChange={handleChange} />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>bold</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'bold' ? 'success' : 'copy'} size='23px' hover={true} onClick={() => handleCopy('bold')} />
                    </Tooltip>
                </div>
                <input type="text" name="bold" value={values?.bold || ''} onChange={handleChange} />
            </label>

            <label>
                <div className='impleDiv'>
                    <p>type</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'type' ? 'success' : 'copy'} size='23px' hover={true} onClick={() => handleCopy('type')} />
                    </Tooltip>
                </div>

                <select name="type" value={values.type || ''} onChange={handleChange}>
                    <option value="app">app</option>
                    <option value="user">user</option>
                    <option value="send">send</option>
                    <option value="clip">clip</option>
                </select> 
            
            </label>

            <label>
                <div className='impleDiv'>
                    <p>hover</p>
                    <Tooltip text='Copiar' position='right'>
                        <Icons type={copy.type === 'hover' ? 'success' : 'copy'} size='23px' hover={true} onClick={() => handleCopy('hover')} />
                    </Tooltip>
                </div>

                <select name="hover" value={values.hover || ''} onChange={handleChange}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </select>
            </label>

        </section>
    );
};

export default ImpleInputs;
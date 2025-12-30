import './autoComExCode.css';
import { useState } from 'react';
import { AutoComplete } from 'fara-comp-react';

const AutoComExCode = ({ values, keys }) => {

    const [data, setData] = useState(null);

    return (
        <div className="autoComExCode">

            <pre className='cod-back'>
                <code>
                    <p><span className='cod-blue'>const</span> <span className='cod-pink'>{'['}</span><span className='cod-skyblue'>data</span>, <span className='cod-skyyellow'>setData</span><span className='cod-pink'>{']'}</span> = <span className='cod-skyyellow'>useState</span><span className='cod-pink'>{'('}</span><span className='cod-blue'>null</span><span className='cod-pink'>{')'}</span>;</p>

                    <br />

                    <p><span className='cod-gray'>{'<'}</span><samp className='cod-green'>AutoComplete</samp></p>
                    <p style={{ marginTop: '3px' }}>    <span className='cod-skyblue'>options</span>=<span className='cod-blue'>{'{'}</span><span className='cod-skyblue'>{values.options || ''}</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>    <span className='cod-skyblue'>labelKey</span>=<span className='cod-orange'>'{values?.labelKey || ''}'</span></p>
                    <p style={{ marginTop: '3px' }}>    <span className='cod-skyblue'>setData</span>=<span className='cod-blue'>{'{'}</span><span className='cod-skyyellow'>setData</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>    <span className='cod-skyblue'>style</span>=<span className='cod-blue'>{'{'}</span><span className='cod-yellow'>{'{'}</span></p>
                    <p style={{ marginTop: '3px' }}>        <span className='cod-skyblue'>width:</span> <span className='cod-orange'>'{values?.width || ''}'</span>,</p>
                    <p style={{ marginTop: '3px' }}>        <span className='cod-skyblue'>height:</span> <span className='cod-orange'>'{values?.height || ''}'</span>,</p>
                    <p style={{ marginTop: '3px' }}>        <span className='cod-skyblue'>placeholder:</span> <span className='cod-orange'>'{values?.placeholder || ''}'</span></p>
                    <p style={{ marginTop: '3px' }}>    <span className='cod-yellow'>{'}'}</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>    <span className='cod-skyblue'>selectedId</span>=<span className='cod-blue'>{'{'}</span><span className='cod-skyblue'>1</span> || <span className='cod-blue'>Null</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}><span className='cod-gray'>{'/>'}</span></p>
                </code>
            </pre>

            <section className='autoComExCodeSect'>
                <div style={{ width: values.width, height: values.height }}>
                    <AutoComplete
                        key={keys}
                        setData={setData}
                        options={values.options == 'fruts' ? fruts : users}
                        labelKey={values.labelKey}
                        style={{
                            width: values.width,
                            height: values.height,
                            placeholder: values.placeholder
                        }}
                    />
                </div>

                <pre className='cod-back'>
                    <code>
                        <p><span className='cod-pink'>console</span>.<span className='cod-red'>log</span><span className='cod-yellow'>{'('}</span>{!data?._id && <><span className='cod-blue'>null</span><span className='cod-yellow'>{')'}</span>;</>}</p>
                        {data?._id && <p style={{marginTop: '3px'}}>    <span className='cod-blue'>{'{'}</span> <span className='cod-skyblue'>_id:</span><span className='cod-green'> {data?._id}</span>, <span className='cod-skyblue'>{values.labelKey}:</span> <span className='cod-orange'>'{data?.name || data?.label}'</span> <span className='cod-blue'>{'}'}</span></p>}
                        {data?._id && <p className='cod-yellow'>{')'}</p>}
                    </code>
                </pre>
                
                <p className='pgray'>El log lo hacemos al estado data</p>
            </section>
        </div>
    );
};

export default AutoComExCode;

const fruts = [
    { _id: 1, label: 'Manzana' },
    { _id: 2, label: 'Pera' },
    { _id: 3, label: 'Naranja' }
];

const users = [
    { _id: 'a', name: 'Cande' },
    { _id: 'b', name: 'Pedro' },
    { _id: 'c', name: 'Erika' }
];
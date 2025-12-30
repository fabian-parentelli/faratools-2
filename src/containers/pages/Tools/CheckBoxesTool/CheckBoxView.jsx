import { useState } from 'react';
import { CheckBoxes } from 'fara-comp-react';

const CheckBoxView = ({ values }) => {

    const [type, setType] = useState([]);

    const fruts = [
        { _id: 1, name: 'Manzana' },
        { _id: 2, name: 'Pera' },
        { _id: 3, name: 'Naranja' }
    ];

    const users = [
        { _id: 'a', name: 'Cande' },
        { _id: 'b', name: 'Pedro' },
        { _id: 'c', name: 'Erika' }
    ];

    return (
        <div className="checkBoxView">

            <pre className="cod-back">
                <code>
                    <p><span className='cod-blue'>const</span> <span className='cod-pink'>{'['}</span><span className='cod-skyblue'>type</span>, <span className='cod-skyyellow'>setType</span><span className='cod-pink'>{']'}</span> = <span className='cod-skyyellow'>useState</span><span className='cod-pink'>{'('}</span><span className='cod-blue'>null</span><span className='cod-pink'>{')'}</span>;</p>

                    <br />

                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">CheckBoxes</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">labels</span>=<span className="cod-blue">{'{'}</span><span className='cod-skyblue'>{values.labels}</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">selecteds</span>=<span className="cod-blue">{'{'}</span><span className='cod-yellow'>{'['}</span><span className='cod-pink'>{'{'}</span> <span className='cod-skyblue'>_id:</span> <span className='cod-green'>2</span>, <span className='cod-skyblue'>name:</span> <span className='cod-orange'>'item'</span><span className='cod-pink'>{'}'}</span><span className='cod-yellow'>{']'}</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">multiSelect</span>=<span className="cod-blue">{'{'}</span><span className='cod-blue'>{values.multiSelect == 'true' ? 'true' : 'false'}</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">direction</span>=<span className='cod-orange'>'{values.direction}'</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">setType</span>=<span className="cod-blue">{'{'}</span><span className='cod-skyyellow'>setType</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">accentColor</span>=<span className='cod-orange'>'{values.accentColor}'</span></p>
                    <p style={{ marginTop: '6px' }}><span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <section className='flex-col'>
                <CheckBoxes
                    labels={values.labels === 'fruts' ? fruts : users}
                    multiSelect={values.multiSelect == 'true' ? true : false}
                    direction={values.direction}
                    setType={setType}
                    accentColor={values.accentColor}
                />

                {values.multiSelect === 'true' ?
                    <div>
                        <pre className='cod-back'>
                            <code>
                                {Array.isArray(type) && type.length === 0 &&
                                    <p><span className='cod-pink'>console</span>.<span className='cod-red'>log</span><span className='cod-yellow'>{'('}</span>{!type?._id && <><span className='cod-blue'>{'[]'}</span><span className='cod-yellow'>{')'}</span>;</>}</p>
                                }

                                {type.length > 0 &&
                                    <p><span className='cod-pink'>console</span>.<span className='cod-red'>log</span><span className='cod-yellow'>{'('}</span></p>
                                }

                                <div>
                                    {type.length > 0 && type.map(doc => (
                                        <p key={doc._id} style={{ marginTop: '6px' }}>   <span className='cod-blue'>{'{'}</span> <span className='cod-skyblue'>_id:</span> <span className='cod-green'>{doc._id}</span>, <span className='cod-skyblue'>name:</span> <span className='cod-orange'>'{doc.name}'</span> <span className='cod-blue'>{'}'}</span>,</p>
                                    ))}
                                </div>

                                {type.length > 0 && <p><span className='cod-yellow'>{')'}</span>;</p>}
                            </code>
                        </pre>

                        <p className='pgray'>El log lo hacemos al estado type</p>
                    </div>
                    : <div>
                        <pre className='cod-back'>
                            <code>
                                <p><span className='cod-pink'>console</span>.<span className='cod-red'>log</span><span className='cod-yellow'>{'('}</span>{!type?._id && <><span className='cod-blue'>null</span><span className='cod-yellow'>{')'}</span>;</>}</p>
                                {type?._id &&
                                    <>
                                        <p>   <span className='cod-blue'>{'{'}</span> <span className='cod-skyblue'>_id:</span> <span className='cod-green'>{type?._id}</span>, <span className='cod-skyblue'>name:</span> <span className='cod-orange'>'{type?.name}'</span> <span className='cod-blue'>{'}'}</span></p>
                                        <p><span className='cod-yellow'>{')'}</span>;</p>
                                    </>
                                }
                            </code>
                        </pre>
                    </div>
                }
            </section>

        </div>
    );
};

export default CheckBoxView;
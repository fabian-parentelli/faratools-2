import { Print } from 'fara-comp-react';
import { useRef } from 'react';

const PrintView = ({ values }) => {

    const ref = useRef();

    return (
        <div className="printView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-blue">const</span> <span className="cod-skyblue">ref</span> = <span className="cod-skyyellow">useRef</span><span className="cod-pink">()</span>;</p>
                    <br />

                    <p><span className="cod-gray">{'<'}</span><span className="cod-blue">section</span> <span className="cod-skyblue">ref</span>=<span className="cod-blue">{'{'}</span><span className="cod-skyblue">ref</span><span className="cod-blue">{'}'}</span><span className="cod-gray">{'>'}</span></p>
                    <p style={{ marginTop: '6px' }} ref={ref}>     Solo este texto será impreso</p>
                    <p style={{ marginTop: '6px' }}><span className="cod-gray">{'</'}</span><span className="cod-blue">section</span><span className="cod-gray">{'>'}</span></p>

                    <br />

                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Print</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">color</span>=<span className="cod-orange">'{values.color}'</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">size</span>=<span className="cod-orange">'{values.size}'</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">position</span>=<span className="cod-orange">'{values.position}'</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">position</span>=<span className="cod-blue">{'{'}</span><span className="cod-skyyellow">ref</span><span className="cod-blue">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">bodyClass</span>=<span className="cod-orange">'{values.bodyClass}'</span></p>
                    <p style={{ marginTop: '6px' }}><span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <pre className='cod-back'>
                <code>
                    <p className='cod-skyyellow'>{'.divPrintA {'}</p>
                    <p>     <span className='cod-skyblue'>font-size:</span> <span className='cod-orange'>1rem</span></p>
                    <p className='cod-skyyellow'>{'}'}</p>
                    <br />
                    
                    <p className='cod-skyyellow'>{'.divPrintB {'}</p>
                    <p>     <span className='cod-skyblue'>font-size:</span> <span className='cod-orange'>2rem</span></p>
                    <p className='cod-skyyellow'>{'}'}</p>
                    <br />
                    
                    <p className='cod-skyyellow'>{'.divPrintC {'}</p>
                    <p>     <span className='cod-skyblue'>font-size:</span> <span className='cod-orange'>4rem</span></p>
                    <p className='cod-skyyellow'>{'}'}</p>
                    <br />

                    <p className='cod-gray'>Estilos de ejemplo (personalizados)</p>
                </code>
            </pre>

            <Print
                color={values.color}
                size={values.size}
                position={values.position}
                useRef={ref}
                bodyClass={values.bodyClass}
            />
        </div>
    );
};

export default PrintView;
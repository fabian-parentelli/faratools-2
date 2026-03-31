import { Switch } from 'fara-comp-react';

const SwitchView = ({ values }) => {

    return (
        <div className="switchView">

            <pre className="cod-back">
                <code>
                    <p><span className='cod-blue'>const</span> <span className='cod-pink'>{'['}</span><span className='cod-skyblue'>values</span>, <span className='cod-skyyellow'>setValues</span><span className='cod-pink'>{']'}</span> = <span className='cod-skyyellow'>useState</span><span className='cod-pink'>{'('}</span><span className='cod-blue'>{'{'}</span> <span className='cod-skyblue'>isUser</span>: <span className='cod-blue'>{"true }"}</span><span className='cod-pink'>{')'}</span>;</p>
                    <p><span className='cod-blue'>const</span> <span className='cod-pink'>{'['}</span><span className='cod-skyblue'>change</span>, <span className='cod-skyyellow'>setChange</span><span className='cod-pink'>{']'}</span> = <span className='cod-skyyellow'>useState</span><span className='cod-pink'>{'('}</span><span className='cod-blue'>false</span><span className='cod-pink'>{')'}</span>;</p>
                    <br />
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Switch</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>values</span>=<span className='cod-blue'>{'{'}</span><span className='cod-skyblue'>values</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>setValues</span>=<span className='cod-blue'>{'{'}</span><span className='cod-skyyellow'>setValues</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>pre</span>=<span className='cod-blue'>{'{'}</span><span className='cod-blue'>true</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>name</span>=<span className='cod-blue'>{'{'}</span><span className='cod-orange'>"isUser"</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>activeColor</span>=<span className='cod-blue'>{'{'}</span><span className='cod-orange'>"{values?.activeColor}"</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>setChange</span>=<span className='cod-blue'>{'{'}</span><span className='cod-skyyellow'>setChange</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>label</span>=<span className='cod-blue'>{'{'}</span><span className={values.label !== 'none' ? 'cod-orange' : 'cod-blue'}>{values?.label}</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>statusFalse</span>=<span className='cod-blue'>{'{'}</span><span className='cod-orange'>"{values?.statusFalse}"</span><span className='cod-blue'>{'}'}</span></p>
                    <p style={{ marginTop: '3px' }}>     <span className='cod-skyblue'>statusTrue</span>=<span className='cod-blue'>{'{'}</span><span className='cod-orange'>"{values?.statusTrue}"</span><span className='cod-blue'>{'}'}</span></p>

                    <p style={{ marginTop: '6px' }}><span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <section className='flex-col'>
                <Switch
                    activeColor={values.activeColor}
                    label={values.label !== 'none' ? values.label : null}
                    statusFalse={values.statusFalse}
                    statusTrue={values.statusTrue}
                />

                <p className='pgray'><strong>name:</strong> Indicamos la llave del obj dentro de values.<br /> Esto es lo que va a leer el switch.</p>
                <p className='pgray'><strong>pre:</strong> Es opcional</p>
                <p className='pgray'><strong>setChange:</strong> Es opcional, sire para detectar si hay un cambios</p>
                <p className='pgray'><strong>label:</strong> Es opcional</p>
                <p className='pgray'><strong>statusFalse:</strong> Es opcional</p>
                <p className='pgray'><strong>statusTrue:</strong> Es opcional</p>
            </section>

        </div>
    );
};

export default SwitchView;
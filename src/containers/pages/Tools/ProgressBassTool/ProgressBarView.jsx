import { ProgressBar } from 'fara-comp-react';

const ProgressBarView = ({ values }) => {

    return (
        <div className="progressBarView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">ProgressBar</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">open</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values.active}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">background</span>=<span className="cod-orange">"{values.color}"</span></p>
                    <p style={{ marginTop: '6px' }} className="cod-gray">{'/>'}</p>
                </code>
            </pre>

            <section className='flex-col'>
                <ProgressBar
                    open={values.active === 'true' ? true : false}
                    background={values.color}
                />
                
                <p className='pwhite'>Al pasar el prop active a true se muestra la barra de progreso</p>
            </section>

        </div>
    );
};

export default ProgressBarView;
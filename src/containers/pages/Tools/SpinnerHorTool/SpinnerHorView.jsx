import { SpinnerH } from 'fara-comp-react';

const SpinnerHorView = ({ values }) => {

    return (
        <div className="spinnerHorView">
            <pre className="cod-back" style={{width: '180px'}}>
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">SpinnerH</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">color</span>=<span className="cod-orange">"{values}"</span></p>
                    <p style={{ marginTop: '6px' }}><span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <section className='flex-col'>
                <button className="btn btnB btn-center">
                    <SpinnerH color={values} />
                </button>

                <p className='pwhite'>A modo de ejemplo el SpinnerH lo implementamos en un botón</p>
            </section>
        </div>
    );
};

export default SpinnerHorView;
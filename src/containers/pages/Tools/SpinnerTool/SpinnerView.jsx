import { Spinner } from 'fara-comp-react';

const SpinnerView = ({ values }) => {

    return (
        <div className="spinnerView">

            <pre className='cod-back'>
                <code>
                    <p><span className='cod-gray'>{'<'}</span><span className='cod-green'>Spinner</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">color</span>=<span className="cod-orange">'{values.color}'</span></p>
                    <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">size</span>=<span className="cod-orange">'{values.size}'</span></p>
                    <p style={{ marginTop: '6px' }} className='cod-gray'>{'/>'}</p>
                </code>
            </pre>
        
            <Spinner color={values.color} size={values.size} />
        </div>
    );
};

export default SpinnerView;
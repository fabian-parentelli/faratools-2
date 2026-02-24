import { Snackbar } from 'fara-comp-react';

const SnackbarView = ({ values, setValues }) => {

    const handleClick = () => {
        setValues({ ...values, open: 'true' });
        setTimeout(() => {
            setValues({ ...values, open: 'false' });
        }, +values.duration);
    };

    return (
        <div className="snackbarView">
            <pre className="cod-back">
                <code>
                    <p><span className="cod-pink">const</span> <span className="cod-blue">snack</span> = <span className="cod-pink">{'{'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">open</span>: <span className="cod-blue">{values?.open}</span>,</p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">status</span>: <span className="cod-orange">"{values?.status}"</span>,</p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">message</span>: <span className="cod-orange">"{values?.message}"</span></p>
                    <p style={{ marginTop: '6px' }}><span className="cod-pink">{'}'}</span>;</p>

                    <br />

                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Snackbar</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">snack</span>=<span className="cod-blue">{'{snack}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">duration</span>=<span className="cod-blue">{'{'}</span><span className="cod-skyyellow">{values?.duration}</span><span className="cod-blue">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}><span className="cod-gray">{'/>'}</span></p>
                </code>
            </pre>

            <button className="btn btnB" onClick={handleClick}>Alerta</button>

            <Snackbar
                snack={{
                    open: values.open === 'true',
                    status: values.status,
                    message: values.message
                }}
                duration={+values.duration}
            />
        </div>
    );
};

export default SnackbarView;
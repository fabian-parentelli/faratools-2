import { Modal } from 'fara-comp-react';

const ModalView = ({ values, setValues }) => {

    return (
        <div className="modalView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-blue">const</span> <span className="cod-pink">{'['}</span><span className="cod-skyblue">open</span>, <span className="cod-skyyellow">setOpen</span><span className="cod-pink">{']'}</span> = <span className="cod-skyyellow">useState</span><span className="cod-pink">{'('}</span><span className="cod-blue">false</span><span className="cod-pink">{')'}</span>;</p>
                    <br />
                    <br />
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Modal</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">open</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values.open == 'true' ? 'true' : 'false'}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">onClose</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{'()=>'}</span> <span className="cod-skyyellow">setOpen</span><span className="cod-blue">{'('}</span><span className="cod-skyblue">!open</span><span className="cod-blue">{')'}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">btn</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values.btn == 'true' ? 'true' : 'false'}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">btnName</span><span className="cod-orange">'{values?.btnName || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">btnBackColor</span><span className="cod-orange">'{values?.btnBackColor || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">btnColor</span><span className="cod-orange">'{values?.btnColor || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">backgroundColor</span><span className="cod-orange">'{values?.backgroundColor || ''}'</span></p>
                    <p style={{ marginTop: '6px' }} className="cod-gray">{'/>'}</p>
                    <p style={{ marginTop: '6px' }}>    Contenido...</p>
                    <p style={{ marginTop: '6px' }}><span className="cod-gray">{'</'}</span><span className="cod-green">Modal</span><span className="cod-gray">{'>'}</span></p>

                </code>
            </pre>

            <button className='btn btnB' onClick={() => setValues({ ...values, open: 'true' })}>
                Abrir modal
            </button>

            <Modal
                open={values.open === 'true' ? true : false}
                onClose={() => setValues({ ...values, open: 'false' })}
                btn={values.btn === 'true' ? true : false}
                btnName={values.btnName}
                btnBackColor={values.btnBackColor}
                btnColor={values.btnColor}
                backgroundColor={values.backgroundColor}
            >
                <h3 style={{ color: values.backgroundColor === '#EAEBEF' ? 'black' : 'white' }}>Contenido</h3>
            </Modal>
        </div>
    );
};

export default ModalView;
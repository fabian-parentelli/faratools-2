import './sider.css';

const Sider = ({ params, setParams }) => {

    return (
        <div className="sider">

            <section className='siderTop'>
                <img src="logo.png" width='20px' alt="img" />
                <h5>Documentación</h5>
            </section>

            <section className='siderData'>
                {modeules.map(doc => (
                    <p
                        key={doc.link} onClick={() => setParams({ sect: doc.link })}
                        style={{ color: params.sect === doc.link ? '#00a67e' : '' }}>
                        {doc.name}
                    </p>
                ))}
            </section>

        </div>
    );
};

export default Sider;

const modeules = [
    {
        name: 'Introducción',
        link: 'intr'
    },
    {
        name: 'Instalación',
        link: 'inst'
    }
];
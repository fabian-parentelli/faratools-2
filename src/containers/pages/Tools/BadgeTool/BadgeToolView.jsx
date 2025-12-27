import { Badge } from 'fara-comp-react';

const BadgeToolView = ({ values }) => {

    return (
        <div className="badgeToolView">

            <pre className="cod-back">
                <code>
                    <p><span className="cod-gray">{'<'}</span><span className="cod-green">Badge</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">type</span>=<span className="cod-orange">'{values.type || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">name</span>=<span className="cod-yellow">{'{'}</span><span className="cod-skyblue">{values?.name || ''}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">backgroundColor</span>=<span className="cod-orange">'{values.backgroundColor || ''}'</span></p>
                    <p style={{ marginTop: '6px' }}>    <span className="cod-skyblue">size</span>=<span className="cod-yellow">{'{'}</span><span className="cod-skyblue">{values?.size || ''}</span><span className="cod-yellow">{'}'}</span></p>
                    <p style={{ marginTop: '6px' }} className="cod-gray">{'/>'}</p>
                </code>
            </pre>

            <section className="badgeToolViewBade">
                <Badge
                    type={values.type}
                    name={values.name}
                    backgroundColor={values.backgroundColor}
                    size={values.size}
                />
            </section>

        </div>
    );
};

export default BadgeToolView;
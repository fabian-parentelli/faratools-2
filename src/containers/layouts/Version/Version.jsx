import './version.css';
import { Link } from 'react-router-dom';
import { Icons } from 'fara-comp-react';
import { versionTable, versions } from '../../../utils/versions.util.js';

const Version = () => {

    return (
        <div className="version">

            <h2>Versión {versions.generic}</h2>

            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Versión</th>
                            <th>Módulo</th>
                            <th>Descripción</th>
                            <th>Link</th>
                        </tr>
                    </thead>

                    <tbody>
                        {versionTable.slice().reverse().map((doc, ind) => (
                            <tr key={ind}>
                                <td>{new Date(doc.date).toLocaleDateString()}</td>
                                <td>{doc.version}</td>

                                <td>{doc.modules.map(mod => <p key={mod}>{mod}</p>)}</td>
                                <td>{doc.description.map(des => <p key={des}>{des}</p>)}</td>

                                <td>
                                    {doc.links.map(lin =>
                                        <Link className='versionLink' to={lin} key={lin}>
                                            {lin}
                                        </Link>)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Version;
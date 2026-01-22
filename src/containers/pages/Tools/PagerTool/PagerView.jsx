import { useState } from "react";
import { Pager } from 'fara-comp-react';
import { useEffect } from "react";

const PagerView = ({ values }) => {

    const [query, setQuery] = useState({ page: 3 });

    const [docs, setDocs] = useState({
        docs: [],
        totalDocs: 50,
        limit: 10,
        totalPages: 5,
        page: query.page,
        pagingCounter: 21,
        hasPrevPage: true,
        hasNextPage: true,
        prevPage: query.page - 1,
        nextPage: query.page + 1
    });

useEffect(() => {
    const totalPages = 5;
    const limit = 10;
    const totalDocs = 50;

    let page = query.page;

    // límites
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    const hasPrevPage = page > 1;
    const hasNextPage = page < totalPages;

    setDocs({
        docs: [],
        totalDocs,
        limit,
        totalPages,
        page,
        pagingCounter: (page - 1) * limit + 1,
        hasPrevPage,
        hasNextPage,
        prevPage: hasPrevPage ? page - 1 : null,
        nextPage: hasNextPage ? page + 1 : null
    });

}, [query]);


    return (
        <div className="pagerView">

            <section className="pagerViewSect">

                <pre className="cod-back">
                    <code>
                        <p><span className="cod-blue">const</span> <span className="cod-pink">{'['}</span> <span className="cod-blue">query</span>, <span className="cod-skyyellow">setQuery</span> <span className="cod-pink">{']'}</span> = <span className="cod-skyyellow">useState</span><span className="cod-pink">{'('}</span><span className="cod-blue">{'{'}</span> <span className="cod-skyblue">page:</span> <span className="cod-green">0</span> <span className="cod-blue">{'}'}</span><span className="cod-pink">{')'}</span>;</p>
                        <br />
                        <br />
                        <p><span className="cod-gray">{'<'}</span><span className="cod-green">Pager</span></p>
                        <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">docs</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">docs</span><span className="cod-yellow">{'}'}</span></p>
                        <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">setQuery</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">setQuery</span><span className="cod-yellow">{'}'}</span></p>
                        <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">backgroundColor</span>=<span className="cod-orange">"{values.backgroundColor || ''}"</span></p>
                        <p style={{ marginTop: '6px' }}>     <span className="cod-skyblue">top</span>=<span className="cod-yellow">{'{'}</span><span className="cod-blue">{values.top || 'true'}</span><span className="cod-yellow">{'}'}</span></p>
                        <p style={{ marginTop: '6px' }}><span className="cod-gray">{'/>'}</span></p>
                    </code>
                </pre>

                <pre className="cod-back">
                    <code>
                        <p><span className="cod-blue">const</span> <span className="cod-skyblue">docs</span> = <span className="cod-pink">{'{'}</span></p>
                        <p>     <span className="cod-skyblue">docs:</span> <span className="cod-blue">{'[]'}</span>,</p>
                        <p>     <span className="cod-skyblue">totalDocs:</span> <span className="cod-green">{docs.totalDocs}</span>,</p>
                        <p>     <span className="cod-skyblue">limit:</span> <span className="cod-green">{docs.limit}</span>,</p>
                        <p>     <span className="cod-skyblue">totalPages:</span> <span className="cod-green">{docs.totalPages}</span>,</p>
                        <p>     <span className="cod-skyblue">page:</span> <span className="cod-green">{docs.page}</span>,</p>
                        <p>     <span className="cod-skyblue">pagingCounter:</span> <span className="cod-green">{docs.pagingCounter}</span>,</p>
                        <p>     <span className="cod-skyblue">hasPrevPage:</span> <span className="cod-blue">{docs.hasPrevPage ? 'true' : 'false'}</span>,</p>
                        <p>     <span className="cod-skyblue">hasNextPage:</span> <span className="cod-blue">{docs.hasNextPage ? 'true' : 'false'}</span>,</p>
                        <p>     <span className="cod-skyblue">prevPage:</span> <span className="cod-green">{docs.prevPage < 1 ? 'null' : docs.prevPage}</span>,</p>
                        <p>     <span className="cod-skyblue">nextPage:</span> <span className="cod-green">{docs.page === docs.totalPages ? 'null' : docs.page +1}</span></p>
                        <p><span className="cod-pink">{'}'}</span>;</p>
                    </code>
                </pre>

            </section>

            <section className="pagerViewSect">

                <p className="pagerViewTable">{query.page}</p>


                <Pager
                    docs={docs}
                    setQuery={setQuery}
                    backgroundColor={values.backgroundColor}
                    top={values.top == 'true'}
                />
            </section>

        </div>
    );
};

export default PagerView;
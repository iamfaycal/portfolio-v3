import React, { useState, useEffect } from "react";

import "./WorkSmartphone.css";
import "./WorkDesktop.css";

import { Link } from "gatsby";

import Prismic from "prismic-javascript";

const Work = ({ Client }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await Client.query(
                Prismic.Predicates.at("document.type", "projects")
            );
            console.log(res.results[0].data.project_url.url);
            setProjects(res.results);
        };
        fetchData();
    }, []);

    return (
        <section id="work">
            <h2 className="sectionTitle">mes réalisations</h2>
            {projects && (
                <div className="workGrid">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="workItem"
                            target={project.data.project_url.target}
                        >
                            <img
                                className="workItem__image"
                                src={project.data.image.url}
                                alt={project.slugs[0]}
                            />
                            <div className="workItem__content">
                                <p
                                    className="workItem__title SourceSansPro"
                                    dangerouslySetInnerHTML={{
                                        __html: project.data.title[0].text,
                                    }}
                                ></p>
                                <div className="workItem__technos">
                                    {project.data.technos.map((elem, index) => (
                                        <span key={index}>
                                            {elem.techno[0].text}
                                        </span>
                                    ))}
                                </div>
                                <a class="underlineLink" href={project.data.project_url.url} target={project.data.project_url.target}>Voir le projet</a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Work;

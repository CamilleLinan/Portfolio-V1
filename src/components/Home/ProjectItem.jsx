import React from "react"

const ProjectItem = ({ id, cover, name, resume }) => {
    return (
        <li key={id} className="projects_project">
            <a href={'/project/' + name}>
                <figure className="projects_project_figure">
                    <img src={cover} alt={`cover ${name} openclassrooms`} className="projects_project_figure_img" />
                    <figcaption className="projects_project_figcaption">
                        <h3 className="projects_project_figcaption_title">{name}</h3>
                        <p className="projects_project_figcaption_subtitle">{resume}</p>
                    </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default ProjectItem;
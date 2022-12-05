import React from "react"

const ProjectItem = ({ id, cover, name, resume }) => {
    return (
        <li key={id} className="project_item">
            <a href={'/project/' + name}>
                <figure className="project_item_figure background_section">
                    <img src={cover} alt={`cover ${name} openclassrooms`} className="project_item_figure_img" />
                    <figcaption className="project_item_figcaption">
                        <h3 className="project_item_figcaption_title">{name}</h3>
                        <p className="project_item_figcaption_subtitle">{resume}</p>
                    </figcaption>
                </figure>
            </a>
        </li>
    )
}

export default ProjectItem;
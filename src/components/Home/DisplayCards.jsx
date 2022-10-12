import { projectList } from "../../datas/projectList"

const DisplayCards = () => {
    return (
        <section className="projects">
            <ul className="projects_list">
                {projectList.map(({ id, cover, alt, name, resume }) => (
                    <li key={id} className="projects_project">
                        <figure className="projects_project_figure">
                            <img src={cover} alt={alt} className="projects_project_figure_img" />
                            <figcaption className="projects_project_figcaption">
                                <h3 className="projects_project_figcaption_title">{name}</h3>
                                <p className="projects_project_figcaption_subtitle">{resume}</p>
                            </figcaption>
                        </figure>
                    </li>
                ))} 
            </ul>
        </section>
    )
}

export default DisplayCards
import { projectList } from "../../datas/projectList"

const DisplayCards = () => {
    return (
        <section className="projects">
            <ul className="projects_list">
                {projectList.map(({ id, cover, name }) => (
                    <li key={id} className="projects_project">
                        <figure className="projects_project_figure">
                            <img src={cover} alt='project-cover' className="projects_project_figure_img" />
                            <figcaption className="projects_project_figcaption">{name}</figcaption>
                        </figure>
                    </li>
                ))} 
            </ul>
        </section>
    )
}

export default DisplayCards
import { projectsList } from "../../datas/projectsList"
import ProjectItem from "./ProjectItem"

const DisplayProjects = () => {
    return (
        <section className="projects">
            <ul className="projects_list">
                {projectsList.map(({ id, cover, alt, name, resume }) => (
                    <ProjectItem
                        key={id}
                        id={id}
                        cover={cover}
                        alt={alt}
                        name={name}
                        resume={resume}
                    />
                ))} 
            </ul>
        </section>
    )
}

export default DisplayProjects;
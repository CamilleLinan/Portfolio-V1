import { useParams } from 'react-router-dom';
import Header from '../components/Layout/Header';
import { projectsList } from '../datas/projectsList';

const ProjectPage = () => {
    const { id } = useParams()
    
    return (
        <>
            <Header />
            {projectsList.map((project, i) => (
                <div key={project.id}> 
                    {id === project.id &&
                    <>
                        <header>
                            <h1>Projet : {project.name}</h1>
                        </header>
                        
                        <section>
                            <article>
                                <h2>Contexte :</h2>
                                <p></p>
                            </article>
                            <article>
                                <h2>Objectifs :</h2>
                                <p>{project.resume}</p>
                            </article>
                            <article>
                                <h2>Language(s) utilisé(s) :</h2>
                                <p></p>
                            </article>
                        </section>
                        
                        <section>
                            <h3>Version desktop, tablette et mobile :</h3>
                            <img src={project.cover} alt={project.alt} />
                        </section>
                        
                        <footer>
                            <a href='#'>Lien gitHub</a>
                        </footer>
                    </>
                } </div>
            ))}
            
        </>
    )
}

export default ProjectPage;
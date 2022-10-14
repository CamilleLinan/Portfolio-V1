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
                    <div className='project_page'>
                        <header>
                            <h1>Projet : {project.name}</h1>
                        </header>
                        
                        <section className='project_page_pres'>
                            <article>
                                <h2 className='project_page_pres_title'>Contexte :</h2>
                                <p className='project_page_pres_text'>{project.context}</p>
                            </article>
                            <article>
                                <h2 className='project_page_pres_title'>Objectifs :</h2>
                                <p className='project_page_pres_text'>{project.objectifs}</p>
                            </article>
                            <article>
                                <h2 className='project_page_pres_title'>Langages utilisés :</h2>
                                <p className='project_page_pres_text'>{project.languages}</p>
                            </article>
                        </section>
                        
                        <section className='project_page_cover'>
                            <h3 className='project_page_cover_title'>Version desktop, tablette et mobile :</h3>
                            <img src={project.cover} alt={project.alt} className='project_page_cover_img' />
                        </section>
                        
                            <footer className='project_page_footer'>
                                {project.gitLink &&
                                    <a href={project.gitLink} target='_blank' rel='noreferrer' className='project_page_footer_link'>Voir le code sur GitHub</a>
                                }
                                {project.webSite && 
                                    <a href={project.webSite} target='_blank' rel='noreferrer' className='project_page_footer_link'>Voir le site web</a>
                                }
                                {project.gitLinkBack && project.gitLinkFront && 
                                    <>
                                        <a href={project.gitLinkBack} target='_blank' rel='noreferrer' className='project_page_footer_link'>Voir le code sur GitHub - Back</a>
                                        <a href={project.gitLinkFront} target='_blank' rel='noreferrer' className='project_page_footer_link'>Voir le code sur GitHub - Front</a>
                                    </>
                                }
                            </footer>
                        
                    </div>
                } </div>
            ))}
        </>
    )
}

export default ProjectPage;
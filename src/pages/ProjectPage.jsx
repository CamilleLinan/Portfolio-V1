import { useParams } from 'react-router-dom';
import Header from '../components/Layout/Header';
import { projectsList } from '../datas/projectsList';
import Footer from '../components/Layout/Footer';

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
                            <article className='project_page_pres_article'>
                                <h2 className='project_page_pres_title'>Contexte :</h2>
                                <p className='project_page_pres_text'>{project.context}</p>
                            </article>
                            <article>
                                <h2 className='project_page_pres_title'>Objectifs :</h2>
                                <p className='project_page_pres_text'>{project.objectifs}</p>
                            </article>
                            <article className='project_page_pres_article'>
                                <h2 className='project_page_pres_title'>Langages utilisés :</h2>
                                <p className='project_page_pres_text'>{project.languages}</p>
                            </article>
                        </section>
                        
                        <section className='project_page_cover'>
                            <h3 className='project_page_cover_title bold'>Version desktop, tablette et mobile :</h3>
                            <article className='project_page_cover_imgs'>
                                {project.imgDesk &&
                                    <img src={project.imgDesk} alt={project.alt} className='project_page_cover_img' />
                                }
                                {project.imgTab &&
                                    <img src={project.imgTab} alt={project.alt} className='project_page_cover_img' />
                                }
                                {project.imgMobile &&
                                    <img src={project.imgMobile} alt={project.alt} className='project_page_cover_img' />
                                }
                            </article>
                            
                            <h3 className='project_page_cover_title bold'>Identité graphique :</h3>
                            <article className='project_page_ui'>
                                {project.imgColors &&
                                    <img src={project.imgColors} alt={project.alt} className='project_page_ui_img project_page_ui_img_colors' />
                                }
                                {project.imgIcons &&
                                    <img src={project.imgIcons} alt={project.alt} className='project_page_ui_img project_page_ui_img_icons' />
                                }
                            </article>
                        </section>
                        
                            <footer className='project_page_footer'>
                                {project.gitLink &&
                                    <a href={project.gitLink} target='_blank' rel='noreferrer' className='project_page_footer_link'>Voir le code sur GitHub</a>
                                }
                                {project.webSite && 
                                    <a href={project.webSite} target='_blank' rel='noreferrer' className='project_page_footer_link project_page_footer_link_1'>Voir le site web</a>
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
            <Footer />
        </>
    )
}

export default ProjectPage;
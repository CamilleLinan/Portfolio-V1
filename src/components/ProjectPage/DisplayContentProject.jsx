import { useParams } from 'react-router-dom';
import { projectsList } from '../../datas/projectsList';

const DisplayContentProject = () => {
    const { name } = useParams()
    
    return(
        <> {projectsList.map((project, i) => (
            <div key={project.id}> 
                {name === project.name &&
                <div className='project_page'>

                    <section className='project_page_pres'>
                        <header>
                            <h1>Projet : {project.name}</h1>
                        </header>
                        <article className='project_page_pres_article'>
                            <h2 className='project_page_pres_title'>Contexte :</h2>
                            <p className='project_page_pres_text'>{project.context}</p>
                        </article>
                        <article className='project_page_pres_article'>
                            <h2 className='project_page_pres_title'>Objectifs :</h2>
                            <p className='project_page_pres_text'>{project.objectifs}</p>
                        </article>
                        <article className='project_page_pres_article'>
                            <h2 className='project_page_pres_title'>Langages utilisés :</h2>
                            
                            <div className='project_page_pres_logos'>
                                {project.languages.map((logo, i) => (
                                    <img src={logo} alt='logo HTML' className='project_page_pres_logos_logo' />
                                ))}
                            </div>
                        </article>
                    </section>
                    
                    <section className='project_page_cover'>
                        
                        {project.picturesPres && <>
                            <h3 className='project_page_cover_title'>Version desktop, tablette et mobile :</h3>
                            <article className='project_page_cover_imgs'>
                                {project.picturesPres.map((picturePres, i) => (
                                    <img src={picturePres} alt={`cover ${project.name} openclassrooms desktop, tablette et mobile`} className='project_page_cover_img project_page_cover_img_1' />
                                ))}
                            </article>
                            
                            <h3 className='project_page_cover_title'>Identité graphique :</h3>
                            <article className='project_page_ui'>
                                {project.graphicId.map((gId, i) => (
                                    <img src={gId} alt={`couleurs et icons de ${project.name} openclassrooms`} className='project_page_ui_img project_page_ui_img_colors' />
                                ))}
                            </article>
                        </>}
                        
                        {project.imgBefore && project.imgAfter && <>
                            <h3 className='project_page_cover_title'>Version tablette, avant et après :</h3>
                            <article className='project_page_cover_imgs'>
                                    <img src={project.imgBefore} alt={`cover ${project.name} openclassrooms avant`} className='project_page_cover_img_fulltab project_page_cover_img_fulltab_1' />
                                    <img src={project.imgAfter} alt={`cover ${project.name} openclassrooms après`} className='project_page_cover_img_fulltab' />
                            </article>
                        </>}

                        {project.picturesEtap && <>
                            <h3 className='project_page_cover_title'>Parcours utilisateur :</h3>
                            <article className='project_page_cover_imgs'>
                                {project.picturesEtap.map((pictureEtap, i) => (
                                    <img src={pictureEtap} alt={`parcours utilisateur ${project.name} openclassrooms`} className='project_page_cover_img project_page_cover_img_1 project_page_cover_img_etap' />
                                ))}
                            </article>

                            {project.graphicId && <>
                                <h3 className='project_page_cover_title'>Identité graphique :</h3>
                                <article className='project_page_ui'>
                                    {project.graphicId.map((gId, i) => (
                                        <img src={gId} alt={`couleurs et icons de ${project.name} openclassrooms`} className='project_page_ui_img project_page_ui_img_colors' />
                                    ))}
                                </article>
                            </>}
                        </>}

                        <footer className='project_page_footer'>
                            {project.gitLink &&
                                <a href={project.gitLink} target='_blank' rel='noreferrer' className='project_page_footer_link'>Voir le code sur GitHub</a>
                            }
                            {project.webSite && 
                                <a href={project.webSite} target='_blank' rel='noreferrer' className='project_page_footer_link project_page_footer_link_1'>Voir le site web</a>
                            }
                            {project.gitLinkBack && project.gitLinkFront && <>
                                <a href={project.gitLinkBack} target='_blank' rel='noreferrer' className='project_page_footer_link'>Voir le code sur GitHub - Back</a>
                                <a href={project.gitLinkFront} target='_blank' rel='noreferrer' className='project_page_footer_link project_page_footer_link_1'>Voir le code sur GitHub - Front</a>
                            </>}
                        </footer>
                    </section>

                </div>
            } </div>
        ))} </>
    )
}

export default DisplayContentProject;
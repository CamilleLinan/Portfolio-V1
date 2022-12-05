import React from "react"
import { useParams } from 'react-router-dom';
import { projectsList } from '../../datas/projectsList';
import NoMatch from "./NoMatch";

const ProjectPageContent = () => {
    const { name } = useParams()
    const project = projectsList.find(project => project.name === name)
    if (project === undefined) { return <NoMatch /> }

    return( 
        <div className='project_page'>

            <section className='project_page_pres background_section'>
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
                            <img key={i} src={logo} alt='logo HTML' className='project_page_pres_logos_logo' />
                        ))}
                    </div>
                </article>
            </section>
            
            <section className='project_page_cover background_section'>
                {project.picturesPres && <>
                    <h3 className='project_page_cover_title project_page_cover_title_1'>Version desktop, tablette et mobile :</h3>
                    
                    <article className='project_page_cover_imgs'>
                        {project.picturesPres.map((picturePres, i) => (
                            <img key={i} src={picturePres} alt={`cover ${project.name} openclassrooms desktop, tablette et mobile`} className='project_page_cover_img' />
                        ))}
                    </article>
                    
                    <h3 className='project_page_cover_title'>Identité graphique :</h3>
                    
                    <article className='project_page_ui'>
                        <div>
                            <h4 className='project_page_ui_title'>Couleurs :</h4>
                            <img src={project.colors} alt={`couleurs ${project.name} openclassrooms`} className='project_page_ui_img project_page_ui_img_colors' />
                        </div>
                        <div>
                            <h4 className='project_page_ui_title'>Icônes :</h4>
                            <img src={project.icons} alt={`icônes de ${project.name} openclassrooms`} className='project_page_ui_img project_page_ui_img_icons' />
                        </div>
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
                    <h3 className='project_page_cover_title project_page_cover_title_1'>Parcours utilisateur :</h3>
                    
                    <article className='project_page_cover_imgs'>
                        {project.picturesEtap.map((pictureEtap, i) => (
                            <img key={i} src={pictureEtap} alt={`parcours utilisateur ${project.name} openclassrooms`} className='project_page_cover_img project_page_cover_img_etap' />
                        ))}
                    </article>

                    {project.colors && <>
                        <h3 className='project_page_cover_title'>Identité graphique :</h3>
                        
                        <article className='project_page_ui'>
                            <div>
                                <h4 className='project_page_ui_title'>Couleurs :</h4>
                                <img src={project.colors} alt={`couleurs et icons de ${project.name} openclassrooms`} className='project_page_ui_img project_page_ui_img_colors' />
                            </div>
                            {project.icons &&
                                <div>
                                    <h4 className='project_page_ui_title'>Icônes :</h4>
                                    <img src={project.icons} alt={`couleurs et icons de ${project.name} openclassrooms`} className='project_page_ui_img project_page_ui_img_icons' />
                                </div>
                            }
                        </article>
                    </>}
                </>}

                <footer className='project_page_footer'>
                    {project.gitLink &&
                        <a href={project.gitLink} target='_blank' rel='noopener noreferrer' className='project_page_footer_link'>Voir le code sur GitHub</a>
                    }
                    {project.webSite && 
                        <a href={project.webSite} target='_blank' rel='noopener noreferrer' className='project_page_footer_link project_page_footer_link_1'>Voir le site web</a>
                    }
                    {project.gitLinkBack && project.gitLinkFront && <>
                        <a href={project.gitLinkBack} target='_blank' rel='noopener noreferrer' className='project_page_footer_link'>Voir le code sur GitHub - Back</a>
                        <a href={project.gitLinkFront} target='_blank' rel='noopener noreferrer' className='project_page_footer_link project_page_footer_link_1'>Voir le code sur GitHub - Front</a>
                    </>}
                </footer>
            </section>

        </div>  
    )
}

export default ProjectPageContent;
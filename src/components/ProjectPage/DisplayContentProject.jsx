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
                                {project.html && <>
                                    <img src={project.html} alt='logo HTML' className='project_page_pres_logos_logo' />
                                </>}
                                {project.css && <>
                                    <img src={project.css} alt='logo CSS' className='project_page_pres_logos_logo' />
                                </>}
                                {project.sass && <>
                                    <img src={project.sass} alt='logo SASS' className='project_page_pres_logos_logo' />
                                </>}
                                {project.js && <>
                                    <img src={project.js} alt='logo JavaScript' className='project_page_pres_logos_logo' />
                                </>}
                                {project.react && <>
                                    <img src={project.react} alt='logo React' className='project_page_pres_logos_logo' />
                                </>}
                                {project.node && <>
                                    <img src={project.node} alt='logo Node.js' className='project_page_pres_logos_logo' />
                                </>}
                                {project.mongo && <>
                                    <img src={project.mongo} alt='logo MongoDB' className='project_page_pres_logos_logo' />
                                </>}
                            </div>
                        </article>
                    </section>
                    
                    <section className='project_page_cover'>
                        {project.imgDesk && project.imgTab && project.imgMobile && project.imgColors && project.imgIcons && <>
                            <h3 className='project_page_cover_title'>Version desktop, tablette et mobile :</h3>
                            <article className='project_page_cover_imgs'>
                                <img src={project.imgDesk} alt={project.altDesk} className='project_page_cover_img project_page_cover_img_1' />
                                <img src={project.imgTab} alt={project.altTab} className='project_page_cover_img' />
                                <img src={project.imgMobile} alt={project.altMobile} className='project_page_cover_img' />
                            </article>
                            
                            <h3 className='project_page_cover_title'>Identité graphique :</h3>
                            <article className='project_page_ui'>
                                <img src={project.imgColors} alt={project.altColors} className='project_page_ui_img project_page_ui_img_colors' />
                                <img src={project.imgIcons} alt={project.altIcons} className='project_page_ui_img project_page_ui_img_icons' />
                            </article>
                        </>}
                        
                        {project.imgBefore && project.imgAfter && <>
                            <h3 className='project_page_cover_title'>Version tablette, avant et après :</h3>
                            <article className='project_page_cover_imgs'>
                                    <img src={project.imgBefore} alt={project.altBefore} className='project_page_cover_img_fulltab project_page_cover_img_fulltab_1' />
                                    <img src={project.imgAfter} alt={project.altAfter} className='project_page_cover_img_fulltab' />
                            </article>
                        </>}

                        {project.imgEtap1 && project.imgEtap2 && <>
                            <h3 className='project_page_cover_title'>Parcours utilisateur :</h3>
                            <article className='project_page_cover_imgs'>
                                <img src={project.imgEtap1} alt={project.altEtap1} className='project_page_cover_img project_page_cover_img_1' />
                                <img src={project.imgEtap2} alt={project.altEtap2} className='project_page_cover_img' />
                                {project.imgEtap3 && project.imgEtap4 && <>
                                    <img src={project.imgEtap3} alt={project.altEtap3} className='project_page_cover_img' />
                                    <img src={project.imgEtap4} alt={project.altEtap4} className='project_page_cover_img' />
                                </>}
                                {project.imgEtap5 && project.imgEtap6 && <>
                                    <img src={project.imgEtap5} alt={project.altEtap5} className='project_page_cover_img' />
                                    <img src={project.imgEtap6} alt={project.altEtap6} className='project_page_cover_img' />
                                </>}
                            </article>

                            {project.imgColors && project.imgIcons && <>
                                <h3 className='project_page_cover_title'>Identité graphique :</h3>
                                <article className='project_page_ui'>
                                    <img src={project.imgColors} alt={project.altColors} className='project_page_ui_img project_page_ui_img_colors' />
                                    <img src={project.imgIcons} alt={project.altIcons} className='project_page_ui_img project_page_ui_img_icons' />
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
import { useParams } from 'react-router-dom';
import Header from '../components/Layout/Header';
import { projectsList } from '../datas/projectsList';
import Footer from '../components/Layout/Footer';

const ProjectPage = () => {
    const { name } = useParams()
    
    return (
        <>
            <Header />
            {projectsList.map((project, i) => (
                <div key={project.id}> 
                    {name === project.name &&
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
                                <div className='project_page_pres_logos'>
                                    {project.html && <>
                                        <img src={project.html} alt='logo-HTML' className='project_page_pres_logos_logo' />
                                    </>}
                                    {project.css && <>
                                        <img src={project.css} alt='logo-HTML' className='project_page_pres_logos_logo' />
                                    </>}
                                    {project.sass && <>
                                        <img src={project.sass} alt='logo-HTML' className='project_page_pres_logos_logo' />
                                    </>}
                                    {project.js && <>
                                        <img src={project.js} alt='logo-HTML' className='project_page_pres_logos_logo' />
                                    </>}
                                    {project.react && <>
                                        <img src={project.react} alt='logo-HTML' className='project_page_pres_logos_logo' />
                                    </>}
                                    {project.node && <>
                                        <img src={project.node} alt='logo-HTML' className='project_page_pres_logos_logo' />
                                    </>}
                                    {project.mongo && <>
                                        <img src={project.mongo} alt='logo-HTML' className='project_page_pres_logos_logo' />
                                    </>}
                                </div>
                            </article>
                        </section>
                        
                        <section className='project_page_cover'>
                            {project.imgDesk && project.imgTab && project.imgMobile && project.imgColors && project.imgIcons && <>
                                <h2 className='project_page_cover_title'>Version desktop, tablette et mobile :</h2>
                                <article className='project_page_cover_imgs'>
                                    <img src={project.imgDesk} alt={project.alt} className='project_page_cover_img' />
                                    <img src={project.imgTab} alt={project.alt} className='project_page_cover_img' />
                                    <img src={project.imgMobile} alt={project.alt} className='project_page_cover_img' />
                                </article>
                                
                                <h2 className='project_page_cover_title'>Identité graphique :</h2>
                                <article className='project_page_ui'>
                                    <img src={project.imgColors} alt={project.alt} className='project_page_ui_img project_page_ui_img_colors' />
                                    <img src={project.imgIcons} alt={project.alt} className='project_page_ui_img project_page_ui_img_icons' />
                                </article>
                            </>}
                            
                            {project.imgBefore && project.imgAfter && <>
                                <h2 className='project_page_cover_title'>Version tablette, avant et après :</h2>
                                <article className='project_page_cover_imgs'>
                                        <img src={project.imgBefore} alt={project.alt} className='project_page_cover_img_fulltab project_page_cover_img_fulltab_1' />
                                        <img src={project.imgAfter} alt={project.alt} className='project_page_cover_img_fulltab' />
                                </article>
                            </>}

                            {project.imgEtap1 && project.imgEtap2 && <>
                                <h2 className='project_page_cover_title'>Parcours utilisateur :</h2>
                                <article className='project_page_cover_imgs'>
                                    <img src={project.imgEtap1} alt={project.alt} className='project_page_cover_img_etap' />
                                    <img src={project.imgEtap2} alt={project.alt} className='project_page_cover_img_etap' />
                                    {project.imgEtap3 && project.imgEtap4 && <>
                                        <img src={project.imgEtap3} alt={project.alt} className='project_page_cover_img_etap' />
                                        <img src={project.imgEtap4} alt={project.alt} className='project_page_cover_img_etap' />
                                    </>}
                                    {project.imgEtap5 && project.imgEtap6 && <>
                                        <img src={project.imgEtap5} alt={project.alt} className='project_page_cover_img_etap' />
                                        <img src={project.imgEtap6} alt={project.alt} className='project_page_cover_img_etap' />
                                    </>}
                                </article>

                                {project.imgColors && project.imgIcons && <>
                                    <h2 className='project_page_cover_title'>Identité graphique :</h2>
                                    <article className='project_page_ui'>
                                        <img src={project.imgColors} alt={project.alt} className='project_page_ui_img project_page_ui_img_colors' />
                                        <img src={project.imgIcons} alt={project.alt} className='project_page_ui_img project_page_ui_img_icons' />
                                    </article>
                                </>}
                            </>}
                        </section>
                        
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
                        
                    </div>
                } </div>
            ))}
            <Footer />
        </>
    )
}

export default ProjectPage;
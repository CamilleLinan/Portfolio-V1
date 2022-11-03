import profil from '../../styles/img/profil.webp';

const Intro = () => {
    return (
        <section className="intro">
            <img src={profil} alt="" className='intro_img' />
            <article className='intro_titles'>
                <h3 className="intro_titles_title">Bienvenue sur mon portfolio !</h3>
                <p className="intro_titles_subtitle">
                    Après avoir travaillé 7 ans dans le secteur de la vente, 
                    j'ai choisi de me reconvertir dans un domaine qui me passionne :
                    le développement web, et plus particulièrement l'UX design.
                </p>
                <p className="intro_titles_subtitle">
                    Vous pouvez consulter ci-dessous mes projets réalisés avec OpenClassRooms, bonne visite !
                </p>
            </article>
        </section>
    )
}

export default Intro;
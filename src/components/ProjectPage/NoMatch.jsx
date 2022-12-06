import React from 'react'
import { NavLink } from 'react-router-dom'

const NoMatch = () => {
    return (
        <section className='nomatch_page'>
            <p className='nomatch_page_title'>Désolée, ce projet n'existe pas !</p>
            <NavLink title='Accueil' end to='/' className='nomatch_page_link'>Retourner à l'accueil</NavLink>
        </section>
    )
}

export default NoMatch
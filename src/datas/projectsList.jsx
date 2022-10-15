import booki from './cover/Booki/1booki-cover.png'
import bookiDesk from './cover/Booki/bookiDesk.png'
import bookiTab from './cover/Booki/bookiTab.png'
import bookiMobile from './cover/Booki/bookiMobile.png'
import bookiColors from './cover/Booki/bookiColors.png'
import bookiIcons from './cover/Booki/bookiIcons.png'

import ohmyfood from './cover/Ohmyfood/2ohmyfood-cover.png'
import ohmyfoodDesk from './cover/Ohmyfood/ohmyfoodDesk.png'
import ohmyfoodTab from './cover/Ohmyfood/ohmyfoodTab.png'
import ohmyfoodMobile from './cover/Ohmyfood/ohmyfoodMobile.png'

import lapanthere from './cover/3lapanthere-cover.png'
import kanap from './cover/5kanap-cover.png'
import hottakes from './cover/4hottakes-cover.png'
import groupomania from './cover/6groupomania-cover.png'

export const projectsList = [
    {
        id: '01',
        name: 'Booki',
        cover: booki,
        alt: 'booki-cover',
        resume: 'Intégration de maquette en HTML et CSS',
        context: 'Booki est une petite entreprise proposant un outil de planification de vacances. Le site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix.',
        objectifs: 'Créer un prototype de site en intégrant la maquette conçue par le designer UI, en HTML et CSS. Le site doit bien sûr être responsive.',
        languages: 'HTML5 et CSS3',
        titleImg: 'Versions desktop, tablette et mobile :',
        imgDesk: bookiDesk,
        imgTab: bookiTab,
        imgMobile: bookiMobile,
        imgColors: bookiColors,
        imgIcons: bookiIcons,
        gitLink: 'https://github.com/CamilleLinan/Projet-2-Booki',
        webSite: 'https://camillelinan.github.io/Projet-2-Booki/',
    },
    {
        id: '02',
        name: 'OhMyFood',
        cover: ohmyfood,
        alt: 'ohmyfood-cover',
        resume: 'Intégration de maquette en HTML et animation avec SASS',
        context: 'Ohmyfood! est une jeune startup voulant s\'imposer sur le marché de la restauration. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée.',
        objectifs: 'Intégrer la maquette créée par le designer UI en mobilefirst en respectant les contraintes graphiques et d\'animations, sans utiliser de JavaScript. Mise en page libre pour les versions desktop et tablette.',
        languages: 'HTML5, CSS3, Sass',
        titleImg: 'Versions desktop, tablette et mobile :',
        imgDesk: ohmyfoodDesk,
        imgTab: ohmyfoodTab,
        imgMobile: ohmyfoodMobile,
        gitLink: 'https://github.com/CamilleLinan/Projet-3-Ohmyfood',
        webSite: 'https://camillelinan.github.io/Projet-3-Ohmyfood/'
    },
    {
        id: '03',
        name: 'La Panthere',
        cover: lapanthere,
        alt: 'lapanthere-cover',
        resume: 'Refonte de site web et SEO',
        context: 'La Panthère est une grande agence de web design basée à Lyon. L\'activité de l\'entreprise est en perte de vitesse et n\'apparaît pas en première page des moteurs de recherche.',
        objectifs: 'Analyser l\'état actuel de SEO du site fourni et améliorer les points les plus importants concernant notamment la vitesse, la taille et l\'accessibilité du site. Puis créer un rapport d\'optimisations pour comparer les résultats avant/après fournis par différents analyseur de qualité et performance web.',
        languages: 'HTML5 et CSS3',
        titleImg: 'Extraits du rapport d\'optimisations :',
        gitLink: 'https://github.com/CamilleLinan/Projet-4-La-Panthere'
    },
    {
        id: '04',
        name: 'Kanap',
        cover: kanap,
        alt: 'kanap-cover',
        resume: 'Intégration d\'une API en JavaScript',
        context: 'Kanap est une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.',
        objectifs: 'Unifier les travaux déjà réalisées par les développeurs front-end et back-end, en intégrant dynamiquement les éléments de l\'API dans les différentes pages web avec JavaScript. L\'utilisateur doit pouvoir visualiser l\'ensemble des produits disponibles, ajouter un ou plusieurs article dans un panier en utilisant le localStorage, modifier ou supprimer son panier et enfin, passer commande.',
        languages: 'HTML5 et JavaScript',
        titleImg: 'Pages de l\'application :',
        gitLink: 'https://github.com/CamilleLinan/Projet-5-Kanap'
    },
    {
        id: '05',
        name: 'Hot Takes',
        cover: hottakes,
        alt: 'hottakes-cover',
        resume: 'Création d\'un serveur et d\'une API avec Node, Express et MongoDB',
        context: 'Les sauces piquantes sont de plus en plus populaires, c\'est pourquoi la marque de condiments à base de piment Piiquante souhaite développer une application web de critique des sauces piquantes appelée "Hot Takes".',
        objectifs: 'Construire une API sécurisée avec ses models, controllers et routes. Les utilisateurs de l\'application doivent pouvoir créer de nouvelles sauces, modifier ou supprimer leur sauce, ainsi que liker ou disliker toutes les sauces créées.',
        languages: 'Node.js, Express.js et MongoDB pour la base de données.',
        titleImg: 'Pages de l\'application :',
        gitLink: 'https://github.com/CamilleLinan/Projet-6-Piiquante-Back'
    },
    {
        id: '06',
        name: 'Groupomania',
        cover: groupomania,
        alt: 'groupomania-cover',
        resume: 'Création d\'un réseau social d\'entreprise avec React.js',
        context: 'Groupomania est une entreprise ayant un ralentissement de sa productivité attribué à une baisse de la motivation et de l\'implication des employés. Elle souhaite donc créer un réseau social d\'entreprise afin d\'améliorer la relation entre ces derniers.',
        objectifs: 'Créer une partie front-end avec un framework JavaScript, ici React. Et une API sécurisée permettant aux utilisateurs de se créer un compte, se connecter et se déconnecter. Ainsi que créer un post, modifier ou supprimer leur post, et liker tous les posts. J\'ai également ajouter une page ou les utilisateurs peuvent modifier leurs informations. ',
        languages: 'React.js, Node.js, Express.js et MongoDB pour la base de données.',
        titleImg: 'Versions desktop et mobile :',
        gitLinkBack: 'https://github.com/CamilleLinan/Projet-7-Groupomania-Back',
        gitLinkFront: 'https://github.com/CamilleLinan/Projet-7-Groupomania-Front'  
    }
]
import booki from './cover/1booki-cover.png'
import ohmyfood from './cover/2ohmyfood-cover.png'
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
        context: 'Booki est une petite entreprise proposant un outil de planification de vacances. Le site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Les hébergements peuvent également être Cltrés par thématique, par exemple leur budget ou leur ambiance.',
        objectifs: 'Créer un prototype de site en intégrant la maquette conçue par le designer UI, en HTML et CSS. Le site doit bien sûr être responsive.',
        languages: 'HTML5 et CSS3',
        titleImg: 'Version desktop, tablette et mobile :',
        gitLink: ''
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
        titleImg: 'Version desktop, tablette et mobile :',
        gitLink: ''
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
        gitLink: ''
    },
    {
        id: '04',
        name: 'Kanap',
        cover: kanap,
        alt: 'kanap-cover',
        resume: 'Intégration d\'une API en JavaScript',
        context: 'Kanap est une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.',
        objectifs: 'Unifier les travaux déjà réalisées par les développeurs front-end et back-end, en intégrant dynamiquement les éléments de l\'API dans les différentes pages web avec JavaScript. L\'utilisateur doit pouvoir visualiser l\'ensemble des produits disponibles, ajouter un ou plusieurs article dans un panier en utilisant le localStorage, modifier ou supprimer son panier et enfin, passer commande.',
        languages: 'JavaScript',
        titleImg: 'Parcours utilisateur :',
        gitLink: ''
    },
    {
        id: '05',
        name: 'Hot Takes',
        cover: hottakes,
        alt: 'hottakes-cover',
        resume: 'Création d\'un serveur et d\'une API avec Node, Express et MongoDB',
        context: 'Les sauces piquantes sont de plus en plus populaires, c\'est pourquoi la marque de condiments à base de piment Piiquante souhaite développer une application web de critique des sauces piquantes appelée "Hot Takes".',
        objectifs: '',
        languages: '',
        titleImg: '',
        gitLink: ''
    },
    {
        id: '06',
        name: 'Groupomania',
        cover: groupomania,
        alt: 'groupomania-cover',
        resume: 'Création d\'un réseau social d\'entreprise avec React.js',
        context: '',
        objectifs: '',
        languages: '',
        titleImg: '',
        gitLink: '' 
    }
]
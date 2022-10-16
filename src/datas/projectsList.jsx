// BOOKI
import booki from './cover/1Booki/bookiCover.png'
import bookiDesk from './cover/1Booki/bookiDesk.png'
import bookiTab from './cover/1Booki/bookiTab.png'
import bookiMobile from './cover/1Booki/bookiMobile.png'
import bookiColors from './cover/1Booki/bookiColors.png'
import bookiIcons from './cover/1Booki/bookiIcons.png'

// OHMYFOOD
import ohmyfood from './cover/2Ohmyfood/ohmyfoodCover.png'
import ohmyfoodDesk from './cover/2Ohmyfood/ohmyfoodDesk.png'
import ohmyfoodTab from './cover/2Ohmyfood/ohmyfoodTab.png'
import ohmyfoodMobile from './cover/2Ohmyfood/ohmyfoodMobile.png'
import ohmyfoodColors from './cover/2Ohmyfood/ohmyfoodColors.png'
import ohmyfoodIcons from './cover/2Ohmyfood/ohmyfoodIcons.png'

// LAPANTHERE
import lapanthere from './cover/3LaPanthere/lapanthereCover.png'
import lapanthereBefore from './cover/3LaPanthere/lapanthereBefore.png'
import lapanthereAfter from './cover/3LaPanthere/lapanthereAfter.png'

// KANAP
import kanap from './cover/4Kanap/kanapCover.png'
import kanapEtap1 from './cover/4Kanap/kanapEtap1.png'
import kanapEtap2 from './cover/4Kanap/kanapEtap2.png'
import kanapEtap3 from './cover/4Kanap/kanapEtap3.png'
import kanapEtap4 from './cover/4Kanap/kanapEtap4.png'

// HOTTAKES
import hottakes from './cover/5Hottakes/hottakesCover.png'
import hottakesEtap1 from './cover/5Hottakes/hottakesEtap1.png'
import hottakesEtap2 from './cover/5Hottakes/hottakesEtap2.png'

// GROUPOMANIA
import groupomania from './cover/6Groupomania/groupomaniaCover.png'
import groupoEtap1 from './cover/6Groupomania/groupoEtap1.png'
import groupoEtap2 from './cover/6Groupomania/groupoEtap2.png'
import groupoEtap3 from './cover/6Groupomania/groupoEtap3.png'
import groupoEtap4 from './cover/6Groupomania/groupoEtap4.png'
import groupoEtap5 from './cover/6Groupomania/groupoEtap5.png'
import groupoEtap6 from './cover/6Groupomania/groupoEtap6.png'
import groupoColors from './cover/6Groupomania/groupoColors.png'
import groupoIcons from './cover/6Groupomania/groupoIcons.png'

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
        imgDesk: ohmyfoodDesk,
        imgTab: ohmyfoodTab,
        imgMobile: ohmyfoodMobile,
        imgColors: ohmyfoodColors,
        imgIcons: ohmyfoodIcons,
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
        imgBefore: lapanthereBefore,
        imgAfter: lapanthereAfter,
        gitLink: 'https://github.com/CamilleLinan/Projet-4-La-Panthere',
        webSite: 'https://camillelinan.github.io/Projet-4-La-Panthere/'
    },
    {
        id: '04',
        name: 'Kanap',
        cover: kanap,
        alt: 'kanap-cover',
        resume: 'Intégration d\'une API en JavaScript',
        context: 'Kanap est une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.',
        objectifs: 'Unifier les travaux déjà réalisées par les développeurs front-end et back-end, en intégrant dynamiquement les éléments de l\'API dans les différentes pages web avec JavaScript. L\'utilisateur doit pouvoir visualiser l\'ensemble des produits disponibles, ajouter un ou plusieurs article dans un panier, modifier ou supprimer son panier et enfin, passer commande.',
        languages: 'HTML5 et JavaScript',
        imgEtap1: kanapEtap1,
        imgEtap2: kanapEtap2,
        imgEtap3: kanapEtap3,
        imgEtap4: kanapEtap4,
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
        imgEtap1: hottakesEtap1,
        imgEtap2: hottakesEtap2,
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
        imgEtap1: groupoEtap1,
        imgEtap2: groupoEtap2,
        imgEtap3: groupoEtap3,
        imgEtap4: groupoEtap4,
        imgEtap5: groupoEtap5,
        imgEtap6: groupoEtap6,
        imgColors: groupoColors,
        imgIcons: groupoIcons,
        gitLinkBack: 'https://github.com/CamilleLinan/Projet-7-Groupomania-Back',
        gitLinkFront: 'https://github.com/CamilleLinan/Projet-7-Groupomania-Front'  
    }
]
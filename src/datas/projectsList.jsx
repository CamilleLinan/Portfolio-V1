// LOGO
import logoHtml from '../styles/img/logos/logo-html.png'
import logoCss from '../styles/img/logos/logo-css.png'
import logoSass from '../styles/img/logos/logo-sass.png'
import logoJS from '../styles/img/logos/logo-js.png'
import logoNode from '../styles/img/logos/logo-node.png'
import logoMongo from '../styles/img/logos/logo-mongo.png'
import logoReact from '../styles/img/logos/logo-react.png'

// BOOKI
import bookiCover from './cover/1Booki/bookiCover.webp'
import bookiDesk from './cover/1Booki/bookiDesk.webp'
import bookiTab from './cover/1Booki/bookiTab.webp'
import bookiMobile from './cover/1Booki/bookiMobile.webp'
import bookiColors from './cover/1Booki/bookiColors.png'
import bookiIcons from './cover/1Booki/bookiIcons.png'

// OHMYFOOD
import ohmyfoodCover from './cover/2Ohmyfood/ohmyfoodCover.webp'
import ohmyfoodDesk from './cover/2Ohmyfood/ohmyfoodDesk.webp'
import ohmyfoodTab from './cover/2Ohmyfood/ohmyfoodTab.webp'
import ohmyfoodMobile from './cover/2Ohmyfood/ohmyfoodMobile.webp'
import ohmyfoodColors from './cover/2Ohmyfood/ohmyfoodColors.png'
import ohmyfoodIcons from './cover/2Ohmyfood/ohmyfoodIcons.png'

// LAPANTHERE
import lapanthereCover from './cover/3LaPanthere/lapanthereCover.webp'
import lapanthereBefore from './cover/3LaPanthere/lapanthereBefore.webp'
import lapanthereAfter from './cover/3LaPanthere/lapanthereAfter.webp'

// KANAP
import kanapCover from './cover/4Kanap/kanapCover.webp'
import kanapEtap1 from './cover/4Kanap/kanapEtap1.webp'
import kanapEtap2 from './cover/4Kanap/kanapEtap2.webp'
import kanapEtap3 from './cover/4Kanap/kanapEtap3.webp'
import kanapEtap4 from './cover/4Kanap/kanapEtap4.webp'

// HOTTAKES
import hottakesCover from './cover/5Hottakes/hottakesCover.webp'
import hottakesEtap1 from './cover/5Hottakes/hottakesEtap1.webp'
import hottakesEtap2 from './cover/5Hottakes/hottakesEtap2.webp'

// GROUPOMANIA
import groupoCover from './cover/6Groupomania/groupoCover.webp'
import groupoEtap1 from './cover/6Groupomania/groupoEtap1.webp'
import groupoEtap2 from './cover/6Groupomania/groupoEtap2.webp'
import groupoEtap3 from './cover/6Groupomania/groupoEtap3.webp'
import groupoEtap4 from './cover/6Groupomania/groupoEtap4.webp'
import groupoEtap5 from './cover/6Groupomania/groupoEtap5.webp'
import groupoEtap6 from './cover/6Groupomania/groupoEtap6.webp'
import groupoColors from './cover/6Groupomania/groupoColors.png'
import groupoIcons from './cover/6Groupomania/groupoIcons.png'

// 7 KASA
import kasaCover from './cover/7Kasa/kasaCover.webp'
import kasaEtap1 from './cover/7Kasa/kasaEtap1.webp'
import kasaEtap2 from './cover/7Kasa/kasaEtap2.webp'
import kasaEtap3 from './cover/7Kasa/kasaEtap3.webp'
import kasaEtap4 from './cover/7Kasa/kasaEtap4.webp'
import kasaEtap5 from './cover/7Kasa/kasaEtap5.webp'
import kasaEtap6 from './cover/7Kasa/kasaEtap6.webp'


export const projectsList = [
    {
        id: '07',
        name: 'Kasa',
        cover: kasaCover,
        alt: 'cover kasa openclassrooms',
        resume: 'Création d\'une application web de location immobilière avec React',
        context: 'Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans. L\'entreprise souhaite faire une refonte totale de son site web.',
        objectifs: 'Développer l\'ensemble de l\'application et ses composants avec React, en suivant les maquettes Figma fournies. Des composants réutilisables doivent être créés pour les onglets ouvrants et le carrousel de photo.',
        languages: [logoHtml, logoCss, logoSass, logoJS, logoReact],
        picturesEtap: [kasaEtap1, kasaEtap2, kasaEtap3, kasaEtap4, kasaEtap5, kasaEtap6],
        gitLink: 'https://github.com/CamilleLinan/Projet-8-Kasa',
        webSite: 'https://projet-8-kasa-brnf30w8b-camillelinan.vercel.app/'
    },
    {
        id: '06',
        name: 'Groupomania',
        cover: groupoCover,
        alt: 'cover groupomania openclassrooms',
        resume: 'Création d\'un réseau social d\'entreprise avec React.js',
        context: 'Groupomania est une entreprise ayant un ralentissement de sa productivité attribué à une baisse de la motivation et de l\'implication des employés. Elle souhaite donc créer un réseau social d\'entreprise afin d\'améliorer la relation entre ces derniers.',
        objectifs: 'Créer une partie front-end avec un framework JavaScript, ici React. Et une API sécurisée permettant aux utilisateurs de se créer un compte, se connecter et se déconnecter. Ainsi que créer un post, modifier ou supprimer leur post, et liker tous les posts. J\'ai également ajouté une page où les utilisateurs peuvent modifier leurs informations. ',
        languages: [logoHtml, logoCss, logoSass, logoJS, logoNode, logoMongo, logoReact],
        picturesEtap: [groupoEtap1, groupoEtap2, groupoEtap3, groupoEtap4, groupoEtap5, groupoEtap6],
        graphicId: [groupoColors, groupoIcons],
        gitLinkBack: 'https://github.com/CamilleLinan/Projet-7-Groupomania-Back',
        gitLinkFront: 'https://github.com/CamilleLinan/Projet-7-Groupomania-Front'  
    },
    {
        id: '05',
        name: 'Hot Takes',
        cover: hottakesCover,
        alt: 'cover hottakes piiquante openclassrooms',
        resume: 'Création d\'un serveur et d\'une API avec Node, Express et MongoDB',
        context: 'Les sauces piquantes sont de plus en plus populaires, c\'est pourquoi la marque de condiments à base de piment Piiquante souhaite développer une application web de critique des sauces piquantes appelée "Hot Takes".',
        objectifs: 'Construire une API sécurisée avec ses models, controllers et routes. Les utilisateurs de l\'application doivent pouvoir créer de nouvelles sauces, modifier ou supprimer leur sauce, ainsi que liker ou disliker toutes les sauces créées.',
        languages: [logoNode, logoMongo],
        picturesEtap: [hottakesEtap1, hottakesEtap2],
        gitLink: 'https://github.com/CamilleLinan/Projet-6-Piiquante-Back'
    },
    {
        id: '04',
        name: 'Kanap',
        cover: kanapCover,
        alt: 'cover kanap openclassrooms',
        resume: 'Intégration d\'une API en JavaScript',
        context: 'Kanap est une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.',
        objectifs: 'Unifier les travaux déjà réalisés par les développeurs front-end et back-end, en intégrant dynamiquement les éléments de l\'API dans les différentes pages web avec JavaScript. L\'utilisateur doit pouvoir visualiser l\'ensemble des produits disponibles, ajouter un ou plusieurs article dans un panier, modifier ou supprimer son panier et enfin, passer commande.',
        languages: [logoHtml, logoJS],
        picturesEtap: [kanapEtap1, kanapEtap2, kanapEtap3, kanapEtap4],
        gitLink: 'https://github.com/CamilleLinan/Projet-5-Kanap'
    },
    {
        id: '03',
        name: 'La Panthere',
        cover: lapanthereCover,
        alt: 'cover lapanthere openclassrooms',
        resume: 'Refonte de site web et SEO',
        context: 'La Panthère est une grande agence de web design basée à Lyon. L\'activité de l\'entreprise est en perte de vitesse et son site web n\'apparaît pas en première page des moteurs de recherche.',
        objectifs: 'Analyser l\'état actuel de SEO du site fourni et améliorer les points les plus importants concernant notamment la vitesse, la taille et l\'accessibilité du site. Puis créer un rapport d\'optimisations pour comparer les résultats avant/après fournis par différents analyseurs de qualité et performance web.',
        languages: [logoHtml, logoCss],
        imgBefore: lapanthereBefore,
        imgAfter: lapanthereAfter,
        gitLink: 'https://github.com/CamilleLinan/Projet-4-La-Panthere',
        webSite: 'https://camillelinan.github.io/Projet-4-La-Panthere/'
    },
    {
        id: '02',
        name: 'OhMyFood',
        cover: ohmyfoodCover,
        alt: 'cover ohmyfood openclassrooms',
        resume: 'Intégration de maquette en HTML et animation avec SASS',
        context: 'Ohmyfood! est une jeune startup voulant s\'imposer sur le marché de la restauration. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée.',
        objectifs: 'Intégrer la maquette créée par le designer UI en mobilefirst en respectant les contraintes graphiques et d\'animations, sans utiliser de JavaScript. Mise en page libre pour les versions desktop et tablette.',
        languages: [logoHtml, logoCss, logoSass],
        picturesPres: [ohmyfoodDesk, ohmyfoodTab, ohmyfoodMobile],
        graphicId: [ohmyfoodColors, ohmyfoodIcons],
        gitLink: 'https://github.com/CamilleLinan/Projet-3-Ohmyfood',
        webSite: 'https://camillelinan.github.io/Projet-3-Ohmyfood/'
    },
    {
        id: '01',
        name: 'Booki',
        cover: bookiCover,
        alt: 'cover booki openclassrooms',
        resume: 'Intégration de maquette en HTML et CSS',
        context: 'Booki est une petite entreprise proposant un outil de planification de vacances. Le site permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix.',
        objectifs: 'Créer un prototype de site en intégrant la maquette conçue par le designer UI, en HTML et CSS. Le site doit bien sûr être responsive.',
        languages: [logoHtml, logoCss],
        picturesPres: [bookiDesk, bookiTab, bookiMobile],
        graphicId: [bookiColors, bookiIcons],
        gitLink: 'https://github.com/CamilleLinan/Projet-2-Booki',
        webSite: 'https://camillelinan.github.io/Projet-2-Booki/',
    }
]
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
import bookiColors from './cover/1Booki/bookiColors.webp'
import bookiIcons from './cover/1Booki/bookiIcons.webp'

// OHMYFOOD
import ohmyfoodCover from './cover/2Ohmyfood/ohmyfoodCover.webp'
import ohmyfoodDesk from './cover/2Ohmyfood/ohmyfoodDesk.webp'
import ohmyfoodTab from './cover/2Ohmyfood/ohmyfoodTab.webp'
import ohmyfoodMobile from './cover/2Ohmyfood/ohmyfoodMobile.webp'
import ohmyfoodColors from './cover/2Ohmyfood/ohmyfoodColors.webp'
import ohmyfoodIcons from './cover/2Ohmyfood/ohmyfoodIcons.webp'

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
import groupoColors from './cover/6Groupomania/groupoColors.webp'
import groupoIcons from './cover/6Groupomania/groupoIcons.webp'

// 7 KASA
import kasaCover from './cover/7Kasa/kasaCover.webp'
import kasaEtap1 from './cover/7Kasa/kasaEtap1.webp'
import kasaEtap2 from './cover/7Kasa/kasaEtap2.webp'
import kasaEtap3 from './cover/7Kasa/kasaEtap3.webp'
import kasaEtap4 from './cover/7Kasa/kasaEtap4.webp'
import kasaEtap5 from './cover/7Kasa/kasaEtap5.webp'
import kasaEtap6 from './cover/7Kasa/kasaEtap6.webp'
import kasaColors from './cover/7Kasa/kasaColors.webp'


export const projectsList = [
    {
        id: '07',
        name: 'Kasa',
        cover: kasaCover,
        resume: 'Cr??ation d\'une application web de location immobili??re avec React',
        context: 'Kasa est dans le m??tier de la location d???appartements entre particuliers depuis pr??s de 10 ans. L\'entreprise souhaite faire une refonte totale de son site web.',
        objectifs: 'D??velopper l\'ensemble de l\'application et ses composants avec React, en suivant les maquettes Figma fournies. Des composants r??utilisables doivent ??tre cr????s pour les onglets ouvrants et le carrousel de photo.',
        languages: [logoHtml, logoCss, logoSass, logoJS, logoReact],
        picturesEtap: [kasaEtap1, kasaEtap2, kasaEtap3, kasaEtap4, kasaEtap5, kasaEtap6],
        colors: kasaColors,
        gitLink: 'https://github.com/CamilleLinan/Projet-8-Kasa',
        webSite: 'https://projet-8-kasa-brnf30w8b-camillelinan.vercel.app/'
    },
    {
        id: '06',
        name: 'Groupomania',
        cover: groupoCover,
        resume: 'Cr??ation d\'un r??seau social d\'entreprise avec React.js',
        context: 'Groupomania est une entreprise ayant un ralentissement de sa productivit?? attribu?? ?? une baisse de la motivation et de l\'implication des employ??s. Elle souhaite donc cr??er un r??seau social d\'entreprise afin d\'am??liorer la relation entre ces derniers.',
        objectifs: 'Cr??er une partie front-end avec un framework JavaScript, ici React. Et une API s??curis??e permettant aux utilisateurs de se cr??er un compte, se connecter et se d??connecter. Ainsi que cr??er un post, modifier ou supprimer leur post, et liker tous les posts. J\'ai ??galement ajout?? une page o?? les utilisateurs peuvent modifier leurs informations. ',
        languages: [logoHtml, logoCss, logoSass, logoJS, logoNode, logoMongo, logoReact],
        picturesEtap: [groupoEtap1, groupoEtap2, groupoEtap3, groupoEtap4, groupoEtap5, groupoEtap6],
        colors: groupoColors,
        icons: groupoIcons,
        gitLinkBack: 'https://github.com/CamilleLinan/Projet-7-Groupomania-Back',
        gitLinkFront: 'https://github.com/CamilleLinan/Projet-7-Groupomania-Front'  
    },
    {
        id: '05',
        name: 'Hot Takes',
        cover: hottakesCover,
        resume: 'Cr??ation d\'un serveur et d\'une API avec Node, Express et MongoDB',
        context: 'Les sauces piquantes sont de plus en plus populaires, c\'est pourquoi la marque de condiments ?? base de piment Piiquante souhaite d??velopper une application web de critique des sauces piquantes appel??e "Hot Takes".',
        objectifs: 'Construire une API s??curis??e avec ses models, controllers et routes. Les utilisateurs de l\'application doivent pouvoir cr??er de nouvelles sauces, modifier ou supprimer leur sauce, ainsi que liker ou disliker toutes les sauces cr????es.',
        languages: [logoNode, logoMongo],
        picturesEtap: [hottakesEtap1, hottakesEtap2],
        gitLink: 'https://github.com/CamilleLinan/Projet-6-Piiquante-Back'
    },
    {
        id: '04',
        name: 'Kanap',
        cover: kanapCover,
        resume: 'Int??gration d\'une API en JavaScript',
        context: 'Kanap est une marque de canap??s qui vend ses produits depuis sa boutique exclusivement. Aujourd???hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.',
        objectifs: 'Unifier les travaux d??j?? r??alis??s par les d??veloppeurs front-end et back-end, en int??grant dynamiquement les ??l??ments de l\'API dans les diff??rentes pages web avec JavaScript. L\'utilisateur doit pouvoir visualiser l\'ensemble des produits disponibles, ajouter un ou plusieurs article dans un panier, modifier ou supprimer son panier et enfin, passer commande.',
        languages: [logoHtml, logoJS],
        picturesEtap: [kanapEtap1, kanapEtap2, kanapEtap3, kanapEtap4],
        gitLink: 'https://github.com/CamilleLinan/Projet-5-Kanap'
    },
    {
        id: '03',
        name: 'La Panthere',
        cover: lapanthereCover,
        resume: 'Refonte de site web et SEO',
        context: 'La Panth??re est une grande agence de web design bas??e ?? Lyon. L\'activit?? de l\'entreprise est en perte de vitesse et son site web n\'appara??t pas en premi??re page des moteurs de recherche.',
        objectifs: 'Analyser l\'??tat actuel de SEO du site fourni et am??liorer les points les plus importants concernant notamment la vitesse, la taille et l\'accessibilit?? du site. Puis cr??er un rapport d\'optimisations pour comparer les r??sultats avant/apr??s fournis par diff??rents analyseurs de qualit?? et performance web.',
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
        resume: 'Int??gration de maquette en HTML et animation avec SASS',
        context: 'Ohmyfood! est une jeune startup voulant s\'imposer sur le march?? de la restauration. En plus des syst??mes classiques de r??servation, les clients pourront composer le menu de leur repas pour que les plats soient pr??ts ?? leur arriv??e.',
        objectifs: 'Int??grer la maquette cr????e par le designer UI en mobilefirst en respectant les contraintes graphiques et d\'animations, sans utiliser de JavaScript. Mise en page libre pour les versions desktop et tablette.',
        languages: [logoHtml, logoCss, logoSass],
        picturesPres: [ohmyfoodDesk, ohmyfoodTab, ohmyfoodMobile],
        colors: ohmyfoodColors,
        icons: ohmyfoodIcons,
        gitLink: 'https://github.com/CamilleLinan/Projet-3-Ohmyfood',
        webSite: 'https://camillelinan.github.io/Projet-3-Ohmyfood/'
    },
    {
        id: '01',
        name: 'Booki',
        cover: bookiCover,
        resume: 'Int??gration de maquette en HTML et CSS',
        context: 'Booki est une petite entreprise proposant un outil de planification de vacances. Le site permet aux usagers de trouver des h??bergements et des activit??s dans la ville de leur choix.',
        objectifs: 'Cr??er un prototype de site en int??grant la maquette con??ue par le designer UI, en HTML et CSS. Le site doit bien s??r ??tre responsive.',
        languages: [logoHtml, logoCss],
        picturesPres: [bookiDesk, bookiTab, bookiMobile],
        colors: bookiColors,
        icons: bookiIcons,
        gitLink: 'https://github.com/CamilleLinan/Projet-2-Booki',
        webSite: 'https://camillelinan.github.io/Projet-2-Booki/',
    }
]
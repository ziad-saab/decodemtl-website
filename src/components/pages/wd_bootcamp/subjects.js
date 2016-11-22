import iconApi from '../../../assets/icons/icon-api.svg';
import iconTeam from '../../../assets/icons/icon-team.svg';
import iconStrategy from '../../../assets/icons/icon-strategy.svg';
import iconLearn from '../../../assets/icons/icon-learn.svg';

export default {
    en: [
        {
            title: 'Programming Fundamentals',
            text: 'Learn the fundamentals of programming by building various terminal applications. You will have the chance to build a command-line weather app and a command-line Reddit browser that uses the Reddit JSON API.',
            icon: iconApi
        },
        {
            title: 'Databases and Back-End Web Development',
            text: 'In this section, we will concentrate on data modeling and persistence with MySQL. We will also practice exposing data from our database by creating Reddit.com web server clone using ExpressJS, Node and MySQL.',
            icon: iconLearn
        },
        {
            title: 'Front-End Web Development',
            text: 'After having learned how to create a web server that talks to a database, this section will make us practice our design chops as we get in the world of front-end development. By working to bring our previous projects to the front-end world, we will practice various frameworks and tools such as jQuery and React. On the CSS front, we will be building a small responsive framework from scratch, and comparing it to popular frameworks such as Bootstrap and Foundation.',
            icon: iconStrategy
        },
        {
            title: 'Build an MVP',
            text: 'In this section, you will work with a team of two to three of your peers to build an MVP. Under the supervision of your instructor and TAs, you will spend two weeks building a web or mobile application using the technologies and skills you have learned. In addition to learning a popular Git workflow, you will also learn about many new topics during this time.',
            icon: iconTeam
        }
    ],
    fr: [
        {
            title: 'Principes de la programmation',
            text: 'Apprenez les bases de la programmation en développant multiples applications de terminal. Vous aurez l’opportunité de bâtir une application de météo en ligne de commande et ainsi qu’un navigateur Reddit en ligne de commande qui utilise l\'API Reddit JSON.',
            icon: iconApi
        },
        {
            title: 'Bases de données et développement web back-end',
            text: 'Dans ce volet, nous nous concentrons sur la précision des données et la persistance avec MySQL. Nous examinerons également la pratique d’exposition de notre base de données en créant un serveur web clone Reddit.com à partir d\'ExpressJS, Node et MySQL.',
            icon: iconLearn
        },
        {
            title: 'Développement web front-end',
            text: 'Une fois avoir appris à construire un serveur web qui communique via une base de données, cette section nous servira à la pratique de nouvelles conceptions web qui nous guidera dans le monde du développement front-end. En analysant les différentes méthodes d’afficher nos projets antécédents sur le front-end, nous pratiquerons l’exécution de multiple structures et outils tels que jQuery et React. Sur le front-end CSS, nous construirons un petit cadre réactif en entier pour ensuite le comparer à plusieurs autres cadres populaires tels que Bootstrap et Foundation.',
            icon: iconStrategy
        },
        {
            title: 'Bâtir un MVP',
            text: 'Dans ce volet, vous travaillerez en équipe de deux à trois collègues pour construire un MVP. Sous la supervision de votre instructeur et de vos assistants techniques, vous passerez deux semaines à bâtir une application web ou mobile en utilisant les technologies et les compétences que vous aurez apprises. En plus d\'apprendre une structure Git avancée, vous étudierez également nombreux nouveaux sujets durant cette matière.',
            icon: iconTeam
        }
    ]
}
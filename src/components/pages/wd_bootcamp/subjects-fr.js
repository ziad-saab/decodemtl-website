import iconApi from '../../../assets/icons/icon-api.svg';
import iconTeam from '../../../assets/icons/icon-team.svg';
import iconStrategy from '../../../assets/icons/icon-strategy.svg';
import iconLearn from '../../../assets/icons/icon-learn.svg';

export default [
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
];
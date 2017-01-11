import React from 'react';
import Link from 'APP/components/navigation/Link';

export const generalFAQ = {
    en: [
        {
            question: 'What is DecodeMTL?',
            answer: 'DecodeMTL is a Web Development school located in downtown Montreal. Our courses teach the most relevant, up-to-date digital skills required to excel in todays economy. Through project based teaching, our students are able to learn the fundamental languages powering the web today.'
        },
        {
            question: 'Will I get a diploma after completing one of your courses?',
            answer: 'We do not give diplomas to any of our graduates, but we will teach you modern technical skills that can be a lot more valuable than a diploma.',
        },
        {
            question: 'Do you offer job placement assistance?',
            answer: 'For our full-time programs, we do offer assistance. You will have the opportunity to work on your CV, Linkedin profile, as well as get personalized introductions to hiring companies. However, you are ultimately responsible for your own outcomes. Nonetheless, our top students find jobs fairly quickly without any help.'
        },
        {
            question: 'Do you accept international students?',
            answer: 'As long as you\'re aloud in the country for the duration of the course, we are happy to have you. However, job placement assistance is only available for Canadians or those eligible to work in Canada.'
        },
        {
            question: 'Are your courses taught in English or French?',
            answer: 'For the time being, we are teaching in English. However, most of our classes are pretty bilingual.'
        },
        {
            question: 'Where are you located?',
            answer: (<div>We are located in downtown Montreal in the Place Ville Marie complex. We are part of the WeWork co-working space located on the 4th floor of 3 Place Ville Marie. You can learn more about WeWork <Link to="/wework">here</Link>.</div>)
        },
        {
            question: 'How do I know which course to take?',
            answer: 'If you are not sure which course is right for you, we suggest you contact us so we can discuss your options together.'
        },
    ],
    fr: [
        {
            question: 'Qu\'est-ce que c’est DecodeMTL?',
            answer: 'DecodeMTL est une école de développement web située au centre-ville de Montréal. Nos cours enseignent les compétences numériques les plus pertinentes et les plus récentes essentielles pour réussir dans l\'économie d\'aujourd\'hui. Grâce à un enseignement basé sur des projets, nos étudiants sont capables d\'apprendre les langues de programmation qui alimentent le l’internet aujourd\'hui.'
        },
        {
            question: 'Est-ce que j\'obtiendrai un diplôme après avoir suivi un de vos cours?',
            answer: 'Nous ne donnons pas de certification à nos diplômés, mais nous allons vous enseigner des compétences techniques qui peuvent être beaucoup plus utile qu\'un diplôme.',
        },
        {
            question: 'Offrez-vous de l\'aide en placement?',
            answer: 'Pour nos programmes à temps plein, nous vous offrons de l\'aide. Vous aurez l\'occasion de travailler sur votre CV, votre profil LinkedIn et ainsi que des rencontres uniques avec des entreprises d\'embauche. Par contre, vous êtes responsable de vos propres résultats. Néanmoins, nos meilleurs étudiants trouvent des emplois assez rapidement sans aucune aide.'
        },
        {
            question: 'Acceptez-vous des étudiants de l’étranger?',
            answer: 'Tant que vous avez le droit d’être dans le pays, nous sommes heureux de vous avoir parmi nous. Par contre, l\'aide aux placements sont offerts qu\'aux Canadiens et aux Canadiennes et ceux qui ont le droit de travailler au Canada.'
        },
        {
            question: 'Vos cours sont enseignés en anglais ou en français?',
            answer: 'Pour le moment, nous enseignons seulement qu’en anglais. Toutefois, la plupart de nos cours sont assez bilingues.'
        },
        {
            question: 'Où êtes-vous situés?',
            answer: (<div>Nous sommes situés au centre-ville de Montréal dans le complexe de la Place Ville Marie. Nous faisons partie de l'espace de travail collaboratif WeWork situé au 4e étage du 3 Place Ville Marie. Vous pouvez en savoir plus sur WeWork <Link to="/wework">ici</Link>.</div>)
        },
        {
            question: 'Comment puis-je savoir quel cours suivre?',
            answer: 'Si vous ne savez pas quel cours est idéal pour vous, nous vous suggérons de nous contacter afin que nous puissions discuter de vos options ensemble.'
        },
    ]
}

export const financialsFAQ = {
    en: [
        {
            question: 'Do you offer financial assistance?',
            answer: 'Yes, we have partnered with the National Bank of Canada to offer low-interest student loans. We have a dedicated loan officer who will be happy to sit down with you and discuss the details. These student loans are low interest and offer flexible re-payment options. Contact us for more details.'
        },
        {
            question: 'What methods of payment to you accept?',
            answer: 'Payments can be made by cash or cheque, and can be paid at our office.'
        },
    ],
    fr: [
        {
            question: 'Offrez-vous de l\'aide financière?',
            answer: 'Oui, vous pouvez financer vos frais de scolarité grâce au prêt étudiant à faible intérêt offert en collaboration avec la Banque Nationale du Canada. Nous avons un agent dédié qui sera heureux de s\'asseoir avec vous et de discuter les détails. Ces prêts étudiants sont de faible intérêt et offrent des options flexibles de remboursement. Contactez-nous pour plus de détails.'
        },
        {
            question: 'Quelles sont vos options de paiement?',
            answer: 'Les paiements peuvent être effectués en espèces ou par chèque, et peuvent être payés à notre bureau.',
        },
    ]
}

export const immersiveFAQ = {
    en: [
        {
            question: 'Why Should I attend DecodeMTL?',
            answer: 'If you are looking to quickly advance into the field of Web Development, either as a career move or to launch your own product, DecodeMTL will equip you with the skills to do so. Our teachers are top-notch, our curriculum teaches the most in-demand technologies, and our work environment is awesome.'
        },
        {
            question: 'What are the technical qualifications?',
            answer: 'Most of our students have dabbled in code, either in school, professionally, or out of curiosity. You should have a high-level knowledge of the different types of programming and languages that exist, and have at the very least tinkered with sites like CodeSchool or Codecademy. Our admissions process and pre-course work are designed to get you up to speed and ready for the bootcamp, so you don\'t need to be a coding ninja to apply. If you\'re not sure if you are ready to apply, contact us and we will point you in the right direction.',
        },
        {
            question: 'What are the non technical qualifications?',
            answer: 'You need passion, and lots of it! Passion is the recurring characteristic we find in all successful students. If you love what you do, you will ultimately be successful.'
        },
        {
            question: 'Will I build an App in this course?',
            answer: 'Absolutely! In the last two weeks of the course, you will be placed in a team and tasked to build a web based application from the ground up. This capstone project will then be presented to a large audience on the last day of the course. This Demo Day event will serve as a way to network with potential employers who will be in the room watching your presentation.'
        },
        {
            question: 'I am an international student, do you offer housing?',
            answer: (<div>We have partnered with EVO, a student residence just down the street from us. You can read more about EVO <Link to="/housing">here</Link>.</div>)
        },
        {
            question: 'What do I need to bring with me?',
            answer: 'Any fast laptop will do. MacOS, Linux, or Windows all work fine.'
        },
        {
            question: 'When should I apply to an upcoming cohort?',
            answer: 'As soon as you know you are ready to commit, you should apply. At the very latest, we suggest two months before the course start date. This gives you time to get through admissions and adequately prepare for the course.'
        },
    ],
    fr: [
        {
            question: 'Pourquoi devrais-je suivre des cours chez DecodeMTL?',
            answer: 'Si vous vous cherchez à croître rapidement dans le domaine du développement web, que ce soit en tant que nouvelle carrière ou du lancement d’un nouveau produit, DecodeMTL vous instruira avec toutes les compétences pour réussir. Nos professeurs sont les meilleurs du domaine, notre programme enseigne les technologies les plus en demande et notre environnement de travail est l’un des plus géniaux.'
        },
        {
            question: 'Quelles sont les compétences techniques?',
            answer: 'La plupart de nos élèves ont joué dans la programmation, soit à l\'école, professionnellement, ou soit par curiosité. Vous devez avoir une connaissance de haut niveau des différents types de programmation et des langues qui existent, et ainsi qu’une expérience minimale avec des sites comme CodeSchool ou Codecademy. Notre processus d\'admission et le travail conçu avant le cours ont été développées pour vous remettre à vitesse et prêts pour le programme. En d’autres mots, vous n\'avez pas besoin d\'être un ninja de programmation pour appliquer. Si vous ne savez pas si vous êtes prêt à postuler, communiquez-nous et nous vous guiderons dans la bonne direction.'
        },
        {
            question: 'Quelles sont les compétences non techniques?',
            answer: 'Vous avez besoin de passion, et certainement beaucoup! La passion est la caractéristique primordiale que nous retrouvons chez tous nos étudiants qui réussissent et se démarquent. Si vous aimez ce que vous faites, vous aurez certainement du succès.'
        },
        {
            question: 'Est-ce que je vais créer une application dans ce cours?',
            answer: 'Absolument! Dans les deux dernières semaines du cours, vous serez placé en équipe et chargés de produire une application web du tout début. Ce projet sera ensuite présenté à un grand public lors du dernier jour du cours. Cette journée de démonstration servira comme moyen de réseautage avec les employeurs potentiels qui seront dans la salle durant votre présentation.'
        },
        {
            question: 'Je suis un étudiant international, offrez-vous des options de logement?',
            answer: (<div>Nous avons établi un partenariat avec EVO qui est une résidence d’étudiants qui se trouve au bas de la rue. Vous pouvez en savoir plus sur EVO <Link to="/housing">ici</Link>.</div>)
        },
        {
            question: 'Que dois-je apporter avec moi?',
            answer: 'Tout simplement un ordinateur portable et rapide. MacOS, Linux ou Windows fonctionnent bien.'
        },
        {
            question: 'Quand est-ce que devrais-je présenter une demande d’admission au programme?',
            answer: 'Dès que vous savez que vous êtes prêt à vous engager, vous devriez appliquer. Au plus tard, nous vous recommandons d’appliquer deux mois avant la date du début du cours. Ceci vous donnera amplement de temps pour finaliser votre admission et de vous préparer adéquatement pour le cours.'
        },
    ]
}

export const partTimeFAQ = {
    en: [
        {
            question: 'I work full-time, can I still take this course?',
            answer: 'Definitely! We\'ve designed our Part-Time courses to work around most peoples work schedule. Our courses start at 6:30PM, giving you enough time to have dinner and travel to our campus.'
        },
        {
            question: 'What do I need to bring with me?',
            answer: 'Any fast laptop will do. MacOS, Linux, or Windows all work fine.'
        },
    ],
    fr: [
        {
            question: 'Je travaille à temps plein, puis-je suivre ce cours?',
            answer: 'Définitivement! Nous avons conçu nos cours à temps partiel pour faciliter la plupart des horaires. Nos cours commencent à 18h30, ce qui vous permet suffisamment de temps pour souper et vous rendre à notre campus.'
        },
        {
            question: 'Que dois-je apporter avec moi?',
            answer: 'Tout simplement un ordinateur portable et rapide. MacOS, Linux ou Windows fonctionnent bien.'
        },
    ]
}

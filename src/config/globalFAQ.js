import React from 'react';
import Link from 'APP/components/navigation/Link';

export const generalFAQ = {
    en: [
        {
            question: 'What is DecodeMTL?',
            answer: (<div>DecodeMTL is a coding school which specializes in teaching Web Development. We teach coding skills through project based teaching. We were founded in 2014, with the goal of teaching more people to code, and filling the talent gap in the job market for developers. Our courses teach the most relevant, and up-to-date technical skills used by today's top companies. You can read more about us <Link to="/wework">here</Link>.</div>)
        },
        {
            question: 'Why should I attend DecodeMTL?',
            answer: (<div><p>If you want to kickstart your career in Web Development, DecodeMTL was built just for you. Our graduates go on to do amazing things. From launching companies, to becoming developers at startups and tech companies, DecodeMTL grads are able to pursue their passion for coding in incredible ways.</p> <p>Our teaching staff are developers, consultants, and educators at companies that use what we teach on a daily basis. Our curriculum is updated regularly with new industry standards, and our small class size ensures you get 1 on 1 attention. On top of this, we are located in Montreal's coolest co-working space at WeWork Place Ville Marie.</p></div>)
        },
        {
            question: 'What diploma will I receive after graduating?',
            answer: (<div><p>“Coding Bootcamps” are typically non-accredited institutions. Meaning, we are not recognized by the Quebec ministry of education. Therefore, we do not give out diplomas.</p><p>However, you don’t really need a diploma to get a job in this field. Our students are getting hired quickly after graduation. They do this by demonstrating their passion for coding, a strong work ethic, and a portfolio of code that they put together before, during, and after our course. Your biggest asset is your ability to write code. Through our rigorous course, we will make sure you write a lot of it!</p></div>)
        },
        {
            question: 'How do you help me get a job?',
            answer: (<div><p>In several ways. In fact, it all starts with our curriculum and teaching process. You are learning a very in-demand skill, and you will have written an ample amount of code to demonstrate your abilities at the end of our course. </p><p>Aside from the technical aspect, you will learn to work in teams, basic project management and delegation skills, as well as working with deadlines throughout your final project. We will walk you through the best ways to market yourself as a developer, and help you write a Linkedin profile and resume.</p><p>Lastly, we host a hiring event on the last day of every class. Employers are invited to DecodeMTL, and you will be presenting your final project to them. This is followed by networking where many students will begin talking to potential employers.</p></div>)
        },
        {
            question: 'Do you accept international students?',
            answer: 'Yes absolutely. Since DecodeMTL is only an 8-week program, most international students are welcome on a tourist visa.'
        },
        {
            question: 'Do you offer student housing?',
            answer: (<div>We have partnered with EVO Montreal, to offer housing to those wishing to take our course from outside of Montreal. EVO offers fully furnished, move-in ready housing just 5 minutes away from DecodeMTL. You can read more about EVO <Link to="/housing">here</Link>.</div>)
        },
        {
            question: 'Are your courses taught in English or French?',
            answer: 'Our courses and material are all taught in English. The language of the Web, and all documentation is generally in English, so students wishing to join us should have a basic working proficiency in English. However, our staff is fully bilingual, and many of our students are francophone. Questions can be asked in your language of choice, and we will help you in your own language. You can also do your final presentation in French or English.'
        },
        {
            question: 'Where are you located?',
            answer: (<div>We are located in downtown Montreal in the Place Ville Marie complex. We are part of the WeWork co-working space located on the 4th floor of 3 Place Ville Marie. You can learn more about WeWork <Link to="/wework">here</Link>.</div>)
        },
        {
            question: 'Can I schedule an in person visit to learn more?',
            answer: (<div>Yes, we would be more than happy to meet you in person. You can schedule a visit with us by clicking the link in our navigation menu.</div>)
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
            answer: 'Yes, we have partnered with the National Bank of Canada to offer low-interest student loans. We have a dedicated loan officer who will be happy to sit down with you and discuss the details. These student loans are low interest and offer flexible repayment options. Contact us for more details.'
        },
        {
            question: 'What methods of payment to you accept?',
            answer: 'Payments can be made by cash or cheque, and can be paid at our office.'
        },
        {
            question: 'How much is tuition and what does the payment schedule look like?',
            answer: 'Tuition for our immersive course is $5,995 for those who are registered 60 days or more before the course start date. For those who register after that, tuition increases to $6,495. GST and QST must be added to the price of tuition. Upon acceptance into our program, a 10% deposit is required to secure your seat. The balance is due two weeks before the course start date.'
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
            question: 'I’m a beginner, can I still apply?',
            answer: 'Absolutely! We encourage everyone with an interest in programming wanting to join our course to apply, regardless of your skill level. If you have never coded before, we have developed a free prep-course which you can do on your own time before committing to take our course. This is meant to teach you the fundamentals required for our course, as well as give you a taste for what web development is. If you are still unsure whether or not you should apply, we suggest you schedule a visit so we can take the time to speak 1 on 1.'
        },
        {
            question: 'How does the application process work?',
            answer: (<div><p>It all starts by submitting an application online. It’s a simple form with a few questions, and only takes a couple of minutes to complete. Once we receive your application, you will receive an email to schedule a Skype call with a member of our team. There is no need to prepare for this call. We simply want to talk to you in person, learn a bit more about your goals, and discuss the details of our course. After our Skype call, the next step is a technical interview. The technical interview can be done either in person or online, and takes an hour.</p><p>In order to prepare yourself, we have created a free prep-course which you can use as a study guide. In general, it takes about 40-60 hours of practice if you have never coded before to prepare. Once you pass the technical interview, you can join any of our upcoming courses. If you fail, we will give you some feedback and encourage you come back and try again.</p></div>)
        },
        {
            question: 'What do I need to bring with me?',
            answer: 'You will need to bring your own laptop. We use a development environment in the cloud, this means that you can use MacOS, Linux or Windows, and it won’t make a difference. As long as you have a fast, reliable computer, you are good to go.'
        },
        {
            question: 'When should I apply to an upcoming cohort?',
            answer: 'We recommend applying at least 3 months before your desired start date. For one, it will give you access to the early bird discount (save $500). Secondly, it will give you ample time to do our prep-course and prepare for your technical interview. It will also ensure that you can get a seat in the class of your choice, and not have to worry about the course being full.'
        },
        {
            question: 'How big are your class sizes?',
            answer: 'Our maximum intake for any given cohort is 18 students.'
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

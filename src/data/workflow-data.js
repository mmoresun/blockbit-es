
import globePic from '../images/workflow-pics/globe.svg';
import consultingPic from '../images/workflow-pics/consulting.svg';
import contractPic from '../images/workflow-pics/contract.svg';
import puzzlePic from '../images/workflow-pics/puzzle.svg';

export const workflowData = [
    {
        id: 1,
        desc: 'project',
        buttonText: 'Project-based (fixed price)',
        cardTitle: 'Project-based (fixed price)',
        cardText: 'A fully dedicated remote team or person. We have the possibility to delegate full Scrum teams (PM, UI/UX, devs, testers, devops) to work exclusively on your project.',
        cardRecommend: 'Classic model where we take care of the design, implementation and maintenance of agreed features within a specific time frame.',
        cardPic: contractPic
    },
    {
        id: 2,
        desc: 'team',
        buttonText: 'Team augmentation',
        cardTitle: 'Team augmentation',
        cardText: 'A fully dedicated remote team or person. Since the team might be working in places like New York or Kiev, we take care of the logistics. You just pay for labor.',
        cardRecommend: 'A fully dedicated remote team or person. Since the team might be working in places like New York or Kiev, we take care of the logistics. You just pay for labor.',
        cardPic: globePic
    },
    {
        id: 3,
        desc: 'consulting',
        buttonText: 'Consulting services',
        cardTitle: 'Consulting services',
        cardText: 'A fully dedicated remote team of experts helping crack the code or review the technical feasibility of your project. You pay only for the experties, we take care of the rest.',
        cardRecommend: 'Ad hoc concultations. Projects kick-off. Audits',
        cardPic: consultingPic
    },
    {
        id: 4,
        desc: 'custom',
        buttonText: 'Custom deal',
        cardTitle: 'Custom deal',
        cardText: 'You have specific requirements or setup? Sit down with us and discuss the best practicies we can apply to help you.',
        cardRecommend: 'Companies or enterprises with a significant momentum.',
        cardPic: puzzlePic
    },
];
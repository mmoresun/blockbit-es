
import emailPic from '../images/footer-icons/email.svg';
import locationPic from '../images/footer-icons/location.svg';
import telegramPic from '../images/footer-icons/telegram.svg';
import linkedinPic from '../images/footer-icons/linkedin.svg';
import mediumic from '../images/footer-icons/medium.svg';
import twitterPic from '../images/footer-icons/twitter.svg';
import youtubePic from '../images/footer-icons/youtube.svg';

export const footerData = {

    // footer social pics
    pics: [
        { id: 1, pic: linkedinPic, picUrl: 'https://www.linkedin.com/company/blockbites'},
        { id: 2, pic: twitterPic, picUrl: 'https://twitter.com/theblockbites' },
        { id: 3, pic: youtubePic, picUrl: 'https://www.youtube.com/@blockbites' },
        { id: 4, pic: mediumic, picUrl: 'https://medium.com/@theblockbites' },
        { id: 5, pic: telegramPic, picUrl: 'https://t.me/+7nneDXbzEgMxNDBk' }
    ],

    // footer copyright
    copy: 'Copyright Blockbites 2022',

    // footer address data and pic 
    // "Line 1" is usually used street name and building/apartment number, "Line 2" for postal code, city and country
    address: {
        line1: 'Floriana Stablewskiego 43/4',
        line2: '60-213 Poznań, Poland',
        icon: locationPic
    },

    // footer email data and pic
    email: {
        text: 'hello@blockbit.es',        
        icon: emailPic
    },

    // footer link list
    linkList: [
        { id: 1, linkText: 'Home', linkUrl: '/' },
        { id: 2, linkText: 'Projects', linkUrl: '/projects' },
        { id: 3, linkText: 'Services', linkUrl: '/' },
        { id: 4, linkText: 'Contacts', linkUrl: '/' },
        { id: 5, linkText: 'Privacy Policies', linkUrl: '/' }
    ]
};
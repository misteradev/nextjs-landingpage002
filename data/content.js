import Image from 'next/image'

//Images
import hero from '../public/images/hero.png'
import work1 from '../public/images/work1.png'
import work2 from '../public/images/work2.png'
import work3 from '../public/images/work3.png'
import work4 from '../public/images/work4.png'
import projectj1 from '../public/images/project1.png'
import projectj2 from '../public/images/project2.png'
import projectj3 from '../public/images/project3.png'
import feature1 from '../public/images/feature1.png'
import feature2 from '../public/images/feature2.png'
import feature3 from '../public/images/feature3.png'
import feature4 from '../public/images/feature4.png'
import feature5 from '../public/images/feature5.png'
import feature6 from '../public/images/feature6.png'
import client1 from '../public/images/Client1.jpg'
import startup from '../public/images/startup.png'
import blog1 from '../public/images/blog1.png'
import blog2 from '../public/images/blog2.png'
import blog3 from '../public/images/blog3.png'


export const contents = {
    navmenu: {
        links: [
            { path: '/', label: 'Home' },
            { path: '/', label: 'About' },
            { path: '/', label: 'Features' },
            { path: '/', label: 'Pricing' },
            { path: '/', label: 'FAQ' },
            { path: '/', label: 'Blog' },

        ],
    },

    hero: {
        heroimg: hero,
        title: 'Building stellar websites for early startups',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    },

    work: {
        title: 'How we work',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        howwork: [
            { img: work1, title: 'Startegy', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' },
            { img: work2, title: 'Wireframing', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' },
            { img: work3, title: 'Design', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' },
            { img: work4, title: 'Development', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' }
        ],
    },

    project: {
        title: 'View our projects',
        title1: 'Workhub office Webflow Webflow Design',
        desc1: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam',
        title2: 'Unisas Website',
        img1: projectj1,
        img2: projectj2,
        img3: projectj3,
    },

    features: {
        title1: 'Features',
        title2: 'Design that solves problems, one product at a time',
        card: [
            {icon: feature1, title: 'Uses Client First', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '},
            {icon: feature2, title: 'Two Free Revision Round', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '},
            {icon: feature3, title: 'Template Customization', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '},
            {icon: feature4, title: '24/7 Support', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '},
            {icon: feature5, title: 'Quick Delivery', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '},
            {icon: feature6, title: 'Hands-on approach', desc: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '},
        ],
    },

    client: {
        title: 'What our clients say about us',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nisi!',
        subtitle: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
        icon: client1,
        name1: 'John Doe',
        dep1: 'Sales Manager',
        name2: 'John Blow',
        dep2: 'Maketing Manager'
    },

    questions: {
        title: 'Frequently asked questions',
        desc: 'Contact us for more info',
        accordionItem: [
            {idx: 1, number: '01', question: 'How much time does it take?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {idx: 2, number: '02', question: 'What is your class naming convention?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {idx: 3, number: '03', question: 'How do you communicate?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {idx: 4, number: '04', question: 'I have a bigger project. Can you handle it?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            {idx: 5, number: '05', question: 'What is your class naming convention?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        ],
    },

    startup: {
        img: startup,
        titleLeft: 'Building stellar websites for early startups',
        descLeft: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
        titleRight: 'Send inquiry',
        descRight: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    },

    blog: {
        title: 'Our blog',
        blogCard: [
            {img: blog1, alt: 'image1', date: '19 jan 2022', title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months', desc: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract', path: '/'},
            {img: blog2, alt: 'image2', date: '19 jan 2022', title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months', desc: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract', path: '/'},
            {img: blog3, alt: 'image3', date: '19 jan 2022', title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months', desc: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract', path: '/'},
        ],
    },
}
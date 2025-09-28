const logotext = "MV";
const meta = {
    title: "MV Portfolio",
    description: "Im Martynas Vycas _ Software developer",
};

const introdata = {
    title: "I’m Martynas",
    animated: {
        first: "I love coding",
        second: "I embrace challenges",
        third: "I adapt and innovate",
    },
    description: "Fueled by passion, my journey in software development is defined by relentless growth and the pursuit of excellence.",
};

const dataabout = {
    title: "a bit about myself",
    aboutme: "In June 2024, I graduated with a Bachelor's degree in Software Technology Engineering, gaining a robust foundation in diverse technologies and project management frameworks. During my studies, I worked on numerous group and individual projects that enhanced my teamwork and problem-solving skills.\n\nI thrive in collaborative environments and communicate effectively, which I believe makes me a strong team player. Additionally, I come through when working independently on projects or tasks. I constantly strive for excellence and am committed to continuous learning and improvement in all my endeavors. \n\nBeyond work, I maintain an active lifestyle, with a particular love for horseback riding and show jumping.",
};

const services = [
    {
        title: "Mobile Apps",
    },
    {
        title: "Devops",
    },
    {
        title: "Cyber-Security",
    },
    {
        title: "Web Apps",
    },
];

const dataportfolio = [{
        id: 1,
        title: "OEE Dashboard",
        img: "/portfolio_/images/internship/head.png",
        banner: "/portfolio_/images/internship/banner.png",
        description: "Internship: Web application for monitoring the OEE of industrial robots.",
        about: "The project scope involved creating an Overall Equipment Effectiveness (OEE) dashboard that could be accessed from any device by my internship company's stakeholders and clients. The main technology stack consisted of PHP, Laravel 8 and MS SQL server. The project was completed over the course of 6 months and I developed this application alone with guidance from my supervisor. Apart from programming, I also set up an Ubuntu server on an Intel NUC, configured the network, and set up an nginx web server. The code may be disclosed upon request.  For privacy reasons, some parts of the video and pictures are masked.",
        video: "https://www.youtube.com/embed/Ta6IBzU_nF0",
        pictures: [
            {
                src: "/portfolio_/images/internship/Picture6.png",
                width: 1303,
                height: 1079
              },
              {
                src: "/portfolio_/images/internship/Picture5.png",
                width: 1098,
                height: 1056
              },
              {
                src: "/portfolio_/images/internship/Picture3.png",
                width: 1325,
                height: 1014
              },
              {
                src: "/portfolio_/images/internship/Picture4.png",
                width: 1244,
                height: 1070
              },
              {
                src: "/portfolio_/images/internship/Picture1.png",
                th: "/portfolio_/images/internship/Picture1-th.png",
                width: 723,
                height: 922
              },
              {
                src: "/portfolio_/images/internship/Picture2.png",
                width: 971,
                height: 819
              },
        ],
        link: "/portfolio/project/1",
    },
    {
        id: 2,
        title: "DIFOU Game",
        img: "/portfolio_/images/DIFOU/head.png",
        banner: "/portfolio_/images/DIFOU/banner.png",
        description: "VIA Game development course project - a top down zombie survival game",
        about: "This project was a part of a game development course and I chose to work on it alone in order to explore the possibilities of developing 3D games independently. The main technology stack used was C# and Unity. The original version was designed for arcade machines (academical requirement), but I have also released an updated PC version with improved player handling and additional features. This project marked my first experience building a game. \nPlease refer to the .md blog posts on my GitHub for more information. ",
        git: "https://github.com/Mvycas/DeathInFrontOfUs/tree/main",
        video: "https://www.youtube.com/embed/fM_L4rC5VP8",
        pictures: [
            {
                src: "/portfolio_/images/DIFOU/game2.png",
                width: 1732,
                height: 1247
              },
              {
                src: "/portfolio_/images/DIFOU/game3.png",
                width: 1567,
                height: 1193
              },
              {
                src: "/portfolio_/images/DIFOU/game1.png",
                width: 1792,
                height: 1363
              },
              {
                src: "/portfolio_/images/DIFOU/shader.png",
                width: 1784,
                height: 1181
              },
              {
                src: "/portfolio_/images/DIFOU/occlusion.png",
                width: 1139,
                height: 1155
              },
              {
                src: "/portfolio_/images/DIFOU/menu.png",
                width: 1208,
                height: 864
              },
        ],
        link: "/portfolio/project/2",
    },
    {
        id: 3,
        title: "UX/UI Design",
        img: "/portfolio_/images/IDX/head1.png",
        banner: "/portfolio_/images/IDX/banner.jpg",
        description: "The Interactive Design course project where I developed UI/UX for a mobile application.",
        about: "Inspired by my Bachelor Thesis, this project aimed to develop a user interface and user experience design for a mobile EHR application. The project began with a comprehensive end-user research study. Following the initial research, I created a low-fidelity prototype using pen-and-paper, which included an interactive co-creation session to incorporate direct user feedback. Based on this foundation, advanced high-fidelity prototyping was carried out in Figma. In order to evaluate the effectiveness of this high-fidelity prototype, a think-aloud testing session was conducted in order to identify both its strengths and its weaknesses.",
        pictures: [
            {
                src: "/portfolio_/images/IDX/figma1.png",
                width: 1522,
                height: 1114
              },
              {
                src: "/portfolio_/images/IDX/figma2.png",
                width: 1085,
                height: 1149
              },
              {
                src: "/portfolio_/images/IDX/figma3.png",
                width: 1087,
                height: 1149
              },
              {
                src: "/portfolio_/images/IDX/figma4.png",
                width: 1087,
                height: 1149
              },
        ],
        link: "/portfolio/project/3",
    },
    {
        id: 4,
        title: "Bachelor project",
        img: "/portfolio_/images/Bachelor/head.png",
        banner: "/portfolio_/images/Bachelor/banner.jpg",
        description: "Advancing EHR management with innovative technology solutions.",
        about: "In this bachelor's project, my team and I created a backend service and a mobile application that addressed issues like medical record fraud and alteration. Our second objective was to make medical records accessible from a single entity, available to both medical professionals and patients. Consequently, when people travel abroad, they would enjoy a seamless experience at medical facilities worldwide that had integrated our system. Although our solution remained a prototype, it demonstrated strong potential and could be further developed and implemented upon request.\n\nI was primarily responsible for server-side development, and I also contributed to both front-end and back-end development for our mobile application. Additionally, I handled some back-end development for our React web application. I set up CI/CD pipelines and managed hosting on Digital Ocean’s application platform. \n\nThe UX/UI design was borrowed from my previous project and only slightly modified. This decision was made after a think-aloud testing session revealed a few minor issues.",
        video: "https://www.youtube.com/embed/5TgMawtcSpA",
        pictures: [
            {
                src: "/portfolio_/images/Bachelor/domain1.png",
                width: 2052,
                height: 1531
              },
              {
                src: "/portfolio_/images/Bachelor/1.png",
                width: 1200,
                height: 1000
              },
              {
                src: "/portfolio_/images/Bachelor/2.png",
                width: 1200,
                height: 1000
              },
              {
                src: "/portfolio_/images/Bachelor/3.png",
                width: 1200,
                height: 1000
              },
        ],
        link: "/portfolio/project/4",
    },
    {
        id: 5,
        title: "MATCH3 Game",
        img: "/portfolio_/images/SWA/head.png",
        banner: "/portfolio_/images/SWA/banner2.jpg",
        description: "Match 3 game developed during the Single Page Web application course.",
        about: "In the Single Page Web Applications course, the assignment was to create a Match 3 game. The professor supplied a server-side application, and the task involved developing a client application with a user interface that could interact with the server for user authentication and score tracking. The objective was to master TypeScript and React, as well as understand the principles of functional programming.",
        video: "https://www.youtube.com/embed/BW6pdfn-KVQ",
        git: "https://github.com/Mvycas/game_client",
        pictures: [
        ],
        link: "/portfolio/project/5",
    },
   
];

const contactConfig = {
    YOUR_EMAIL: "martynas.vycas@hotmail.com",
};

const socialprofils = {
    github: "https://github.com/Mvycas",
    linkedin: "https://www.linkedin.com/in/martynas-vycas-491709193/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
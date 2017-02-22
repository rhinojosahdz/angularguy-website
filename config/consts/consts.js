// REMEMBER TO RUN npm start AGAIN AFTER MODIFYING THIS FILE // TODO add watcher so webpack takes care of this
let baseUrl = 'http://rhinojosa.com';
let obj = {
    baseUrl: baseUrl,
    tabs: [
        {
            name: 'home',
            routerLinkActiveOptions: { exact: true },
            routerLink: '/'
        },
        {
            name: 'resume',
            routerLinkActiveOptions: { exact: true },
            routerLink: 'resume'
        },
        {
            name: 'technologies',
            routerLinkActiveOptions: { exact: true },
            routerLink: 'technologies'
        },
        {
            name: 'contact',
            routerLinkActiveOptions: { exact: true },
            routerLink: 'contact'
        },
    ],
    projects: [
        {
            id: 'ng-invaders',
            name: 'Space Invaders',
            url: `${baseUrl}/ng-invaders`,
            video: 'ng-invaders.m4v',
        },
        {
            id: 'angulatris',
            name: 'Tetris',
            url: `${baseUrl}/angulatris`,
            video: 'angulatris.m4v',
        },
        {
            id: 'solitaire',
            name: 'Solitaire',
            url: `${baseUrl}/solitaire`,
            video: 'solitaire.m4v',
        },
        {
            id: 'minesweeper',
            name: 'Minesweeper',
            url: `${baseUrl}/minesweeper`,
            video: 'minesweeper.m4v',
        },
    ],
    technologies: [
        { name: 'AngularJS', stars: 5 }, { name: 'Angular 2', stars: 5 }, { name: 'JavaScript', stars: 5 }, { name: 'TypeScript', stars: 5 }, { name: 'ES6', stars: 5 }, { name: 'Ionic', stars: 5 }, { name: 'Cordova', stars: 5 }, { name: 'HTML/HTML5', stars: 5 }, { name: 'Google Maps', stars: 5 }, { name: 'CSS/CSS3', stars: 5 }, { name: 'AJAX', stars: 5 }, { name: 'JSON', stars: 5 }, { name: 'jQuery', stars: 5 }, { name: 'MySQL', stars: 5 }, { name: 'SQL', stars: 5 }, { name: 'VSCode', stars: 5 },

        { name: 'Java', stars: 4 }, { name: 'Angular Material', stars: 4 }, { name: 'CSS Flex/Flexbox', stars: 4 }, { name: 'Leaflet', stars: 4 }, { name: 'RegExes', stars: 4 }, { name: 'Lodash/Underscore', stars: 4 }, { name: 'webpack.js', stars: 4 }, { name: 'Responsive Web Design', stars: 4 }, { name: 'Selenium IDE', stars: 4 }, { name: 'Game Development', stars: 4 }, { name: 'PhoneGap', stars: 4 }, { name: 'TSLint', stars: 4 }, { name: 'JSHint', stars: 4 }, { name: 'Node.js', stars: 4 }, { name: 'XML', stars: 4 }, { name: 'Protractor', stars: 4 }, { name: 'Linux', stars: 4 }, { name: 'Grunt', stars: 4 }, { name: 'Sass', stars: 4 }, { name: 'BASH', stars: 4 }, { name: 'PHP', stars: 4 }, { name: 'Flash', stars: 4 }, { name: 'JPA', stars: 4 }, { name: 'Docker', stars: 4 }, { name: 'PouchDB', stars: 4 }, { name: 'Hibernate', stars: 4 }, { name: 'Facebook JS SDK', stars: 4 }, { name: 'Auth0', stars: 4 }, { name: 'jQuery UI', stars: 4 }, { name: 'jQuery Mobile', stars: 4 }, { name: 'Bootstrap', stars: 4 }, { name: 'MapQuest', stars: 4 }, { name: 'Jira', stars: 4 }, { name: 'phpMyAdmin', stars: 4 }, { name: 'MongoDB', stars: 4 }, { name: 'SSH', stars: 4 }, { name: 'REST', stars: 4 }, { name: 'SOAP', stars: 4 }, { name: 'Jasmine', stars: 4 }, { name: 'Chrome DevTools', stars: 4 }, { name: 'Firebug', stars: 4 }, { name: 'SQL Server', stars: 4 }, { name: 'WebStorm', stars: 4 }, { name: 'Brackets', stars: 4 }, { name: 'Google Docs', stars: 4 }, { name: 'Express', stars: 4 }, { name: 'PostgreSQL', stars: 4 }, { name: 'Postman', stars: 4 }, { name: 'DOM', stars: 4 }, { name: 'Glassfish', stars: 4 }, { name: 'VirtualBox', stars: 4 }, { name: 'VMware', stars: 4 }, { name: 'Apache Web Server', stars: 4 }, { name: 'cPanel', stars: 4 }, { name: 'MEAN', stars: 4 }, { name: 'XAMPP', stars: 4 }, { name: 'npm', stars: 4 }, { name: 'NetBeans', stars: 4 }, { name: 'Gulp', stars: 4 }, { name: 'Chai', stars: 4 }, { name: 'Ubuntu', stars: 4 }, { name: 'GNOME', stars: 4 }, { name: 'Mocha', stars: 4 }, { name: 'Windows', stars: 4 }, { name: 'Apache Derby', stars: 4 }, { name: 'YUI', stars: 4 }, { name: 'MacOS', stars: 4 },

        { name: 'moment.js', stars: 3 }, { name: 'System.js', stars: 3 }, { name: 'SQLite', stars: 3 }, { name: 'Quercus', stars: 3 }, { name: 'AWS', stars: 3 }, { name: 'Cisco 1 & 2', stars: 3 }, { name: 'Networking', stars: 3 }, { name: 'Ant', stars: 3 }, { name: 'Maven', stars: 3 }, { name: 'GIMP', stars: 3 }, { name: 'JasperReports', stars: 3 }, { name: 'C++', stars: 3 }, { name: 'Tomcat', stars: 3 }, { name: 'Auth2', stars: 3 }, { name: 'JWT', stars: 3 }, { name: 'Angular CLI', stars: 3 }, { name: 'Modernizr', stars: 3 }, { name: 'IE Developer Tools', stars: 3 }, { name: 'Selenium WebDriver', stars: 3 }, { name: 'Bing Maps', stars: 3 }, { name: 'Markdown', stars: 3 }, { name: 'Web SQL', stars: 3 }, { name: 'Python', stars: 3 }, { name: 'Heroku', stars: 3 }, { name: 'UglifyJS', stars: 3 }, { name: 'Fabric', stars: 3 },
    ],
    video: {
        width: 300,
        height: 420,
    }
};
module.exports = obj;
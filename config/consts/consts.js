// REMEMBER TO RUN npm start AGAIN AFTER MODIFYING THIS FILE // TODO add watcher so webpack takes care of this
let obj = {
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
            url: 'http://angularguy.net/ng-invaders',
            video: 'ng-invaders.m4v',
        },
        {
            id: 'angulatris',
            name: 'Tetris',
            url: 'http://angularguy.net/angulatris',
            video: 'angulatris.m4v',
        },
        {
            id: 'solitaire',
            name: 'Solitaire',
            url: 'http://angularguy.net/solitaire',
            video: 'solitaire.m4v',
        },
        {
            id: 'minesweeper',
            name: 'Minesweeper',
            url: 'http://angularguy.net/minesweeper',
            video: 'minesweeper.m4v',
        },
    ],
    video: {
        width: 300,
        height: 420,
    }
};
module.exports = obj;
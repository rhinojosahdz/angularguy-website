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
    ]
};
module.exports = obj;
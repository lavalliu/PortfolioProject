const pages = require('../controllers/pages');

const routes=[
    {
        method: 'GET',
        url: '/pages/allpages',
        handler: pages.getAllPages
    },
    {
        method: 'GET',
        url: '/pages/:id',
        handler: pages.getPage
    },
    {
        method: 'POST',
        url: '/pages/add',
        handler: pages.addPage
    },
    {
        method: 'POST',
        url: '/pages/update/:id',
        handler: pages.updatePage
    },
    {
        method: 'POST',
        url: '/pages/delete',
        handler: pages.deletePage
    },
    {
        method: 'POST',
        url: '/pages/addition',
        handler: pages.addition
    }

]

module.exports=routes;
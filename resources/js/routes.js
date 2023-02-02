import Vue from 'vue'
import VueRouter from 'vue-router'

Vue. use(VueRouter)

//import dei componenti che fungono da Pagine

import AboutUs from './views/pages/AboutUs.vue'


import PostsIndex from './views/pages/posts/PostsIndex.vue'


const router = new VueRouter({
    //Scrivero tutti i miei path per le diverse pagine

    mode: 'history',

    routes: [

        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs,
        },
        {
            // localhost:8000/posts
            path: '/posts',
            name: 'posts',
            component: PostsIndex
        },

    ]


});

export default router;
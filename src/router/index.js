import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import picker from '@/components/picker'
import test from '@/components/test'
import compute from '@/components/compute'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/picker',
            name: 'picker',
            component: picker
        },
        {
            path: '/test',
            name: 'test',
            component: test
        },
        {
            path: '/compute',
            name: 'compute',
            component: compute
        }

    ]
})

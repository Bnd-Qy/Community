import {createRouter,createWebHistory} from 'vue-router' 
import LoginVue from '@/view/Login.vue'
import RegisterVue from '@/view/Register.vue';
import HomeVue from '@/view/Home.vue';
import UserCenterVue from '@/view/UserCenter.vue';
import DetailVue from '@/view/Detail.vue';

const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/login',
            name:'login',
            component:LoginVue
        },
        {
            path:'/register',
            name:'register',
            component:RegisterVue
        },
        {
            path:'/home',
            name:'home',
            component:HomeVue
        },
        {
            path:'/usercenter',
            name:'usercenter',
            component:UserCenterVue
        },
        {
            path:'/detail/:id',
            name:'detail',
            component:DetailVue
        },
        {
            path:'/',
            redirect:'/home'
        }
    ],

})

export default router;
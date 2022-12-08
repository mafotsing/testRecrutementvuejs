import { createRouter, createWebHashHistory } from "vue-router";
import Users from '@cl/views/users'
import Admin from '@cl/views/admin'


const routes = [

    {
        path: '/admin',
        name: 'admin',
        component: Admin.AdminLayout,    
        children: [
          { path: 'employee/index', name: 'employeeList', component: Admin.UserIndex },
          { path: 'employee/edit/:id(\\d+)', name: 'employeeEdit', component: Admin.UserEdit, props: true },
          { path: 'client/index', name: 'clientList', component: Admin.ClientIndex },
          { path: 'client/edit/:id(\\d+)?', name:'clienEdit', component: Admin.ClientEdit, props: true },
          { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' }
        ]
      },
      {
      path: '/users',
      name: 'users',
      component: Users.UsersLayout,    
      children: [
        { path: 'users/index', name: 'uList', component: Users.UserIndex },
        { path: 'users/edit/:id(\\d+)', name: 'uEdit', component: Users.UserEdit, props: true },
        { path: 'users/add', component: Users.UserAdd },
  
       
      ]
    },
    
]

const router = createRouter({
     history: createWebHashHistory(process.env.BASE_URL),
     routes
})
export default router
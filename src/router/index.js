
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Admin from "@/views/Admin";
import Cart from "@/views/Cart";

//Admin Componenets
import New from "@/views/New";
import Products from "@/views/Products";
import Edit from "@/views/Edit";




// Install BootstrapVue

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    // name: "Admin",
    component: Admin,

    children:[
      {
        path: '',
       name: 'Products',
        component: Products
      },
      {
        path: 'new',
        name: 'New',
        component: New
      },
      {
        path: 'edit/:id',
        name: 'Edit',
        component: Edit
      }
    ]

  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

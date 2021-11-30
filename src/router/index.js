import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/todos",
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("../views/Todos.vue"),
  },
  {
    path: "/todo/:id",
    props: true,
    name: "todo",
    component: () => import("../views/Todo.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/Add.vue"),
  },
  {
    path: "/edit/:id",
    props: true,
    name: "edit",
    component: () => import("../views/Edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

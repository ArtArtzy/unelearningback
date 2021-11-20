const routes = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
  {
    path: "/",
    component: () => import("pages/login.vue"),
    name: "login",
  },
  {
    path: "/questionmain",
    component: () => import("pages/questionmain.vue"),
    name: "questionmain",
  },
  {
    path: "/questionnew",
    component: () => import("pages/questionnew.vue"),
    name: "questionnew",
  },
  {
    path: "/questionedit",
    component: () => import("pages/questionedit.vue"),
    name: "questionedit",
  },
  {
    path: "/profile",
    component: () => import("pages/profile.vue"),
    name: "profile",
  },
  {
    path: "/userlist",
    component: () => import("pages/userlist.vue"),
    name: "userlist",
  },
  {
    path: "/admin",
    component: () => import("pages/admin.vue"),
    name: "admin",
  },
  {
    path: "/adminadd",
    component: () => import("pages/adminadd.vue"),
    name: "adminadd",
  },
  {
    path: "/adminedit/:id",
    component: () => import("pages/adminedit.vue"),
    name: "adminedit",
  },
];

export default routes;

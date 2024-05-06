const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") },
      { path: "/personal", component: () => import("src/pages/Personal.vue") },
      { path: "/catalog", component: () => import("src/pages/Catalog.vue") },
      { path: "/cart", component: () => import("src/pages/Cart.vue") },
      { path: "/chat", component: () => import("src/pages/Chat.vue") },
      { path: "/about", component: () => import("src/pages/about.vue") },
      { path: "/auth", component: () => import("src/pages/auth.vue") },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") },
      { path: "/personal", component: () => import("src/pages/personal.vue") },
      { path: "/catalog", component: () => import("src/pages/catalog.vue") },
      { path: "/cart", component: () => import("src/pages/cart.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

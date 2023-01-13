import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import TransactionPage from "./pages/TransactionPage.vue";
import TransactionDetails from "./pages/TransactionDetails.vue";
import NotFoundPage from "./pages/404Page.vue";
const routes = [
  {
    path: "/",
    name: "overview-route",
    component: HomePage,
  },
  {
    path: "/transactions",
    name: "transaction-route",
    component: TransactionPage,
  },
  {
    path: "/transactions/:id",
    name: "transaction-details-route",
    component: TransactionDetails,
  },
  {
    path: "/ts",
    redirect: "/transactions",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;

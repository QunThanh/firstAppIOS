const routesConfig = {
   home: '~/pages/home',
   payment: '~/pages/payment',
};

const routes = [
   { path: routesConfig.home, conponent: Home },
   //should add profile page
   { path: routesConfig.payment, conponent: Payment },
];

export default routes;

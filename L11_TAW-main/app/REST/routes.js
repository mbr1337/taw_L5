import userEndpoint from './user.endpoint';

const routes = function (router) {
    userEndpoint(router);
    postEndpoint(router);
};

export default routes;

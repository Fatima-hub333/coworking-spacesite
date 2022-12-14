import Stories from './pages/stories'

const router = new Navigo(null, true, '#');

export default class RouterHandler {
  constructor() {
    this.createRoutes()
  }
  creareRoutes() {
    const routes = [
      { path: '/', page: Stories },
      { path: '/new', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories }
    ];

    routes.forEach(({path, page}) => {
      router.on(path, () => {
         page(path); 
      }).resolve();
    })
  }
}
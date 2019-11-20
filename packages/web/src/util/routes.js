import Home from '../components/home/Home';
import NotFound from '../components/error/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    page: Home,
  },
  {
    path: null,
    page: NotFound,
  },
];

export default routes;

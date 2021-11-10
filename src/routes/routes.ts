
import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  path      : string;
  component : LazyExoticComponent<JSXComponent> | JSXComponent
  name      : string;
  children? : Route[];
}

// Para renombrar el chunck de hace de esta forma, con comentarios por webpack
const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));

export const routes:Route[] = [
  {
    path: '/lazy',
    name: 'LazyPage-1',
    component: LazyPage1,
  },
  {
    path: '/lazy2',
    name: 'LazyPage-2',
    component: LazyPage2,
  },
  {
    path: '/lazy3',
    name: 'LazyPage-3',
    component: LazyPage3,
  },
];
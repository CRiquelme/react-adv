
import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  path      : string;
  component : LazyExoticComponent<JSXComponent> | JSXComponent
  name      : string;
  children? : Route[];
}

export const routes:Route[] = [
  {
    path      : '/lazyload/*',
    name      : 'Lazyloading Nested',
    component : lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout')),
  },
  {
    path      : '/no-lazy',
    component : NoLazy,
    name      : 'No Lazyloading',
  }
];
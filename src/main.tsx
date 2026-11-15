import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App';
import type { Route } from './config/seo';
import './styles.css';

const root = document.getElementById('root');
if (root) {
  const route = (root.dataset.route ?? '/') as Route;
  hydrateRoot(root, <App route={route} />);
}

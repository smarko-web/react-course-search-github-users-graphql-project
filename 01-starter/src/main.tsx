import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
// import { StrictMode } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
// import Toaster component
import { Toaster } from '@/components/ui/toaster';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
    <Toaster />
  </ApolloProvider>
);

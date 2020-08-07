import React from 'react';
import './app.css';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from 'app/routes';
import Header from 'app/shared/layout/header';
import Footer from 'app/shared/layout/footer';

const baseHref = document
    .querySelector('base')
    .getAttribute('href')
    .replace(/\/$/, '');

export const App = (props: any) => {
    return (
        <Router basename={baseHref}>
            <Header/>
            <main className="container">
                <AppRoutes/>
            </main>
            <Footer/>
        </Router>
    );
};

export default App;

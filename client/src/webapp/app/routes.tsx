import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BeerRecipes from 'app/module/beer-recipes/beer-recipes';

const Routes = () => (
    <div className="mt-175">
        <Switch>
            <Route path="/" exact component={BeerRecipes}/>
        </Switch>
    </div>
);

export default Routes;

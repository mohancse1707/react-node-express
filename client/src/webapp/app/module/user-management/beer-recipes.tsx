/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { IRootState } from 'app/shared/reducers';
import { getAllBeerRecipes, searchBeerRecipes } from './beer-recipes.reducer';
import { IBeerRecipes } from 'app/shared/models/beer-recipes';
import { Badge } from 'reactstrap';
// @ts-ignore
export interface IBeerRecipesProps extends StateProps, DispatchProps, RouteProps, RouteComponentProps<{}> {
}

export interface IBeerRecipesState {
    beersList: IBeerRecipes[];
    showModal: boolean;
    beerName: string;
}

export class BeerRecipes extends React.Component<IBeerRecipesProps, IBeerRecipesState> {

    state: IBeerRecipesState = {
        beersList: [],
        showModal: false,
        beerName: ''
    };

    componentDidMount(): void {
        this.props.getAllBeerRecipes();
    }

    componentDidUpdate(prevProps: IBeerRecipesProps, prevState) {
        if (this.props.beers !== prevProps.beers) {
            this.setState(state => ({ beersList: this.props.beers }));
        }
    }

    onChange = event => {
        const value = event.target.value;
        this.setState(state => ({ beerName: value }));
    };

    searchBeer = () => {
        const { beerName } = this.state;
        if (beerName) {
            this.props.searchBeerRecipes(beerName);
        } else {
            this.props.getAllBeerRecipes();
        }
    };

    render() {
        const { beersList, beerName } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-8"><h4 className="mainHeader">Beer Recipes</h4></div>
                </div>
                <div className=" p-3 bg-white rounded box-shadow border-2x-solid">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Search Beer Recipes </h6>
                    <div className="form-row form-inline">
                        <div className="form-group mt-2 col-md-3">
                            <label className="mr-3">Beer Name</label>
                            <input type="text" className="form-control" name="beerName" value={beerName} onChange={this.onChange} placeholder="Type Beer Name"/>
                        </div>
                        <button type="submit" onClick={this.searchBeer} className="btn-sm mt-2 btn-light">Search</button>
                    </div>

                </div>
                <div className="my-3 p-3 bg-white rounded box-shadow border-2x-solid">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Beer Recipes List ({beersList.length})</h6>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="bg-purple text-nowrap">
                            <tr>
                                <th scope="col">Beer Name</th>
                                <th scope="col">First Brewed</th>
                                <th scope="col">PH Level</th>
                                <th scope="col">Fermentation Method</th>
                                <th scope="col">Tag Line</th>
                                <th scope="col">Food Pairing</th>
                                <th scope="col">Image</th>
                            </tr>
                            </thead>
                            <tbody>
                            {beersList.map((beer, beerIndex) => (
                                <tr key={`value-${beerIndex}`}>
                                    <td className="align-middle p-3">
                                        <output>{beer.name}</output>
                                    </td>
                                    <td className="align-middle p-3">
                                        <output>{beer.first_brewed}</output>
                                    </td>
                                    <td className="align-middle p-3">
                                        <output>{beer.ph}</output>
                                    </td>
                                    <td className="align-middle p-3">
                                        <output>{beer.method.fermentation.temp.value} {beer.method.fermentation.temp.unit}</output>
                                    </td>
                                    <td className="align-middle p-3">
                                        <output>{beer.tagline}</output>
                                    </td>
                                    <td className="align-middle p-3">
                                        {beer.food_pairing
                                            ? beer.food_pairing.map((food, j) => (
                                                <div key={`user-auth-${beerIndex}-${j}`}>
                                                    <output>{food}</output>
                                                </div>
                                            ))
                                            : null}
                                    </td>
                                    <td className="align-middle p-3">
                                        <output><img src={beer.image_url} alt="Logo" height={20} width={20} /></output>
                                    </td>
                                </tr>
                            ))}
                            {beersList.length === 0
                                ?
                                (<tr>
                                    <td colSpan={14} className="message">
                                        No beer(s) found to list. Please refine the search conditions to list the
                                        beer(s).
                                    </td>
                                </tr>) : <></>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (storeState: IRootState) => ({
    beers: storeState.beerRecipesState.beers
});

const mapDispatchToProps = { getAllBeerRecipes, searchBeerRecipes };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(BeerRecipes);

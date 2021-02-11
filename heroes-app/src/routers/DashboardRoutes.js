import React from 'react'
import { NavBar } from '../components/ui/NavBar'
import {Switch, Route,Redirect} from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';
export const DashboardRoutes = () => {
    return (
        <>
          <NavBar></NavBar>  
          <div className="container mt-2">
              <Switch>
                  <Route exact path="/marvel" component={MarvelScreen}></Route>
                  <Route exact path="/hero/:heroId" component={HeroScreen}></Route>
                  <Route exact path="/dc" component={DcScreen}></Route>
                  <Route exact path="/search" component={SearchScreen}></Route>
                  <Redirect to="/marvel"></Redirect>
              </Switch>
          </div>
        </>
    )
}

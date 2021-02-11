import React, { useMemo } from 'react'
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import {HeroCard} from '../heroes/HeroCard';
import {useLocation} from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
export const SearchScreen = ({history}) => {
    const {search} =  useLocation();
    const {q=''} = queryString.parse(search);
    

    const [value, handleInputChange] = useForm({busqueda:q})
    const {busqueda} = value;
    const heroes = useMemo(() => getHeroesByName(q), [q]);
    const heroesFiltered = heroes;
    const handleSubmit = (e)=>{
        e.preventDefault();
        history.push(`?q=${value.busqueda}`);
    };
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-4">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="busqueda" value={value.busqueda} onChange={handleInputChange} placeholder="Find your hero"
                        className="form-control"></input>
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col">
                    <h4>Results</h4>
                    <hr />
                    {
                        heroesFiltered.map(hero=><HeroCard key={hero.id} hero={hero}></HeroCard>)
                    }
                </div>
            </div>
        </div>
    )
}

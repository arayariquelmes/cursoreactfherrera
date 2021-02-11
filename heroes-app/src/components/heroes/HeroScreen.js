import React, { useMemo } from 'react'
import {useParams,Redirect} from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroById';
export const HeroScreen = ({history}) => {
    const {heroId} = useParams();
    const hero = useMemo(() => getHeroeById(heroId), heroId);
    
    if(!hero){
        return <Redirect to="/"></Redirect>
    }
    const handleReturn = ()=>{
        if(history.length <=2){
            history.push('/');
        }
        history.goBack();
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroId}.jpg`} className="img-thumbnail animate__animated animate__fadeIn" alt={hero.superhero} ></img>
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego} </li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher} </li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance} </li>
                </ul>
                <h5>Characters</h5>
                <p>{hero.characters}</p>
                <button
                onClick={handleReturn}
                className="btn btn-outline-info">Return</button>
            </div>
            
        </div>
    )
}

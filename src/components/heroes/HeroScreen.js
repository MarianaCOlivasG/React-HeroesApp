
import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    /* Extrer el parametro de la url */
    const { heroId } = useParams();

    const hero = useMemo(() => getHeroById( heroId ), [ heroId ] ) 
    // const hero = getHeroById( heroId );

    if ( !hero ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if ( history.length <= 2 ){
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const { superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters} = hero;


    return (
        <div className="row mt-5">

            <div className="col-4 animate__animated animate__fadeInLeft">
                <img src={ `../assets/heroes/${ heroId }.jpg` }
                    alt={ superhero } 
                    className="img-thumbnail"/> 
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>Fist appearance: </b>{ first_appearance }</li>
                </ul>

                <hr/>

                <h5>Characters</h5>
                <p>{ characters }</p>

                <button onClick={ handleReturn } 
                    className="btn btn-outline-primary" >
                    Return
                </button>
            </div>

        </div>
    )
}

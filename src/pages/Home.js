import React from 'react'
//import { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter';
//import { CounterContext } from '../context/CounterContext'


//refatorando co context com hook
import { useCounterContext } from '../hooks/useCounterContext';

// context complexo 
import { useTitleColorContext } from '../hooks/useTitleColorContext';


const Home = () => {
    //Const { counter } = useContext(CounterContext);

    const { counter } = useCounterContext();

    //Context mais complexo
    const {color, dispatch} = useTitleColorContext();

    //alterando o state complexo
    const setTitleColor = (color) => {
      dispatch({ type:color});
    }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador {counter}</p>

        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
        <ChangeCounter/>

    </div>

  )
}

export default Home
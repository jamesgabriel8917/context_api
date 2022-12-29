import React from 'react'
//import { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter';
//import { CounterContext } from '../context/CounterContext'


//refatorando co context com hook
import { useCounterContext } from '../hooks/useCounterContext';



const Home = () => {
    //Const { counter } = useContext(CounterContext);

    const { counter } = useCounterContext();

    //Context mais complexo
    //const {color} = useTitleColorContext();
    //style={{color: color}}
  return (
    <div>
        <h1>Home</h1>
        <p>Valor do contador {counter}</p>
        <ChangeCounter/>

    </div>

  )
}

export default Home
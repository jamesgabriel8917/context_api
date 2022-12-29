import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {

    const context = useContext(CounterContext)

    if(!context){
        console.error("contexto nao encontrado")
    }

    return context;
}
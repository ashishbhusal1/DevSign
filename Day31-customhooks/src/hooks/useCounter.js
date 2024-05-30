import React from 'react'

function useCounter() {
    const[Counter,setCounter]=useState();
  const Increment=()=>{
    setCounter(counter=>counter +=1);
    const Decrement=()=>{
        setCounter(counter=>counter -=1);
  }
  return [Counter,Increment,Decrement]
}

export default useCounter
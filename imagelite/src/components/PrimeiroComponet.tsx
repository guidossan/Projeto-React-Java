'use client'

export function PrimeiroComponent(){

    function handleClick(){
        console.log("clique aqui")
       
    }
    return (
        <div>
            Meu primeiro componente
            <button onClick={handleClick}>Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return(
        <h2>ArrowFunction</h2>
    )
}
import {PrimeiroComponent, ArrowFunction} from '../components/PrimeiroComponet'

export default function Home() {
  return (
    <>

    <PrimeiroComponent 
            menssagem='Olá gay'
            menssagemDoBotao='menssagem do botao'/>
    <ArrowFunction />
    <PrimeiroComponent 
            menssagem='segundo componente'
            menssagemDoBotao='clicaram em min'/>
    <ArrowFunction />

    </>
  )
}

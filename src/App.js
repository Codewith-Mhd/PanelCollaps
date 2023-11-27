import { useState } from "react"; 
import "./styles.css";

const Panel = ({
  title,isActive,
  onShow,children
})=>{
  return (
    <section className="panel">
       <h2>{title}</h2>
       { isActive ? (
         <p>{ children }</p>
       ):(
         <button onClick={ onShow }>Show</button>
       ) }
    </section>
  );
  
}

function Accordion (){
  const [activeIndex,setActiveIndex] = useState(0);

  return (
    <>
      <h3>Almaty, Afghanistan</h3>
      <Panel title="About"
      isActive={ activeIndex ===0 } 
      onShow={()=> setActiveIndex(0) }>
        With the population of about 2 million, almaty Afghanistan 
        kabul is Afghanistan's biggest city 
        , from 1999 to 2023,
      </Panel>

      <Panel title="Kabul"
      isActive={activeIndex === 1} 
      onShow={()=> setActiveIndex(1) }>
        The name come from <span lang="kb"></span>
         the kabul words come to it 
         and this word is like Kabul 
      </Panel>


    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

import React, { FormEvent, useState, ChangeEvent } from 'react';

//useAlgumaCoisa
//WEB Component funcao -> renderizacao
function App() {
  
  console.log('renderizou');

  const [name, setName] = useState<string>("Luiz Carlos"); //Luiz Carlosaaaaa
  //Array [valor, setValor]
  

  function onSubmit(event: FormEvent){
      event.preventDefault();
      alert('Form submetido')
  }

  function onChange(event: ChangeEvent<HTMLInputElement>){
      setName(event.target.value);
  }
  
  return (
    <div>
      <h1>Iniciando com o React</h1>
      <form onSubmit={onSubmit}>
         <p>
           <label htmlFor="name">Nome:</label>
           <input type="text" id="name" value={name} onChange={onChange}/>
         </p>
         <p>
           {name}
         </p>
         <p>
           <button type="submit">Enviar</button>
         </p>
      </form>
    </div>
  );

}

//Angular

//funcao - component

//component - class


//?

//funcao - component - não como lidar estado - stateless

//component - class - stateful - estado

//React 16 - React Hooks - funcao component stateful

export default App;

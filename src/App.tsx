import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { TableRow, Http } from './http';

//useAlgumaCoisa
//WEB Component funcao -> renderizacao


function App() {
  
  console.log('renderizou');

  const [name, setName] = useState<string>("Luiz Carlos");
  const [search, setSearch] = useState<string>("");
  const [tableData, setTableData] = useState<TableRow[]>([]);

  //useDebounce - terceiros

  useEffect(() => {
    /*(async () => {
      //olhar se o componente não foi destruido
      const data = await Http.get();
      setTableData(data)
    })();*/
    
    Http.get(search)
        .then(data => {
          console.log('executou o http');
          setTableData(data)
        });

  }, [search]);
  // [] - só executa na primeira renderização
  // sem deps - a cada mudança de qualquer state ou props
  // [deps] - a cada mudança dos deps


  //Array [valor, setValor]
  console.log(tableData);

  function onSubmit(event: FormEvent){
      event.preventDefault();
      setTableData([...tableData, {name}]);
  }
  
  function onChangeName(event: ChangeEvent<HTMLInputElement>){
      setName(event.target.value);
  }

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>){
      setSearch(event.target.value)
  }
  
  return (
    <div>
      <h1>Iniciando com o React</h1>
      <form onSubmit={onSubmit}>
         <p>
           <label htmlFor="name">Nome:</label>
           <input type="text" id="name" value={name} onChange={onChangeName}/>
         </p>
         <p>
           {name}
         </p>
         <p>
           <button type="submit">Enviar</button>
         </p>
      </form>
      <h3>Listagem de nomes</h3>
      <table>
        <thead>
          <tr>
            <td>
              <input type="text" value={search} onChange={onChangeSearch}/>
            </td>
          </tr>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((row, key) => (
              <tr key={key}>
                <td>{row.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );

}

//Angular

//funcao - component

//component - class


//?

//funcao - component - não como lidar estado - stateless

//component - class - stateful - estado 

//component life cycle - nascer/iniciado - processar mudanças states - morrer/destruído

//React 16 - React Hooks - funcao component stateful

export default App;

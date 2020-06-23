
export interface TableRow{
    name: string;
}

const data: TableRow[] = [
    {name: 'Fulano da Silva'},
    {name: 'Cicrano da Silva'},
    {name: 'Beltrano da Silva'},
];

export class Http {

    static get(search: string): Promise<TableRow[]>{
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    search === "" 
                    ? data
                    : data.filter(
                        //d => d.name.toLowerCase() === search.toLowerCase()
                        d => d.name.toLowerCase().includes(search.toLowerCase())
                    )
                );
            }, 1000);
        })
    }
}
//setTimeout -> depois tempo em milisegundos
//setInterval -> um certo intervalo de tempo - ciclico
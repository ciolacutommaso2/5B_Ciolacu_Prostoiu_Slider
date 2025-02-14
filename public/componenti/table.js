export const createTableComponent = (parentElementIn, pubsub) => {

    let data = [];
    const parentElement = parentElementIn;

    let templateRow = `
        <li class="list-group-item"><img src=".%URL"></img></li>
    `;


    
    return {
        togliDati: (inizio, fine) => {data.splice(inizio, fine)}, 
        
        setData: (datoIn) =>{
            data=datoIn;
        },
        
        avanti:()=> {if ((inizioIndex + 5) <= data.length) {inizioIndex += 5}},
        indietro:()=> {if ((inizioIndex - 5) >= 0) {inizioIndex -= 5}},
        reset_inizio: () => {inizioIndex=0},
        dati_filtro: (new_Data) => {data2=new_Data},
        setTipo: (tip)=>{tipo=tip;},
        
        exportData: () => {return data;},
        
        render: () => {
            let html = "";
            data.forEach((dato) => {
                console.log(dato.name)
                let riga = templateRow.replace("%URL", dato.name);
                html += riga
            })

            parentElement.innerHTML = html;
        },
    }
};

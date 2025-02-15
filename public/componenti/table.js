export const createTableComponent = (parentElementIn, pubsub) => {

    let data = [];
    const parentElement = parentElementIn;

    let templateRow = `
        <div class="carousel-item #TEST">
            <img src=".%URL"></img>
        </div>
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
            let i = 0;
            data.forEach((dato) => {
                let riga = templateRow.replace("%URL", dato.name);
                riga = riga.replace("#TEST", i ==0 ? "active" : "");
                html += riga
                i++;
            })

            parentElement.innerHTML = html;
        },
    }
};

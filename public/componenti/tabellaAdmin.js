export const createTableAdmin = (parentElement1) => {
    let data= [];
    let tipo="";
    let templateRow = `
        <tr class="tbl1">
            <td class = "border border-slate-600" ><img src=".%URL"></img></td>
            <td class = "border border-slate-600" >#D2</td>
        </tr>        
    `;
    let parentElement = parentElement1;

    return { 
        setData: (dato) =>{
            data=dato;
            console.log(dato);
        },
        render: (pubsub) => {
            
            console.log("DATI: ", data)
            if (parentElement){
                parentElement.innerHTML = "";
            }
            let html = `
                    <table>
                    <tr class="table-light">
                        <th scope="col">Immagine</th>
                        <th scope="col">Elimina</th>
                    </tr>`
                
            
            
            let templateBtn = 
            `<button type="button" class="btn btn-danger btn-sm btnAdminElimina" id="eliminaBtn#N1" >Elimina posto</button>
                        `
            
            //INSERIMENTO HTML
            console.log(data)
            for (let i = 0; i < data.length; i++) {

                html += templateRow.replace("%URL", data[i].name);
                let t = templateBtn.replace("#N1", i);
                html = html.replace("#D2", t);
            }
            html += "</table>";
            parentElement.innerHTML = html;
            //-
            

            //CREAZIONE BOTTONI
            for (let i = 0; i < data.length; i++) {
                //Elimina
                document.getElementById(("eliminaBtn" + i)).onclick = () => {
                    pubsub.publish("Elimina_foto" , data[i].id );
                }

            }  
        
    }
}};

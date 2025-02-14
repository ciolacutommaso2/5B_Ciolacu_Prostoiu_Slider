const formDiv = document.getElementById("formdiv");
const inputFile = document.querySelector('#file');
const button = document.querySelector('#buttonUpload');
const listimgDiv = document.querySelector('#listimgDiv');

import {createFormComp} from './componenti/form.js';
import {createNavigator} from "./componenti/navigator.js";
import {generatePubSub} from "./componenti/pubsub.js";
import {createTableComponent} from "./componenti/table.js"

const createMiddleware = () => {
    return {
        load: async () => {
            const response = await fetch("/get");
            const json = await response.json();
            return json;
        },
        delete: async (id) => {
            const response = await fetch("/delete/" + id, {
                method: "DELETE",
            });
            const json = await responde.json();
            return json
        },
        upload: async (inputFile) => {
            const formData = new FormData();
            formData.append("file", inputFile.files[0]);
            const body = formData;
            const fetchOptions = {
                method: "post",
                body: body
        };
        try {
            const res = await fetch("/upload", fetchOptions);
            const data = await res.json();
            console.log(data);
        } catch (e) {
            console.log(e);
        }
        }
        }
}


fetch("./conf.json").then(r => r.json()).then(conf => {
    const pubsub = generatePubSub();
    const navigator = createNavigator(document.querySelector("#container"));
    const formComp = createFormComp(formDiv)
    const middleware = createMiddleware();
    const tableComp = createTableComponent(listimgDiv, pubsub);
    middleware.load().then((r) => {tableComp.setData(r); tableComp.render()});

    pubsub.subscribe("carica-dati-list", (dati) => {
        tableComp.setData(dati);
        tableComp.render();
        console.log("Dati caricati sulla lista");
    });
    pubsub.subscribe("renderList", () => {
        tableComp.render();
        console.log("Lista renderizzata");
    })

    
    const handleSubmit = async (event) => {
        await middleware.upload(inputFile);
        const list = await middleware.load();
        pubsub.publish("renderList");
    }


    button.onclick = handleSubmit;
    middleware.load().then(
        r => pubsub.publish("carica-dati-list", r)        
    );
    

    
})

const controller = async (middleware) => {
    button.onclick = handleSubmit;
}





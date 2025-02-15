export const createLogin=(fileconf)=>{
    let conf = fileconf;
    sessionStorage.setItem("login", "false");
    return{
        login:(nome,password)=>{
            return new Promise((resolve, reject) => {
                fetch("https://ws.cipiaceinfo.it/credential/login", { 
                  method: "POST",
                  headers: {
                     "content-type": "application/json",
                     "key": conf["cacheToken"]
                  },
                  body: JSON.stringify({
                     username: nome,
                     password: password
                  })
                })
                .then(r => r.json())
                .then(r => {
                    console.log(r.result)
                     resolve(r.result); 
                  })
                .catch(reject);
              })
        },
        sessionstorage:()=>{
            sessionStorage.setItem("login", "true");
            console.log("sessionstorage");
        },
        render:(bottone_aggiungi)=>{
            console.log(bottone_aggiungi)
            bottone_aggiungi.classList.remove("d-none");
        }
    }
}
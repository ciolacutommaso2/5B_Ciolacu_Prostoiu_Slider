const controller = async (middleware) => {
    const inputFile = document.querySelector('#file');
    const button = document.querySelector('#button');
    const listUL = document.querySelector('#listUL');

    handleSubmit = async (event) => {
        await middleware.upload(inputFile);
        const list = await middleware.load();
        render(list);
    }
    button.onclick = handleSubmit;
}

const createMiddleware = () => {
    return {
        load: async () => {
            const response = await fetch("/images/");
            const json = await response.json();2
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



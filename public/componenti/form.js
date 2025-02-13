export const createFormComp = (parentElement, pubsub) => {
    const parentElement = parentElement;
    return {
        render: () => {
            let html = 
            `<form class="container-fluid">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Select image</label>
                    <input class="form-control" type="file" id="formFile" accept="image/*">
                </div>
                
                <div id="resultLabel" class="form-text text-danger text-center"></div>
            </form>
                            ` ;
            parentElement.innerHTML = html;
        }
    }
}
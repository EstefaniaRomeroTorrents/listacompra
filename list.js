
const arr = JSON.parse(localStorage.getItem('element'));
arr.forEach(element => {
    printElement(element)
});

function setFocusToTextBox() {
    document.getElementById("element").focus();
}

function addToList() {
    // console.log("addToList");
    const product = document.getElementById("element");
    let convert = [];
    let guardat = localStorage.getItem('element');

    if(guardat !== null){
        convert = JSON.parse(guardat);
    }
        
    

    if (!product.value) {
        return   
    }
    convert.push(product.value);
    localStorage.setItem('element', JSON.stringify(convert));
    printElement(product.value)

    document.getElementById("element").value = "";
    setFocusToTextBox();
    
}
function deleteAll(id) {
    let element = document.getElementById(id);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

}

function editElement(id) {
    // console.log("editElement");
    let element = document.getElementById(id);
    const product = element.textContent.trim();
    const newValue = prompt(`Estas modificando el producto '${product}'`);
    if (newValue) element.childNodes[1].textContent = newValue ;
}

function deleteElement(id) {
    //console.log("deleteElement");
    document.getElementById(id).remove();
}

function printElement(eat){

    let list = document.getElementById("list");

    const i = Math.floor(Math.random() * 1000000000);

    list.innerHTML += `
        <li id="${i}" class="myFlex divTrash">
            <div>${eat}</div>
            <div>
                <button class="myButton" onclick="editElement(${i})">
                    <svg class="svgTrash" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"fill="#000000">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    </svg>
                </button>
                <button class="myButton" onclick="deleteElement(${i})">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                </button>
            </div>
        </li>`;
}
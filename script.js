let writeUp = document.querySelector("#writeUp");
let node = document.querySelector("#node");
writeUp.addEventListener("submit", function (e) {
    e.preventDefault();
    if (writeUp.node.value == '') {
        alert("Write Somehing")
    }
    else{
        let text = document.createElement("h1");
        document.querySelector("form").appendChild(text);
        text.textContent = writeUp.node.value
    }
})
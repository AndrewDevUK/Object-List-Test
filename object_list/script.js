class Item {
    title;
    body;

    constructor (itemTitle, itemBody){
        this.title = itemTitle;
        this.body = itemBody;
    }
}

var items = [];

window.onload = ()=>{
    document.getElementById("title").focus();
}

document.getElementById("title").onkeyup = (event)=>{
    event.preventDefault();
    if(event.key == "Enter"){
        document.getElementById("body").focus();
    }
}

document.getElementById("body").onkeyup = (event)=>{
    event.preventDefault();
    if(event.key == "Enter"){
        document.getElementById("addItem").onclick();
    }
}

document.getElementById("addItem").onclick = ()=>{
    var title = document.getElementById("title");
    var body = document.getElementById("body");

    if(title.value != "" && body.value != ""){

        var style;

        if((items.length % 2) == 0){
            style = "style='margin: 5px 50px 5px 5px; background-color: rgb(51, 153, 255);'";
        } else{
            style = "style='margin: 5px 5px 5px 50px; background-color: rgb(51, 204, 51);'";
        }

        items.push(new Item(title.value, body.value));

        document.getElementById("container").innerHTML += "<div class='card' " + style + "><h2>" + title.value + "</h2><p>" + body.value + "</p></div>";

        title.value = "";
        body.value = "";
        document.getElementById("title").focus();

        console.log(items);
    }
}

document.getElementById("clearItems").onclick = ()=>{
    items = [];

    document.getElementById("container").innerHTML = "";
    title.value = "";
    body.value = "";

    document.getElementById("title").focus();
}
function createElements(){
    let ele= document.createElement('h1');
    let eleNode= document.createTextNode("HELOOOOOOOOOO!!!!!!!!!!!!!!");
    ele.appendChild(eleNode);
    document.body.appendChild(ele);



    let ele1= document.createElement('div');
    let eleNode1= document.createTextNode("Content of DIV element");
    ele1.appendChild(eleNode1);
    document.body.appendChild(ele1);
}
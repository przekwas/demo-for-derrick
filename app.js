let h1 = document.createElement('h1'); //create an h1
let h1Text = document.createTextNode('Hello World!'); //create textNode
h1.append(h1Text); //append the text and element together
document.body.append(h1); //append the <h1> to the body

h1.style.color = 'red'; //add a style="color: red;" to the <h1>
h1.className = 'p-5'; //add a class="p-5" to the <h1>
h1.id = 'custom-text'; //add an id="custom-text" to the <h1>
h1.addEventListener('click', function() { //add a "click" event listener to the <h1>
    h1.style.backgroundColor = '#0091ea'; //change the background color of the <h1> only when it's clicked
});


let myButton = document.createElement('button'); //create a button
let myButtonText = document.createTextNode('Click me to Alert!'); //create text for the button
myButton.append(myButtonText); //append the text and the button together
document.body.append(myButton); //append the <button> to the body
myButton.classList = 'btn btn-primary m-3 p-3'; //add class="btn btn-primary m-3 p-3" to the <button>

let number = 0; //a javascript variable to keep track of our list items

myButton.addEventListener('click', function() { //add a "click" event listener to the <button>

    if(number > 3) { //prevent us from adding more than 3 <li>
        alert('Out of items!');
        return;
    }
    
    let li = document.createElement('li'); //create a list item
    let liText = document.createTextNode('This is number: ' + number); //create the text for the <li> including what # it is
    number++; //increment the number variable by 1
    li.append(liText); //append the text to the <li>
    let ul = document.getElementsByClassName('list-group')[0]; //select the <ul> in the HTML body, getElementsByClassName returns an array, so we use [0] to reference my one <ul>
    ul.append(li); //append the <li> into the <ul>
    li.className = 'list-group-item'; //add class="list-group-item" to the <li>
    
    li.addEventListener('click', function() { //add a "click" event listener to the <li>
        li.style.backgroundColor = 'lightgreen'; //change the background color when you click the <li>
    });

    li.addEventListener('mouseover', function() { //add a "mouseover" event listener to the <li>
        console.log("You've hovered over the li!"); //console log this message when you mouseover a <li>
    });

});




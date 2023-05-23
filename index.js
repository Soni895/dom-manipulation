

// fatch element by id

print=function ()
{
    console.log("event listner hare") ;
}
// let heading = document.querySelector('h1');
// heading.log(heading);

// way 1

// document.addEventListener('click',function()
// {
//     print();
// });


// way2
// document.addEventListener('click',function()
// {
//     console.log("hi darshan soni");
// });


// way3
document.addEventListener('click',print);
// var classname = document.getElementsByClassName("name");

// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };

// classname.addEventListener('click', myFunction, false);


function print()
{

    console.log("hi darshan soni");
}
// const content=document.querySelector(".Name");
// content.addEventListener('click',function(event)
// {
//     console.log(event);
// });

// remove listner 

document.removeEventListener('click',print);


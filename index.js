

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

// the default action
let alltag=document.querySelectorAll("a");
let tag=alltag[2];
// tag.addEventListener('click',function(event)
// {
//     event.preventDefault();
//     console.log("not allowed illegal action deny");

// });

// content.addEventListener('click',function(event){event.preventDefault();
//      console.log("not allowed illegal action deny")});




// function para_print(i)
//     {
//         console.log("inside the event listner",i);
//     }

    function para_print1(event)
    {
        console.log("inside the event listner"+event.target.textContent);
    }


    let mydiv=document.createElement("div");
//    add listner to div
mydiv.addEventListener('click',para_print1);


for(let i=0;i<100;i++)
{
    let para=document.createElement('p');
    para.textContent="this is para no:-"+i;

     // add listner to para;

    para.addEventListener('click',function(){
    para_print(i)});
    mydiv.appendChild(para);

}
document.body.appendChild(mydiv);
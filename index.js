

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
// document.addEventListener('click',print);
// var classname = document.getElementsByClassName("name");

// var myFunction = function() {
//     var attribute = this.getAttribute("data-myattribute");
//     alert(attribute);
// };

// classname.addEventListener('click', myFunction, false);


// function print()
// {

//     console.log("hi darshan soni");
// }
// const content=document.querySelector(".name");
// content.addEventListener('click',function(event)
// {
//     console.log(event);
// });

// remove listner 

// document.removeEventListener('click',print);

// the default action
let alltag=document.querySelectorAll("a");
// let tag=alltag[2];
// tag.addEventListener('click',function(event)
// {
//     event.preventDefault();
//     console.log("not allowed illegal action deny");

// });
for(let i=0;i<alltag.length;i++)
{
alltag[i].addEventListener('click',function(event){event.preventDefault();
     console.log("not allowed illegal action deny");
     console.log(event.target.textContent);
     console.log(typeof alltag);});
    

}







// little optimize

// function para_print(i)
//     {
//         console.log("inside the event listner",i);
//     }

    function para_print1(event)
    {
        if(event.target.nodeName!=="SPAN"){
            console.log(event.target.textContent);
            return;
        }
     
        


        
    }


    let mydiv=document.createElement("div");
//    add listner to div
mydiv.addEventListener('click',para_print1);


for(let i=0;i<5;i++)
{
    let para=document.createElement('p');
    para.textContent="this is para no:-"+i;

     // add listner to para;

//     para.addEventListener('click',function(){
//     para_print(i);
// });
    mydiv.appendChild(para);

}
for(let i=0;i<5;i++)
{
    let para_tag=document.createElement('p');
    para_tag.textContent="inside the P tag ";
    let span_tag=document.createElement('span');
    span_tag.textContent="inside the SPAN tag";
    para_tag.appendChild(span_tag);
    mydiv.appendChild(para_tag);
    


}
document.body.appendChild(mydiv);


// speed mesure

let t1=performance.now();
for(let i=0;i<5;i++)
{
    let para=document.createElement('p');
    para.textContent="hi darshan soni"+1;
    document.body.appendChild(para);
}

let t2=performance.now();
let ans1=t2-t1;
console.log(t2-t1);

let div=document.createElement('div');
console.log("little optimize");
let t3=performance.now();
for(let i=0;i<5;i++)
{
    let para=document.createElement('p');
    para.textContent="hi darshan soni"+1;
    div.appendChild(para);
    
}
document.body.appendChild(div);
let t4=performance.now();
let ans2=t4-t3;
console.log(t4-t3);

//   using DocumentFragment

let t5=performance.now();
let  fregment=document.createDocumentFragment();

for(let i=0;i<5;i++)
{
    let para=document.createElement('p');
    para.textContent="hi kake"+i;
    fregment.appendChild(para);
    
}
document.body.appendChild(fregment); //single reflow and single repaint
let t6=performance.now();
let ans3=t6-t5;
// or optimize
console.log(ans3);
let arr=[];
arr.push(ans1,ans2,ans3);
console.log(arr);
console.log(Math.min(...arr));

// js is a single threading lanuage

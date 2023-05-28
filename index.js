

// fatch element by id

// print=function ()
// {
//     console.log("event listner hare") ;
// }
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
// let alltag=document.querySelectorAll("a");
// // let tag=alltag[2];
// // tag.addEventListener('click',function(event)
// // {
// //     event.preventDefault();
// //     console.log("not allowed illegal action deny");

// // });
// for(let i=0;i<alltag.length;i++)
// {
// alltag[i].addEventListener('click',function(event){event.preventDefault();
//      console.log("not allowed illegal action deny");
//      console.log(event.target.textContent);
//      console.log(typeof alltag);});
    

// }







// // little optimize

// // function para_print(i)
// //     {
// //         console.log("inside the event listner",i);
// //     }

//     function para_print1(event)
//     {
//         if(event.target.nodeName!=="SPAN"){
//             console.log(event.target.textContent);
//             return;
//         }
     
        


        
//     }


//     let mydiv=document.createElement("div");
// //    add listner to div
// mydiv.addEventListener('click',para_print1);


// for(let i=0;i<5;i++)
// {
//     let para=document.createElement('p');
//     para.textContent="this is para no:-"+i;

//      // add listner to para;

// //     para.addEventListener('click',function(){
// //     para_print(i);
// // });
//     mydiv.appendChild(para);

// }
// for(let i=0;i<5;i++)
// {
//     let para_tag=document.createElement('p');
//     para_tag.textContent="inside the P tag ";
//     let span_tag=document.createElement('span');
//     span_tag.textContent="inside the SPAN tag";
//     para_tag.appendChild(span_tag);
//     mydiv.appendChild(para_tag);
    


// }
// document.body.appendChild(mydiv);


// // speed mesure

// let t1=performance.now();
// for(let i=0;i<5;i++)
// {
//     let para=document.createElement('p');
//     para.textContent="hi darshan soni"+1;
//     document.body.appendChild(para);
// }

// let t2=performance.now();
// let ans1=t2-t1;
// console.log(t2-t1);

// let div=document.createElement('div');
// console.log("little optimize");
// let t3=performance.now();
// for(let i=0;i<5;i++)
// {
//     let para=document.createElement('p');
//     para.textContent="hi darshan soni"+1;
//     div.appendChild(para);
    
// }
// document.body.appendChild(div);
// let t4=performance.now();
// let ans2=t4-t3;
// console.log(t4-t3);

// //   using DocumentFragment

// let t5=performance.now();
// let  fregment=document.createDocumentFragment();

// for(let i=0;i<5;i++)
// {
//     let para=document.createElement('p');
//     para.textContent="hi kake"+i;
//     fregment.appendChild(para);
    
// }
// document.body.appendChild(fregment); //single reflow and single repaint
// let t6=performance.now();
// let ans3=t6-t5;
// // or optimize
// console.log(ans3);
// let arr=[];
// arr.push(ans1,ans2,ans3);
// console.log(arr);
// console.log(Math.min(...arr));

// // js is a single threading lanuage
// // js is synchronous
// // call stack

// function create_element()
// {
//     let content=document.createElement("p");
//     content.textContent='hi darshan';
//     document.body.appendChild(content);
//     return content;
// }
// function create_element1(i)
// {
//     let content1=document.createElement("p");
//     let content2=document.createElement("p");
//     content1.textContent='hi kumar';
//     content2.textContent='hi puneet HI';
//     document.body.appendChild(content1);
//     document.body.appendChild(content2);
//     if(i==1)
//     return [content1,content2];
//     else
//     {
//         return [content2];

//     }
// }

// let content=create_element();
// console.log("after invoke create_element");
// console.log(content.textContent);
// let [content1,content2]=create_element1(1);
// let [content3]=create_element1(0);
// console.log("single content")
// console.log(content3.textContent);

// console.log("after invoke create_element1");
// console.log(content1.textContent,content2.textContent);


// settimeout

// setTimeout(() => {
//     console.log("hi darshan soni");
    
// }, 1000);









// asynchronous

// let promise1= new Promise(function(resolve,reject)
// {
//     setTimeout(function() {
//         console.log("inside promise1");
        
//     }, 3000);
//     resolve("sussesfully executed");
// });
// console.log(promise1);
// let promise2= new Promise(function(resolve,reject)
// {
//     setTimeout(function() {
//         console.log("inside promise 2");
        
//     }, 5000);
//     // resolve("sussesfully executed");
//     reject("unsuccessfull execution");
    

// });
// console.log(promise2);

// let promise3= new Promise(function(resolve,rejection)
// {
//     setTimeout(function() {
//         console.log("inside promise 3");
        
//     }, 5000);
//     // resolve("sussesfully executed");
//     rejection(new Error("unsuccessfull execution"));


// });
// console.log(promise3);


// then and catch

// promise3.then((value)=>{
//    console.log(value);

// }
// );


// promise3.catch(error=>{console.log (new Error("unsuccessfull execution"))});
// promise3.catch(function(error)
// {
//     console.log(new Error("unsuccessfull execution")); 
// });


// promise3.then(successfully executed,error)   generagl syntax not acode

// promise3.then(
//     value=>
// {
//     console.log(value);
 
//  },
// error=>{console.log (new Error("unsuccessfull execution"))},
//  );


//  multiple promise


// let promise=new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         console.log("hi darshan inside promise");
        
//     }, 2000);
//     resolve("successfull promise");
// });
// let output=promise.then((value)=>{
//     console.log(value);
//     let promise1=new Promise(function(resolve,reject)
// {
//     setTimeout(() => {
//         console.log("hi darshan inside promis1");
        
//     }, 2000);
//     resolve("successfull promise1");
//     return promise1;
    

// }
//     );

// });
// output.then(value=>console.log("output value is"+value));



async function print()
{
    console.log("async fun call");
  return "darshan soni";
  
}
print();



  async function delay()
{
    setTimeout(() => {
        console.log("before time out");

        
    }, 2000);
    console.log("hi darshan soni");
 setTimeout(() => {
    console.log("after time out");
    
}, 2000);
}

delay();




// async and await keyword

async function get_temp()
{

  let DM=new Promise(function(resolve,reject){
    setTimeout(()=> {
        resolve("delhi temp is 45 deg");
} ,1000);

});
let hyd=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hyderabad temp is 30 deg");
    },1000);
});
let  delhi_temp= await DM;
let  Hyderabad_temp= await hyd;
return [delhi_temp,Hyderabad_temp];
}

let [result1,result2]=get_temp();
 console.log( resull1,result2);


// // fetch api
async function api()
{
let api= await fetch("https://api.coinbase.com/v2/currencies");
let content=await api.text();
console.log(content);
}
api();

// fetch('https://jsonplaceholder.ir/users', {
//   method: 'GET',
// })
//   .then(response => response.json())
//   .then(json => console.log(json))




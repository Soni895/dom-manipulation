

// fatch element by id

function print()
{
    console.log("event listner hare") ;
}
let heading = document.querySelector('h1');
console.log(heading);
document.addEventListener('click',function()
{
    print();
});
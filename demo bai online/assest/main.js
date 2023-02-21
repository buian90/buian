// let btnClick = document.querySelector(".btn-click");
// btnClick.addEventListener("click", function handleClick() {
//     setTimeout(function(){

//     },4000);
    
// })

function task1 (name, work){
    console.log(`bat dau cong viec ${name}`);
    setTimeout(function (){
     work();
    },3000);
}


function task2 (name, work){
    console.log(`bat dau cong viec ${name}`);
    setTimeout(function(){
        work()
    },4000)
}


function task3 (name, work){
    console.log(`bat dau cong viec ${name}`);
    setTimeout(function(){
        console.log(work);
    },5000)
}


task1("lam bai tap", function(){
    task2("da bong", function(){
    task3("nau com", "ket thuc")
})
})
const test = (first, second) =>{
    const value = first();
    second(value); 
}


function first(){
    console.log("나 first 실행중")
    return "test";
}

function second(x){
    console.log("나는 second");
    console.log("매개변수 : " +x);
}


test(first, second);


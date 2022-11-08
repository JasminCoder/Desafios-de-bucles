for(var i=1; i<=20; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}


for(var i=100; i>0; i--){
    if(i%3 == 1){
    console.log(i);
    }
}


for(var i=4; i>=-3.5; i-=1.5){
    console.log(i);
}

var sum = 0;
for(var i=1; i<=100; i++){
    sum = sum + (i);
    if(i!== 100){
    console.log(i + " + " );   
    }
    else if(i = 100){
        console.log(i);
    }
}
console.log(sum);


var product = 1;
for(var i=1; i<=12; i++){
    product = product * (i);
    if(i!== 12){
    console.log(i+ "*");   
    }
    else if(i = 12){
        console.log(i);
    }
}
console.log(product);

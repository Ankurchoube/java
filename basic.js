// // //var color="red";
// // // var color="yellow";
// // // var color="green";

// // // if(color=="red"){
// // //     console.log("stop");
// // // }
// // // else if(color=="yellow"){
// // //     console.log("ready to go");
// // // }
// // // else if(color=="green"){
// // //     console.log("Good to go");
// // // }
// // // else{
// // //     console.log("No entry is open");
// // // }


// // // const day = 8;

// // // if(day == 1){
// // //   console.log("Sunday");
// // // }else if(day == 2){
// // //   console.log("Monday");
  
// // // }else if( day == 3){
// // //   console.log("Tuesday");

// // // }else if(day == 4){
// // //   console.log("Wednesday");
// // // }else if(day == 5){
// // //   console.log("Thursday");
  
// // // }else if(day == 6){
// // //   console.log("Friday");

// // // }else if(day == 7){
// // //   console.log("Saturday")
// // // }else{
// // //   console.log("Please Enter num between 1 to 7")
// // // }

// // // ===========================================Traffic Rule Based Question====================
// // // const color = "aqua";

// // // if(color == "red"){
// // //     console.log("stop");
// // // }else if(color == "yellow"){
// // //     console.log("ready");
// // // }else if(color == "green"){
// // //     console.log("go");
// // // }else{
// // //     console.log("No Entery is open");
// // // }

// // // =============================
// // const input = "12345678";
// // const input2 = "Ankur";
// // let password = "12345678";
// // let userName = "Ankur";
// // if (input === password && input2 === userName){
// //     console.log("Login Successfull");
// // } else{
// //     console.log("password is not match");

// // }



// // ------ loop----------
// -------table with symblo

// for(let i=1;i<=20;i++)
// {
//     console.log("Table of "+i)
//     for(j=1;j<=10;j++)
//        {
//         console.log(`${i} x ${j} = ${i*j}`);
//        }
//    console.log(" ");
// }


// const fullname="radherani";

// for(let i = 0; i <= fullname.length - 1 ;i++)
// {
//     console.log(fullname[i]);
// }
// ===================================
// for(let i=10; i>=1; i--)
// {
//     console.log(i);
// }

// ============================
 const fullname="madam";
 let reversename ="";

for(let i = fullname.length - 1; i >=0  ;i=i-1){

    reversename = reversename + fullname[i];
  
    console.log(reversename);

}
if(fullname===reversename)
{
    console.log("Pallindrome hai");
}
else
{
    console.log("Pallindrome nhi hai");
}

// ===============================
// for (let i = 1; i <= 10; i ++){
//     console.log(i*3);
// }


// let sum=0;
// for(let i=1; i<=100;i++)
// {
   
//     sum=sum+i;
// }
//     console.log(sum);
// ==================================
// for(let i=1;i<=50;i++)
// {
//     if(i%3==0 && i%5==0)
//     {
//         console.log(i);
//     }
// }

// ===count vowel

// let vowelCount=0;
// let str="hii how are you ? and were are you from?";
// for(let i=0;i<str.length;i=i+1)
// {
//     if(
//         str[i]==="a"||
//         str[i]==="e"||
//         str[i]==="i"||
//         str[i]==="o"||
//         str[i]==="u"||
//         str[i]==="A"||
//         str[i]==="E"||
//         str[i]==="O"||
//         str[i]==="I"||
//         str[i]==="U"
//     )
//     {
//        vowelCount= vowelCount+1;
//     }
    
// }console.log(vowelCount);

//=======reverce number====

// for(let i=10;i>=1;i--)
// {
//     console.log(i);
// }
//***************Chapter 1  Task-1******************

alert("Welcome to the web");

 //***************Chapter 1  Task-2******************

alert("Error! Please enter a valid password");

//***************Chapter 1  Task-3******************

alert("Welcome to JS land \n Happy Coding!");

//***************Chapter 1  Task-4******************

alert("Welcome to JS land");
alert("Happy coding!");

//***************Chapter 1  Task-5******************

alert("Hello... I can run JS  through my browser's consol");

//***************Chapter 1  Task-6******************

alert("Using alert in new html page!");

//***************Chapter 1  Task-7******************

alert("Using <Script> tag in head!");

//***************Chapter 1  Task-7(b)******************

alert("Using <Script> tag in body before HTML!");

//***************Chapter 1  Task-7(c)******************

alert("Using <Script>inside  HTML!");

//***************Chapter 1  Task-7(d)******************

alert("Using <Script>After page's HTML!");
 

//***************Chapter 2  Task-1******************

var username;


//***************Chapter 2  Task-2******************

var myName;
myName = "Nabeel Jawed";

//***************Chapter 2  Task-3(a,b,c,)******************

var message;
message ="Hello World"
alert(message);

//***************Chapter 2  Task-4******************


var name = "Jhone Doe";
var age = "15 years old"
var course = "Certified Mobile Application Development"
alert(name);
alert(age);
alert(course);

// //***************Chapter 2  Task-5******************

var a = " PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(a);

// //***************Chapter 2  Task-6******************


var email = "njkhan125@gmail.com"
alert("My Email is "+ email);

// //***************Chapter 2  Task-7******************


var book = "A Smarter way to learn JavaScript"
alert("I am trying to learn from the book "+ book );

// //***************Chapter 2  Task-8******************

// 
var a = "Yah! I can write HTML content through JavaScript";
document.write(a);

// //***************Chapter 2  Task-9******************


var a ="---------##@@##---------";
alert(a);
document.write(a);

//***************Chapter 3  Task-1******************

var age = 15;
alert("I am "+ age +" years old");

//***************Chapter 3  Task-2******************

var visited = 14;
alert("You have visited this site "+ visited + " times");

//***************Chapter 3  Task-3******************

var birthYear = 1998;
document.write("My birth year is "+ birthYear + " <br> Data type of my decleared variable is " + typeof(birthYear));

//***************Chapter 3  Task-4******************

 var visitorName = "John Doe"
 var ProducutTitle = "T-Shirt";
 var quantity = 5;
 document.write(visitorName + " Ordered " + quantity+" "+ ProducutTitle+"(s)");

//***************Chapter 4  Task-1******************

 var a , b , c;

//***************Chapter 4  Task-2******************

// Legal Variable
 var a;
 var a1;
 var $d ;
 var _a;
 var _a_b;

//  Illegal Variables
// var 1a;
// var @email;
// var #num;
// var ~name;
// var %Data;

//***************Chapter 4  Task-3******************

var a = "Rules for naming JS Variables";
var b = "Variable names can only contain , number, $  and _ for example: $my_1stVariabe"
var c = "Variables must begin with a letter, $ or _.For example $name, _name or na";
var d = "Variable names are case sensitive";
var e = "Variable name should not be JS keyword";
document.write(a + "<br>" + b +"<br>" + c + "<br>" + d + "<br>" + e );

//***************Chapter 5  Task-1******************

 var a = 3;
 var b = 5;
 var c = 3+5;
 document.write("Sum of " + a + " and "+b+" is " +c); 

//***************Chapter 5  Task-2******************

var a = 3;
var b = 5;
var c = a - b;
var d = a * b;
var e = a / b;
var f = a%b;
 document.write("Difference of " + a + " and "+b+" is " + c + "<br>" + "Product of " + a + " and "+b+" is " + d + "<br>" + "Division of " + a + " and "+b+" is " + e + "<br>" + "Modulos of " + a + " and "+b+" is " + f);

//***************Chapter 5  Task-3******************

var a;
document.write("Value after variable declration"+a);
a =  5;
document.write("<br> Initial value = " + a);
a++;
document.write("<br> Value after Increment is "+a);
a = a+7;
document.write("<br> value after addision is "+a);
a--;
document.write("<br> Value after Decrement is "+a);
a = a%3;
document.write("<br>The remainder"+a );

//***************Chapter 5  Task-4******************

 var ticketPrice = 600;
 var quantity = 5;
 document.write("Total cost of buying "+ quantity + " tickets is "  + ticketPrice*quantity);

//***************Chapter 5  Task-5******************

var a = 4;
for(var i = 1; i<= 10; i++){
    document.write(a+ "*" + i + "=" + a*i + "<br>");
}

//***************Chapter 5  Task-6******************

var celTemp = 25;
var ferConvert = (celTemp * 9/5)+32;
var ferTemp = 70;
var celConvt = (ferTemp - 32) *5/9;

document.write(celTemp+ "<sup>0</sup>C is "+ferConvert+"<sup>0</sup>F <br>"+ferTemp+"<sup>0</sup>F is "+celConvt+"<sup>0</sup>C" );

//***************Chapter 5  Task-7******************

var p1 = +650;
var q1 = +3;
var p2 = +100;
var q2 = +7;
var ship = +100;
var total = (p1*q1)+(p2*q2)+(ship);
 document.write("Price of item 1 is " + p1 + "<br>Quantity of item 1 is " + q1+ "<br>Price if item 2 is " + p2 + "<br>Quantity of otem 2 is "+ q2+"<br>Shipping Charges "+ship+"<br><br>Total cost of your order is "+total);

//***************Chapter 5  Task-8******************

var totalMark = 980;
var obtainedMark = 804;
var percentage = (obtainedMark * 100)/totalMark;
document.write("Total Marks: "+totalMark +"<br>Marks obtained: "+obtainedMark+"<br>Percentage: "+percentage);

//***************Chapter 5  Task-9******************

var usd = 10;
var sriyal = 25;
var pkr = usd * 104.80 + sriyal * 28;
document.write("Total Currency in PKR is "+pkr);

//***************Chapter 5  Task-10******************

var a = 5;
var ans = ((a+5)*(10))/2
document.write(ans);

//***************Chapter 5  Task-11******************

var currentYear = 2020;
var birthYear = 1998;
var age = 2020 - 1998;
document.write("Current Year is "+currentYear+"<br>Birth Year is "+birthYear+"<br>Your age is "+age);

//***************Chapter 5  Task-12******************

 var radius = 20;
 var circumference = 2*3.142*radius;
 var area = 3.142 *radius*radius;
 document.write("Radius of circle:"+radius+"<br>The circumference is:"+circumference+"<br>The area is:"+area);

//***************Chapter 5  Task-13******************

var favSnack = "choxolate chip"
var age = 15;
var maxAge = 65
var amountPerYear = 3;
var ans = (maxAge - age)* amountPerYear;
document.write("Youw will need "+ans+" chocolate chip to last  you until the ripe old age of 65");

//***************Chapter 6  Task-1******************

document.write("Result:");
var a = 10;
document.write("The value of a is "+a+"<br>..........................................<br> the value of a++ is "+ ++a+"<br>Now the value of a is"+a+"<br><br>The value of a++ is "+ a++ +"<br>now the value of a is "+a+"<br><br>The value of --a is "+ --a+"<br>Now the value of a is "+a+"<br><br>The value of a-- is "+a-- +"<br>Now the value of a is "+a);

//***************Chapter 6  Task-2******************

var a = 2; 
var b = 1;
document.write("Value of a is: "+a+"<br>Value of b is: "+b);
var z = --a - --b;
var x = z + 1;
var y = x + b--;
// var result = --a - --b + ++b + b--;
document.write("<br>Value of --a is:"+ a+"<br>The value of --a - --b is:"+z+"<br>The value of --a - --b + ++b is: "+x+"<br>The value of --a - --b + ++b + b-- is: "+y);
document.write("Ther reuslt og the given expression(--a - --b + ++b + b--) is: "+y)

//***************Chapter 6  Task-3******************

var a = prompt("Please Enter your name");
alert("Welcome to the page "+a);

//***************Chapter 6  Task-5******************

var a = prompt("Enter Number for Multiplication table");
for(var i =1 ;  i<=10 ; i++){
    if(a === null){
        document.write("5 *"+i+"=" + 5 * i+"<br>");
    }else{
        document.write(+a+ " * "+i+ " = " + +a*i +"<br>");
    }
}

//***************Chapter 6  Task-6******************

var a = prompt("Enter 1St subject name: ");
var b = prompt("Enter 2nd subject name: ");
var c = prompt("Enter 3rd subject name: ");
var totalMark = 100;
var fMark = prompt("Enter marks of first subject: ");
var sMark = prompt("Enter marks of Second subject: ");
var TMark = prompt("Enter marks of Third subject: ");
var totalResult = 300;
var totalPercentage = (fMark + sMark + TMark/totalResult)*100;
document.write("<b>Subject</b>" +" "+"<b>Total</b>" +" "+ "<b>Obtained Marks</b>" +" " +"<b>Percentage</b><br>"+a +" "+totalMark+" "+fMark+" "+" "+" "+(fMark*100)/totalMark+"%"+"<br>" +b +" "+totalMark+" "+sMark+" "+" "+" "+(sMark*100)/totalMark+"%"+"<br>" +c +" "+totalMark+" "+TMark+" "+" "+" "+(TMark*100)/totalMark+"%"+"Total percentage is: "+totalPercentage);
alert(TotalObtained);

// ========= Chapter 9-11 and Task 1 ===================

 var city = prompt("Enteryour city name: ");
 if(city === "karachi"){
     alert("Welcome to the city of light");
    }else{
        alert("City not found!");
    }

// ========= Chapter 9-11 and Task 2 ===================

var gender = prompt("Enter your gender: ")
if(gender === "male"){
alert("Good Morning sir");
}else if(gender === "female"){
    alert("Good Morning ma'am");
}

// ========= Chapter 9-11 and Task 3 ===================

var color = prompt("Enter Trafic Signal Color please: ");
if(color === "red"){
    alert("Must Stop");
}else if(color === "yellow") {
alert("Ready to move");
}else if(color === "green"){
    alert("Move now");
}else{
    alert("Its not trfic signal light's color");
}

// ========= Chapter 9-11 and Task 4 ===================

var remainFuel = prompt("Enter your fuel in liiters");
if(remainFuel < 0.25){
    alert("Please refill the fuel in your car");
}


// ========= Chapter 9-11 and Task 5 ===================

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else{
    alert("Given condition is false");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

if("car" < "cat"){
    alert("car is smaller than cat");
    }

// ========= Chapter 9-11 and Task 5 ===================

var m1 = +prompt("Enter 1st subject marks:");
var m2 = +prompt("Enter 2nd subject marks:");
var m3 = +prompt("Enter 3rd subject marks:");
var tMark = 300;
var totalObtained = m1 + m2 + m3;
var percentage = (totalObtained*100)/tMark;
var grade;
var remarks;
if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent"
}else if(percentage  >= 70){
    grade = "A";
    remarks = "Good"
}else if(percentage  >= 60){
    grade = "B";
    remarks = "You need to improve"
}else if(percentage < 60){
    grade = "fail";
    remarks = "Sorry!"
}
document.write("<b>Total Marks: </b>"+tMark+"<br><b>Marks Obtained: </b>:"+totalObtained+"<br><b>Percentage: </b>:"+percentage+"% <br><b>Grade: </b>"+grade+"<br><b>Remarks:</b> "+remarks); 

// ========= Chapter 9-11 and Task 7 ===================

var secret = 8;
var a = +prompt("Enter a guess number:" );
if(a === secret){
    alert("Bingo! Correct answer");
}else if(a+1 === secret ){
    alert("Close Enough");
}

// ========= Chapter 9-11 and Task 8 ===================

var a = prompt("Enter a number: ");
if(a % 3 == 0){
    alert("Given Number is divisible by 3");
}else{
    alert("Sorry! the number is not divisibe by 3");
}

// ========= Chapter 9-11 and Task 9 ===================

var a = +prompt("Enter a number: ");
if(a%2 === 0){
    alert("Provided number is EVEN number ");
}else{
    alert("Provided number is an ODD nummber")
}

// ========= Chapter 9-11 and Task 10 ===================

var t = +prompt("Please Enter temprature:");
if(t > 40){
    alert("It is too hot outside.")
}else if(t > 30){
    alert("The Weather today is Normal.");
}else if(t > 20){
    alert("Today’s Weather is cool.");
}else if(t > 10){
    alert("OMG! Today’s weather is so Cool.");
}

// ========= Chapter 9-11 and Task 11 ===================

var a = +prompt("Enter first number");
var b =  prompt("Enter Operator");
var c = +prompt("Enter second number");
if(b == +){
    alert(a + b);
}

// ========= Chapter 12-13 and Task 2 ===================

var int1 = +prompt("Enter First Integer");
var int2 = +prompt("Enter Second Integer");
if(int1 > int2){
    alert("INTEGER 1 is Larger");
}else if(int1 < int2){
    alert("INTERGER 2 is LARGER");
}else{
    alert("Both INTERGERS are equal");
}

// ========= Chapter 12-13 and Task 3 ===================

var a = +prompt("Enter Number:");
if(a > 0){
    alert("Given number is positive");
}else if(a < 0){
    alert("Given number is Negative");
}else{
    alert("Given number is 0");
}

// ========= Chapter 12-13 and Task 4 ===================

var a = prompt("Enter a Character");
if( a === "a" || a === "e" || a == "i" || a=="o"|| a=="u"){
    alert("True");
}
else{
    alert("False");
}

// ========= Chapter 12-13 and Task 5 ===================

var pass = "password";
var a = prompt("Enter Password");
if(a === ""){
    alert("please Enter Passw0rd");
}else if(a === pass){
    alert("“Correct! The password you entered matches the original password");
}else{
    alert("Incorrect password");
}

// ========= Chapter 12-13 and Task 6 ===================

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}else{
greeting = "Good evening";
alert(greeting);
}

// ========= Chapter 12-13 and Task 7 ===================

var time = prompt("Enter time plese");
if(time  >= 0000 && time < 1200){
    alert("Good Morining");
}else if(time >= 1200 && time < 1700){
    alert("Good afternoon");
}else if(time >= 1700 && time < 2100){
    alert("Good Evening");
}else if(time >= 2100 && time <= 2359){
    alert("Good Night");
}

// ========= Chapter 14-16 and Task 1 ===================

var studentName =[];

// ========= Chapter 14-16 and Task 2 ===================

var studentName = new studentName();

// ========= Chapter 14-16 and Task 3 ===================

 var stringArrey = ["String1","String2","String3"];

// ========= Chapter 14-16 and Task 4 ===================

var numArray = [1 , 2 , 3, 4];

// ========= Chapter 14-16 and Task 5 ===================

var bolArray = [true , false];

// ========= Chapter 14-16 and Task 6 ===================

var mixArray = ["String" , 11 , true];

// ========= Chapter 14-16 and Task 7 ===================

var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PHD"];
for(var i = 0; i < qualification.length; i++){
    document.write(i+1 +")" +" "+qualification[i]+"<br>");
}

// ========= Chapter 14-16 and Task 8 ===================

var std = ["Michael","john","Tony"];
var score = [320,230,480];
var totalMark = 500;
document.write("Score of "+std[0]+" is "+score[0]+". Percentage: "+(score[0]/totalMark)*100+"%" +"<br>Score of "+std[1]+" is "+score[1]+ " Percentage: " +(score[1]/totalMark)*100 + "%" + "<br>Score of "+std[2]+" is "+score[2]+ " Percentage: " +(score[2]/totalMark)*100 + "%");

// ========= Chapter 14-16 and Task 9 ===================

var color = ["red","yellow","green"];
document.write(color);
var a = prompt("whuch color you want to add at the end:");
color.push(a);
document.write("<br><b>Updated array:  </b>"+color);
var b = prompt("Enter 1st color you want to add in starting if above array");
var c = prompt("Enter 2nd color you want to add in starting if above array");
var i = prompt("At which index you want to add color");
var j = prompt("Which color you want add at your desire index");
document.write("<br><b>Deleted Value: </b>"+color.shift()+"<br><b>Deleted Value: </b>"+color+"<br><b>Deleting Last color : </b>"+color.pop()+"<br> <b>Array after deleting last color :</b> "+color+"<br><b><INDEX NO :</b>"+i+"<br><b>Color to be add: </b>"+j+"<br><b>updated array: </b>"+color.splice(i,j)+color);

// ========= Chapter 14-16 and Task 10 ===================

var stdScore = [234 , 453, 120, 115];
document.write("Array before sorting: "+stdScore+"<br>Array after sorting: "+stdScore.sort()); 

// ========= Chapter 14-16 and Task 11 ===================

var cities = ["Karachi", "Lahore","Islamabad","Queeta","Faisalabad"];
var selectedCities = cities.slice(1,4);
document.write("<b>Cities: </b>"+cities+"<br><b>Selected Cities: </b>"+selectedCities);

// ========= Chapter 14-16 and Task 12 ===================

var arr = ["This","is","my","cat"];
document.write(arr);
var b = arr.join();
document.write("<br>"+b);

// ========= Chapter 14-16 and Task 13 ===================

var arr =["keyboard","mouse","printer","monitor"];
for(var i = 0 ; i<arr.length;i++){
    document.write("Out: <br>"+ arr[i]+"<br>" );

}

// ========= Chapter 14-16 and Task 14 ===================

var arr =["keyboard","mouse","printer","monitor"];
for(var i = arr.length-1 ; i >=0 ; i--){
    document.write("Out: <br>"+ arr[i]+"<br>" );
}

// ========= Chapter 14-16 and Task 15 ===================

var companies = ["Apple","Samsung","Motorola"," Nokia", "Sony","Haier"]
for(var i = 0 ; i<companies.length; i++){
    document.write(companies);
}

// ========= Chapter 17-20 and Task 1 ===================

var multi =[],[],[];

// ========= Chapter 17-20 and Task 2 ===================

var matrix =[ [0,1,2,3] , [1,0,1,2,] , [2,1,0,1]];
document.write(matrix);

// ========= Chapter 17-20 and Task 3 ===================

for(var i= 1; i<=10;i++){
    document.write(i+"<br>");
}

// ========= Chapter 17-20 and Task 4 ===================

var table = prompt("Enter number fir multiplication table");
var limit = prompt("Enter the limit of the table");
for(var i=1;i<= limit; i++){
    document.write(table+ " * " +i+" = "+ table*i+"<br>");
}

// ========= Chapter 17-20 and Task 5 ===================

var fruits = ["apple","banana","mango","orange","strawberry"];
for(var i = 0; i< fruits.length; i++){
    document.write("Element at index"+i+" is "+fruits[i]+"<br>");
} 

// ========= Chapter 17-20 and Task 6 ===================

document.write("Counting<br>")
for(var i = 1;i< 16;i++){
    document.write(i+",");
}
document.write("<br>Reverse Counting<br>");
for(var i=10;i>=1;i--){
    document.write(i+",");
}
document.write("<br>Even:<br>");
for(var i=0;i<=20;i++){
    if(i%2 === 0 ){
        document.write(i+",");
    }
}
document.write("<br>ODD:<br>");
for(var i=0;i<=20;i++){
    if(i%2 != 0 ){
        document.write(i+",");
    }
}
document.write("<br>Series:<br>");
for(var i=1;i<=20;i++){
    if(i%2 === 0 ){
        document.write(i+"k, ");
    }
}

// ========= Chapter 17-20 and Task 7 ===================

var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Enter the iten you are searching for:");
for(var i =0; i<a.length;i++){
    if(a[i] === b){
        document.write(b+"is availabe in our bakery at Index no "+ a.indexOf(a[i]));
    }else{
        document.write("Not found!");
    }
    break;
}

// ========= Chapter 17-20 and Task 8 ===================

var a = [24, 53, 78, 91, 12];
var temp;
for(var i =0;i<a.length;i++){
    
}

// ========= Chapter 17-20 and Task 10 ===================

for(var i=1;i <= 100;i++){
    if(i%5 === 0){
        document.write(i+" ");
    }
}



// ******* Chapter 21-25 & Task 1 *******/

var a = prompt("Enter First Name: ");
var b = prompt("Enter Last Name: ");
var fullName = a+" "+b;
alert("Dear " +fullName+" Welcome to the Page")

// ******* Chapter 21-25 & Task 2 *******/

var a = prompt("Enter your favorite mobile phone model:");
var b = a.length;
document.write("My favorite phone is: "+a);
document.write("<br>Length of String is: "+b);

// ******* Chapter 21-25 & Task 3 *******/

var a = "Pakistani"
var b = a.indexOf("n");
document.write("Sting: "+a+"<br>Index of 'n': "+b);

 // ******* Chapter 21-25 & Task 4 *******/

var a = "Hello World";
var b = a.lastIndexOf("l");
document.write("String: "+a+"<br>Last Index of 'l': "+b);

// ******* Chapter 21-25 & Task 5 *******/

var a = "Pakistani";
var b = a.charAt(3);
document.write("String: "+a+"<br>Character at index 3: "+b);

 // ******* Chapter 21-25 & Task 6 *******/

var z = " ";
var a = prompt("Enter First Name: ");
var b = prompt("Enter Last Name: ");
var c = z.concat( a," ", b);
document.write(c);

 // ******* Chapter 21-25 & Task 7 *******/

var a ="Hyderabad";
var b = a.splice(1, 5, "Islam");
alert(a);


 // ******* Chapter 21-25 & Task 8 *******/

var message = "Ali and Sami are best friends. They play cricket and football togather.";
for(var i=0; i<message.length; i++){
if(message.slice(i,i+3) === "and"){
    message = message.slice(0,i)+"&"+message.slice(i+3);
}
}
document.write(message);

//  ******* Chapter 21-25 & Task 9 *******/

var value = "472"
var num = Number(value);
document.write("Value:"+value+"<br>Type:"+typeof(value)+"<br>Value:"+num+"<br>Type:"+typeof(num));

// ******* Chapter 21-25 & Task 10 *******/

var input = prompt("Enter you message:");
var a = input.toUpperCase();
document.write(input+"<br>"+a);

 // ******* Chapter 21-25 & Task 11 *******/

var input = prompt("Enter your words here:");
var b = input.toLowerCase();
var a = input[0].toUpperCase();
document.write(a+b);

 // ******* Chapter 21-25 & Task 12 *******/

var num = 35.36;
var a = num.toString();
var str = parseInt(a);
document.write("Number:"+num+"<br>Result:"+str+"36");

  // ******* Chapter 21-25 & Task 13 *******/

var a = prompt("Please Enter username:");
for(var i = 0;i<a.length;i++){
if(a.charCodeAt(i) === 33 || a.charCodeAt(i) === 44 || a.charCodeAt(i) === 46 ||a.charCodeAt(i) === 64){
    alert("Pleas Enter a valid username:");
    beark;
}
}

//  ******* Chapter 21-25 & Task 14 *******/

var a = ["cake","apple pie","cookie","chips","patties"];
var b = prompt("Enter your desire product:");
for(var i=0; i<a.length; i++){
    if(a[i] === b){
        document.write(b+ " is available in our bakery at index no: "+ a.indexOf(a[i]));
        break;
    }else{
        document.write("We are sorry"+b+" is not available in our bakery");
    }
}

 // ******* Chapter 21-25 & Task 15 *******/

var a =["cake", "apple pie","cookie","chips","patties"];
var b = prompt("Please Enter your desire product");
var c = b.toLowerCase();
for(var i =0; i < a.length; i++){
    if(a[i] === c){
        alert(c+" is available in our bakery at index number: "+a.indexOf(c));
        break;
}
    }

 //  ******* Chapter 21-25 & Task 16 *******/

var str = "karachi university";
var arr = str.split("");
for(var i=0; i <= arr.length;i++){
    document.write(arr[i]+"<br>");
}


  // ******* Chapter 26-30 & Task 1 *******/

var num = prompt("Enter a positive Integer: ");
document.write("Number: "+num+"<br>Round off value: "+Math.round(num)+"<br>Floor Value: "+Math.floor(num)+"<br>Ceil Value: "+Math.ceil(num));

 // ******* Chapter 26-30 & Task 2 *******/

var num = prompt("Enter a negative Integer: ");
document.write("Number: "+num+"<br>Round off value: "+Math.round(num)+"<br>Floor Value: "+Math.floor(num)+"<br>Ceil Value: "+Math.ceil(num));

  // ******* Chapter 26-30 & Task 3 *******/

var num = -4;
var a = Math.abs(num);
document.write("The absolute value of "+num+" is "+a);

 // ******* Chapter 26-30 & Task 4 *******/

var a = Math.floor(Math.random()*6+1);
document.write("Random dice value: "+a);

 //  ******* Chapter 26-30 & Task 5 *******/

var toss = Math.random()*2;
var a = Math.floor(toss);
if(a === 0){
    document.write("Random coin value is: Heads");
}else{
    document.write("Random coin value is: Tails")
}

  // ******* Chapter 26-30 & Task 6 *******/

var a = Math.random()*100+1;
var b = Math.floor(a);
document.write("Random number between 1 abd 100: "+b);

  //******* Chapter 26-30 & Task 7 *******/

var a = prompt("Enter your weight: ");
var c = prompt("Enter youe weight unit:")
var b = parseFloat(a);
document.write(b+c);

 //******* Chapter 26-30 & Task 8 *******/

var a = Math.random()*10+1;
var b = Math.floor(a);
var input = prompt("Enter number between 1 to 10:");
if(b === input){
    alert("Congrates! you entered the right number:");
}else{
    alert("Try Again!");
}
document.write("Random Number: "+b +"<br>Your Number:"+input);

 // ******* Chapter 31-34 & Task 1 *******/

var a = new Date();
document.write(a);

// ******* Chapter 31-34 & Task 2 *******/

var months = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "Octuber", "November", "December"];
var a = new Date();
var b = months[a.getMvaronth()];
document.write("Current Month: "+b);

// ******* Chapter 31-34 & Task 3 *******/

var days = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
var a = new Date();
var b = days[a.getDay()];
alert(b);

// ******* Chapter 31-34 & Task 4 *******/

var a = new Date();
var b = a.getDay();
if(b === 0 || b === 6){
    document.write("It's Fun Day!");   
}

// ******* Chapter 31-34 & Task 5 *******/

var a = new Date();
var b = a.getDate();
if(b <= 16){
    document.write("First Fifteen Days of the month.");
}else{
    document.write("Last days of the month.");
}

// ******* Chapter 31-34 & Task 6 *******/

var a = new Date();
var b = a.getTime();
var c = (b/(1000*60));
document.write("Current Date: "+a+"<br>Elapsed milliseconds since January 1, 1970: "+b+"<br>Elapsed minutes since January 1, 1970: "+c);

// ******* Chapter 31-34 & Task 7 *******/

var a = new Date();
var b = a.getHours();
if(b <= 12){
    document.write("It's AM");
}else{
    document.write("It's PM");
}

// ******* Chapter 31-34 & Task 8 *******/

var a = new Date();
var b = new Date("Dec 31 2020");
document.write("Current Date: "+a+"<br>Latter Date: "+b);

// ******* Chapter 31-34 & Task 9 *******/

var a = new Date();
var b = new Date("mar 25 2020");
var c = a.getTime();
var d = b.getTime();
var diff = c-d;
var days = diff/(1000*60*60*24);
var accDays =Math.floor(days);
document.write(accDays);

// ******* Chapter 31-34 & Task 10 *******/

var a = new Date();
var b = a.getTime();
var c = new Date("Jan 1 2020");
var d = c.getTime();
var diff = (b-d);
document.write("On Refference date: "+a+"<br>"+Math.floor(diff/(1000))+" Seconds had passed since the begining of 2020");

// ******* Chapter 31-34 & Task 11 *******/

var a = new Date();
var b = a.getTime();
var c = b - 3600000;
var d = new Date(c);
document.write("Current Date: "+a+"<br>1 hour ago it was: "+d);

// ******* Chapter 31-34 & Task 12 *******/

var a = new Date();
var b = a.getTime();
var c = b - (100*12*30.4372*24*60*60*1000);
var d = new Date(c);
alert("Current Date: "+a+"\n 100 years back: "+d);

// ******* Chapter 31-34 & Task 13 *******/

var a = +prompt("Enter your Age: ");
var b = new Date();
var c = b.getTime();
var d = a * 12 * 30 * 24 * 60 * 60 * 1000;
var mili = c-d;
var birthDate = new Date(mili);
var final = birthDate.getFullYear();
document.write(final);

// ******* Chapter 31-34 & Task 14 *******/

document.write("<h1>K=Electric Bill</h1>");
var months =["January", "February", "March", "April", "May", "<b>June</b>", "july", "August", "September", "Octuber", "November", "December"];
var a = new Date();
var unit = 410;
var price = 16;
var netAmount = unit*price;
var latePayment = 350;
var gross = netAmount + latePayment;
var b = a.getMonth();
var conName = "<b>ABC Customer</b>";
document.write("Consumer Name :"+conName+"<br>Month: "+months[b]+"<br>Number of units: "+unit+"<br>Charges per unit: "+price+"<br><br>Net amount payable(within due date:"+netAmount+"<br>Late payment Charges: "+latePayment+"<br>Gross Amount Payable (after Due Date: "+gross);


// ******* Chapter 35-38 & Task 1 *******/

function date(){
    var a = new Date();
    document.write(a);
}
date();

// ******* Chapter 35-38 & Task 2 *******/

function name(){
    var a = prompt("Enter your First name:");
    var b = prompt("Enter your Last name:");
    var c= a+" "+b;
    alert("Welcome to the page "+c);
}
name();

// ******* Chapter 35-38 & Task 3 *******/

function add(a,b){
    var a = +prompt("Enter First Number: ")
    var b = +prompt("Enter Second Number: ")
    var c = a+b;
    document.write("The Sum of your provided number is :"+c);
}
add();

// ******* Chapter 35-38 & Task 4 *******/

function calculator(){
    var num1 = +prompt("Enter 1st Number:");
    var opr = prompt("Enter operator:");
    var num2 = +prompt("Enter 2nd Number:");

    if(opr === "+"){
        var result = num1 + num2; 
    }else if(opr === "-"){
        var result = num1 - num2;
    }else if(opr === "*"){
        var result = num1 * num2;

    }else if(opr === "/"){
        var result = num1/num2;
    }else{
        alert("Invalid Operator");
    }
document.write(result);
}
calculator();

// ******* Chapter 35-38 & Task 5 *******/

function square(a){
    var a = a*a;
    return a;
}
var a = +prompt("Enter Number to be Square:");
var b = square(a);
document.write(b);

// ******* Chapter 35-38 & Task 6 *******/

function factorial(){
    var a = +prompt("Eneter a number to find factorial:");
    var b = 1;
    for(var i=a; i>=1;i--){
    b=b*i;
    }
    document.write("The Factorial of "+a+" is "+b);
}
factorial();

// ******* Chapter 35-38 & Task 7 *******/

function counting(){
    var a = +prompt("Enter the starting number of the counting:");
    var b = +prompt("Enter the end number of the counting:");
    for(var i=a;i<=b;i++){
        document.write("<br>"+i);
    }
}
counting();

// ******* Chapter 35-38 & Task 8 *******/

var baseSqr;
var perpSqr;
function square(){
    var base = +prompt("Enetr Base: ");
    var perp = +prompt("Enetr Perpendicular: ");
    return baseSqr = base*base;
    return perpSqr = perp*perp;
}
    function hyptenouse(baseSqr,perpSqr){
        square();
        var z = baseSqr + perpSqr;
     document.write(z); 
    }
hyptenouse();

// ******* Chapter 35-38 & Task 9 *******/

function area(a,b){
    var z = a*b;
    return z;
}
var w = +prompt("Enter the value of Width");
var g = area(w,5);
document.write(g);

// ******* Chapter 35-38 & Task 10 *******/

function palindrome(){
var a = prompt("Enter word:");
var check = "";
for(var i = a.length-1; i>=0; i--){
    check += a[i]
}
if(a === check){
    document.write(a+" is a palindrome word");
}else{
    document.write(a+" is not a palindrome word")
}
}
palindrome();

// ******* Chapter 35-38 & Task 11 *******/

var a = "quick";
var FirstChar = a.slice(0,1);
var remaining = a.slice(1);
var b = FirstChar.toUpperCase();
var c = remaining.toLowerCase();
var ans = b+c;
alert(ans);

// ******* Chapter 35-38 & Task 12 *******/

function longestWord(string) {
    var a = string.split(" ");
    var largest = 0;
    var word = null;
    for (var i = 0; i < a.length; i++) {
        if (largest < a[i].length) {
            largest = a[i].length;
            word = a[i];
        }
    }
    document.write(word);
}
longestWord("web development Tutorial");

// ******* Chapter 35-38 & Task 13 *******/

function occurance(str , letter){
    var Count = 0;
    for(var i =0 ;i<str.length;i++){
        if(str.charAt(i) === letter){
            Count +=1;
        }
    }
    return Count;
}
document.write(occurance("JSResourceS.com","o"));

// ******* Chapter 35-38 & Task 14 *******/

function calcCircumference(radius){
    var a = 2*3.142*radius;
    return a;
}
var g = calcCircumference(5);
document.write("Circumference of circle is: "+g);

function area(radius){
var a = 3.142*radius*radius;
return a;
}
var g = area(5);
document.write("Area of the circle is: "+g);



//                 ************Chapter 38-42 Task # 1 *****************

function power(a,b){
    var result = Math.pow(a,b);
    alert(result);
}
power(3,3);

//                  ************Chapter 38-42 Task # 2 *****************

function leap(){
var year = prompt("Enter year: ");
if(year%100 === 0 || year%400 === 0 || year % 4 === 0){
    alert("Leap year");
}else{
    alert("Not a leap year");
}
}
leap();

//                  ************Chapter 38-42 Task # 3 *****************


var a = +prompt('Enetr the value of a: ');
var b = +prompt('Enetr the value of b: ');
var c = +prompt('Enetr the value of c: ');
function triangle(){
  
var tri = a+b+c;
var s = tri/2;
return s;
}

function area(){

    var z = triangle(a,b,c);
    var area = z*(z-a)*(z-b)*(z-c);
    alert(area);
}
area();

//                ************Chapter 38-42 Task # 4 *****************

var a = +prompt("Enter Mark obtained in English out of 100: ");
var b = +prompt("Enter Mark obtained in Math out of 100: ");
var c = +prompt("Enter Mark obtained in Computer out of 100: ");

function percentage(a,b,c){
var add = a+b+c;
var per = (add*100)/300;
console.log("Percentage :"+per+"%");
}

function average(a,b,c){
    var add = a+b+c;
    var avg = add/3;
console.log("average marks: "+avg);    
}

 function main(){
     percentage(a,b,c);
     average(a,b,c);
 }
 main();

//                ************Chapter 38-42 Task # 5 *****************

var arr = ['html','css','javaScript'];
var str = 'javaScript'
for (var i=0;i<arr.length;i++){
    if(str === arr[i]){
    console.log(str+" is availabe at index number: "+i);
    }
}

var cities = ["karachi" ,"lahore"  ,"islamabad"];
var b = cities.indexOf("lahore");
document.write(b);

//               ************Chapter 38-42 Task # 6 *****************

var string = "hello World";
var vowel = ["a", "e", "i", "o", "u","A","E","I","O","U"];

function name(){
    for (var i = 0; i < vowel.length; i++) {
        for ( j = 0; j < string.length; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, string.length));
            }

        }
    }
}
name();
console.log(string);

//                 ************Chapter 38-42 Task # 7 *****************

var userData = prompt("Enter any text here").toLowerCase();
var a = 0;
var e = 0;
var i = 0;
var o = 0;
var u = 0;
var consonants = 0;
var count;

for (count = 0; count < userData.length; count++){
    var char = userData.charAt(count);
    if(char.match(/[aeiou]/)){
        switch (char) {
            case 'a':
                a++;
                break;
            case 'e':
                e++;
                break;
            case 'i':
                i++;
                break;
            case 'o':
                o++;
                break;
            case 'u':
                u++;
                break;
        }
    } else{
    consonants++;
    }
}

console.log ("a: " + a);
console.log ("e: " + e);
console.log ("i: " + i);
console.log ("o: " + o);
console.log ("u: " + u);

//               ************Chapter 38-42 Task # 8 *****************

var a = +prompt("Enter distance in km:");
function meter(a){
   var b =  a * 1000;
console.log("Distance in meter: " +b);
}
meter(a);

function feet(a){
    var feet = a * 3281;
    console.log("Distance in feet: " +feet);
}
feet(a);

function inch(a){
    var inch = a * 39370;
    console.log("Distance in inch: " +inch);
}
inch(a);

function centimeter(a){
    var centi = a * 100000;
    console.log("Distance in inch: " +centi);
}
centimeter(a);

//           ************Chapter 38-42 Task # 9 *****************

var workingHour = +prompt("Enter Employee Working hours");
function overTime(workingHour){
if(workingHour > 40){
    var a = workingHour - 40;
    var b = a*12;
    console.log("Over Time payment: "+b)
}
}
overTime(workingHour);

//            ************Chapter 38-42 Task # 10 *****************

 var amount = +prompt("Enter withdrawal Amount: ");
function domination(amount){
    var hundred =  amount / 100;
    var b =Math.floor(hundred);
    var fifty =  (amount % 100) / 50;
    var c = Math.floor(fifty);
    var ten = (((amount % 100) % 50) / 10);
    var d = Math.floor(ten);
    console.log("You will have "+b+" notes of 100, "+c+" notes of 50 and "+d+" notes of 10");
}
domination(amount);


// ************CHAPTER 43-48 :  TASK - 1 ************

function box() {
    alert("Alert BOX");
  }
  
  //************CHAPTER 43-48 :  TASK - 2 ************
  
  function msg() {
    alert("Thank you for purchasing a phone from us:");
  }
  
  // ************CHAPTER 43-48 :  TASK - 3 ************
  
  function deleter() {
    var p = document.getElementById("aa");
    p.innerHTML = ""
  }
  
  // ************CHAPTER 43-48 :  TASK - 4 ************
  
  function changeImg() {
    var a = document.getElementById("change");
    a.src = "mdn2.jpg"
  }
  
  function outImage() {
    var a = document.getElementById("change");
    a.src = "mdn1.jpg"
  }
  
  
  // ************CHAPTER 43-48 :  TASK - 5 ************
  
  function increment() {
    var a = document.getElementById("counter").value;
    a++;
    document.getElementById("counter").value = a;
  }
  function decrement() {
    var a = document.getElementById("counter").value;
    a--;
    document.getElementById("counter").value = a;
  }

// ************CHAPTER 49-52 :  TASK - 1 ************

function showMessage(){
    
var a = document.getElementById("fName").value;
var b = document.getElementById("show");
var c = document.createElement("p");
var text = document.createTextNode("First name: "+a);
c.appendChild(text);
b.appendChild(c)

var lastName = document.getElementById("lName").value;
var b = document.getElementById("show");
var p = document.createElement("p");
console.log(p)
var text = document.createTextNode("Last name: "+lastName);
p.appendChild(text);
b.appendChild(p)

var cell = document.getElementById("cell").value;
var b = document.getElementById("show");
var p = document.createElement("p");
console.log(p)
var text = document.createTextNode("cell num: "+cell);
p.appendChild(text);
b.appendChild(p)
 }
  
  // ************CHAPTER 49-52 :  TASK - 2 ************
  
  function readmore() {
    var text = document.getElementById("text").innerHTML;
    var paragraph = document.getElementById("para");
    paragraph.innerHTML = text;
  }
  
  
  // ************CHAPTER 49-52 :  TASK - 3 ************


function updates(){
var a = document.getElementById("firstName").value;
var b = document.getElementById("lastName").value;
var c = document.getElementById("cellPhone").value;

var list = document.getElementById("table");

var tr = document.createElement("tr");

var tdFirst = document.createElement("td");
var sndTd = document.createElement("td");
var trdTd = document.createElement("td");

var fisrtText = document.createTextNode(a);
var sndText = document.createTextNode(b);
var trdText = document.createTextNode(c);


var btnDlt = document.createElement("button");
var btnText = document.createTextNode("DELETE");
btnDlt.appendChild(btnText);
btnDlt.setAttribute("onclick" , "Clear(this)")

list.appendChild(tr);

tr.appendChild(tdFirst);
tr.appendChild(sndTd);
tr.appendChild(trdTd);
tr.appendChild(btnDlt);

tdFirst.appendChild(fisrtText);
sndTd.appendChild(sndText);
trdTd.appendChild(trdText);
}

function Clear(e){
 e.parentNode.innerHTML = ""
}
  
//        *************CHAPTER 52-57 Task 1****************

function showImage(e){
var image = document.getElementById("modalImage");
image.src = e.src;
}



//        *************CHAPTER 58-67 Task 1 (i)****************

var a = document.getElementById("main-content");
console.log(a);

//                  *************CHAPTER 58-67 Task 1 (ii)****************

    var a = document.getElementById("main-content");
    var b = a.childNodes;
    console.log(b);


//                  *************CHAPTER 58-67 Task 1 (iii)****************

var a = document.getElementsByClassName("render");
var b = a.innerHTML;
for(var i=0;i<a.length;i++){
    document.write(b);
}

//                  *************CHAPTER 58-67 Task 1 (iv)****************

var a = document.getElementById("first-name");
var b = a.innerHTML  = "Nabeel";
document.write("First Name: "+b+ "<br>");

//                  *************CHAPTER 58-67 Task 1 (v)****************

var a = document.getElementById("lastName");
var b = a.innerHTML  = "Khan";
document.write("Last Name: "+b+ "<br>");

var a = document.getElementById("email");
var b = a.innerHTML  = "abc@xyz.com";
document.write("Email: "+b+ "<br>");

//                  ************* CHAPTER 58-67 Task 2(i) ****************

var a = document.getElementById("form-content");
var b = a.nodeType;
if(b === 1){
    console.log("Element");
}else{
    console.log("text");
}


//                  ************* CHAPTER 58-67 Task 2(ii) ****************

var a = document.getElementById("lastName");
console.log(a.nodeType);
var b = a.childNodes;
console.log(b);

//                  ************* CHAPTER 58-67 Task 2(iii) ****************

var a = document.getElementById("lastName");
var p = document.createElement("p");
a.appendChild(p);
console.log(a.childNodes);

//                  ************* CHAPTER 58-67 Task 2(iv) ****************

var a = document.getElementById("main-content");
var b = a.firstChild;
var c = a.lastChild;
console.log(b)
console.log(c)


//                  ************* CHAPTER 58-67 Task 2(v) ****************


    var a = document.getElementById("lastName");
    console.log(a.nextSibling.nextSibling);
    console.log(a.previousSibling.previousSibling);

//                  ************* CHAPTER 58-67 Task 2(vi) ****************


var a = document.getElementById("email");
var b = a.nodeType;
console.log("Type: "+b);
var c = a.parentNode;
console.log(c);
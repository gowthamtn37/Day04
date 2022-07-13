//for the given JSON iterate over all the loops 
//for & for in
//answer

//for loop

let employe = [{name:"ariv",salary:10000, Designstion:"trainee"},{name:"bala",salary:20000, Designstion:"supervisor"},{name:"Chinna",salary:30000, Designstion:"manager"}];
for (i=0; i<employe.length; i++ )
{
    console.log(employe[i]);
    
}
console.log (employe[1].name+" "+employe[1].Designstion);

//for in 

let employe1A = {
    "name":"ariv",
    "salary":10000,
 "Designstion":"trainee"}
for (let j in employe1A)
{
console.log(j,employe1A[j]);
}


// 2. create your own resume data in JSON format
//answer

let resume = {
    "Name":"GOWTHAM M",
    "Course":"DIPLOMA IN MECHATRONICS",
    "Percentage":"8.5 CGPA",
    "Email id":"gowthamtn37@gmail.com",
    "Skills":"PLC programer",
    "Experience":"8yrs"
}
for(var A in resume)

console.log(A,resume[A]);


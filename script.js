alert("مرحباً بك في موقعي الذي سيحسب درجتك!!")
 


let grade = prompt("اكتب درجتك بالأرقام")
console.log(grade);

if(grade>=90){console.log("%cلقد حصلت على امتياز 🥳" , 'color:green;font-size:35px')}

else if(grade>=80){console.log("%cلقد حصلت على جيد جداً🤩", 'color:orange;font-size:35px')} 

else if(grade>=70){console.log("%cلقد حصلت على جيد🙂", 'color:yellow;font-size:35px')}

else if(grade>=60){console.log("%cلقد حصلت على مقبول😕", 'color:purple;font-size:35px')}

else if(grade>=50){console.log("%cلقد حصلت على ضعيف☹️", 'color:brown;font-size:35px')}

else{console.log("%cراسب💔", 'color:red;font-size:35px')} 

 
//جافاسكربت ليست جافا




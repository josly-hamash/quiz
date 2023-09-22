function myFunction(){
    para1 = document.getElementById("para1");
    para1.innerHTML="string is reference type?"
    
    input = document.getElementById("inp").value;
    
    
    if(input=="yes"){
  
         document.getElementById("para2").innerHTML="WRONG ANSWER";
        
    }
    else if(input=="no"){
        document.getElementById("para2").innerHTML="CORRECT ANSWER";
    }
    else{
        document.getElementById("para2").innerHTML="";
    }

    
}

button = document.getElementById("btn");

button.addEventListener("click",()=>{
    button.innerHTML="submit"
    
})





        
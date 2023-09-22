function myFunction(){
    para1 = document.getElementById("para1");
    para1.innerHTML="boolean is primitive type?"
    
    input = document.getElementById("inp").value;
    
    
    if(input=="yes"){
  
         document.getElementById("para2").innerHTML="CORRECT ANSWER";
        
    }
    else if(input=="no"){
        document.getElementById("para2").innerHTML="WRONG ANSWER";
    }
    else{
        document.getElementById("para2").innerHTML="";
    }

    
}

button = document.getElementById("btn");

button.addEventListener("click",()=>{
    button.innerHTML="submit"
    
})





        
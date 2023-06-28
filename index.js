// Add your code here



function submitData(usersname, myemail){
let url;

if (usersname !=="" && myemail !==""){   
    
    url = "http://localhost:3000/users"}

    else{
        document.body.innerHTML=`<p> no data </p>` ;  
        return; 
    } 

    console.log("data ")
 fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json",
             "Accept":"application/json"},

    body:JSON.stringify({name:usersname,email:myemail})

}).then(response=>response.json())
  .then(data=>document.body.innerHTML=`<p>You were added with the id  ${data.id}</p>`)
  .catch(error=>document.body.innerHTML=error)
}


submitData("david","username")





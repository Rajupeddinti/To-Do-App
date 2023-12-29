let form = document.getElementById('form')
let input = document.getElementById('input')
let msg = document.getElementById('msg')
let posts = document.getElementById('posts')

console.log(form)
console.log(input)
console.log(msg)
console.log(posts)
 

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log('button clicked');
    formvalidation()
   
   

});
      

let formvalidation = ()=>{
    if(input.value === ''){
        msg.innerHTML = "TODO can't be blank"
        // console.log('failed')
    }else{
        // console.log('success')
        msg.innerHTML='' 
        acceptdata()
        createpost()
        
    }
}

let data = {}

let acceptdata = ()=>{
    data["text"] = input.value
    // console.log(data)
    
}


let createpost = ()=>{
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onclick="editpost(this)" class="fa-solid fa-pen-to-square " ></i>
        <i onclick="deletepost(this)" class="fa-solid fa-trash" ></i>
    </span>
</div>`
    input.value = "";
    
    
}

let deletepost = (e)=>{
    // console.log('show')
    e.parentElement.parentElement.remove()
}

let editpost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}
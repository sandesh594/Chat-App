let messages=document.getElementById("messages");
let textbox=document.getElementById("textbox");
let button=document.getElementById("button");
let container=document.getElementById('App');
let commentTextarea = document.getElementById('comment');



function change() {

    button.style.display="inline-block";
    
}

button.addEventListener("click",function(){


    let newMessage=document.createElement('p');
    let brek=document.createElement('br')
    newMessage.innerHTML=commentTextarea.value;
    messages.appendChild(newMessage);
    messages.appendChild(brek);
    commentTextarea.value="";
    button.style.display='none';
    container.scrollTop=container.scrollHeight;
    const y=messages.getElementsByTagName('p');
    for (let i = 0; i < y.length; i++) {
    if (i%2===0) {

        y[i].classList.add('input_first');

        
    } else {

        y[i].classList.add('input_last');
    }
    
   }

    let newState=newMessage.innerText.length;

    if (newState>15) {

        messages.appendChild(newMessage).style.fontSize='20px';
        
    }   


});








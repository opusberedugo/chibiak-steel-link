let menuButton = document.querySelector(".nav-menu-button");
let menuOptions = document.querySelector("nav .options");

menuButton.addEventListener("click", (e)=>{
  menuOptions.classList.toggle("hidden");
})


document.getElementById('contactForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  let inputs = document.querySelectorAll('#contactForm input');
  let label = document.querySelectorAll("#contactForm label")
  let messageBox = document.querySelector('#contactForm textarea')

  console.log("Submit Event");
  
  inputs.forEach((v,i)=>{
    if(v.value.trim() === ""){
      Swal.fire({
        title: "Error",
        text: `${label[i].textContent.substring(0,label[i].textContent.length-1)} field cannot be empty`,
        icon: "error"
      });
    throw Error(`${label[i].textContent.substring(0,label[i].textContent.length-1)} field cannot be empty`);
    }
  }) 

  if(messageBox.value.trim() ===""){
    Swal.fire({
      title: "Error",
      text: "Message Field cannot be empty",
      icon: "error"
    });
    throw Error("Message field cannot be empty")
  }


  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputs[1].value.trim())){
    Swal.fire({
      title: "Error",
      text: `Please Enter a valid email`,
      icon: "error"
    });
    throw Error("Please enter a valid Email")
  }

  document.getElementById('contactForm').submit();
});


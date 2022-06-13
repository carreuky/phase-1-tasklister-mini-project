document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    // console.log(e.target['new-task-description'].value)
    p = document.createElement('p');
    p.textContent = `${e.target['new-task-description'].value} `
    button = document.createElement('button')
    button.textContent = 'X'
    console.log(p)
    form.appendChild(p)
    p.appendChild(button)

    // ON CLICK DELETES 
    button.addEventListener('click', function(e){
      e.target.parentNode.remove()
    })
   
  })
  
  
  

});



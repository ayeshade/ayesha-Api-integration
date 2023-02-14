fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
    console.log(json);
    const markup = json.map(el => {
        return `
        <li class="card-container align-item-center">
            <div class="image-container">
            <img class="round" src="https://xsgames.co/randomusers/assets/avatars/male/${el.id}.jpg" width="150px">
             
             
            </div>
             <div class="name-container"> 
                 <span class="firstName">${el.name}</span>
                 <span class="lastName">${el.username}</span>
                
             </div> 
             <p class="email">${el.email}</p>  
             <a class="btn btn-primary" href="#" role="button">PROFILE</a>
            </li>
            
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  
})




  

 
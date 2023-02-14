fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => {
    console.log(json[0]);
    for (let index = 0; index < 11; index++) {
       const markup =
        `
        <li class="card-container">
            <div class="image-container">
            </div>
             <div class="name-container">
                 <span class="firstName">${json[index].body}</span>
                 <span class="lastName">${json[index].title}</span>
             </div>
             <p class="email"></p>
            </li>
    `
    document.querySelector('.list-container').innerHTML += markup
    }
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  
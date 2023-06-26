var form = document.getElementById('forms')
let isLoaded = false
form.addEventListener('submit', (e) => {
    e.preventDefault()
    var input = document.getElementById("search-input").value
    console.log(input)


   

    fetch(`https://api.github.com/users/${input}`)
        
        .then(response => response.json())
        .then(data => {
            
            console.log(data)
            if (data.message == "Not Found") {
                document.getElementById('search-result').innerHTML = `<p class="not-found">Not Found !</p>`
            }
            else {
                document.getElementById('search-result').innerHTML = 
                    `<div class="main-img">
        <img src=${data.avatar_url} alt="search" />
      </div>
      <div class="content">
        <div class="name">
          <p id="name">${data.name ? data.name : 'No name' }</p>
        </div>
        <div class="username">
          <p id="username">@${data.login}</p>
        </div>
        <div class="bio">
          <p id="bio">${data.bio ? data.bio : "There is no bio"}</p>
        </div>
        <div class="info">
          <div class="followers">
            <p id="followers">Followers</p>
            <span>${data.followers}</span>
          </div>
          <div class="following">
            <p id="following">Following</p>
            <span>${data.following}</span>
          </div>
          <div class="repos">
            <p id="repos">Repos</p>
            <span>${data.public_repos}</span>
          </div>
        </div>
        <div class="socials">
          <div class="twitter">
              <img src="./img/icons8-twitter-48.png" alt="twitter" />
              <span>${data.twitter_username ? data.twitter_username : 'no username'}</span>
          </div>
          <div class="location">
              <img src="./img/icons8-location-48.png" alt="location" />
              <span>${data.location ? data.location : 'no location'}</span>
          </div>
        </div>
      </div>`
            }

        
        }
        
    
    )
})
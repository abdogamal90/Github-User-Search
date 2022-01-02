var form = document.getElementById('forms')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    var input = document.getElementById("hey").value

    
    fetch("https://api.github.com/users/"+input)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        
            document.getElementById('demo').innerHTML = `
           <div> <a target ="_blank" href = ${data.html_url}><img src =${data.avatar_url}/></a><p>Username : ${data.login}</p></div>
            `
        
        }
        
    
    )
})
// const requestURL = 'https://api.github.com/repos/octocat/Hello-World/issues'

const sendRequest = (method, url) => {
    return new Promise ( (resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'

        xhr.onload = () => {
          if (xhr.status >= 400) {
              reject(xhr.response)
          } else {
              resolve(xhr.response)
          }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send()
    })
}

function search () {
    const user = document.getElementById('user').value
    const repo = document.getElementById('repo').value
    const requestURL = `https://api.github.com/repos/${user}/${repo}/issues`

    sendRequest('GET', requestURL)
        .then(data => render(data))
        .catch(err => console.log(err))
}

function render(data) {
    console.log(data)
    const div = document.getElementById('issues')

    data.forEach(object => {
        const el = document.createElement('div')
        el.innerHTML = `<p class="title">${object.title}</strong>
                        <p class="description">#${object.id} opened at ${object.created_at} by ${object.user.login}</p>
                        <p>comments: ${object.comments}</p>`
        div.append(el)
    })
}

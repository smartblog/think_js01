import { Interface } from 'readline'
import { promises } from 'fs'

interface Issue {
    title: string,
    number: number,
    html_url: string,
    created_at: string,
    user: User,
    comments: number
}

interface User {
    login: string
}

function search() {
    const user = (<HTMLInputElement>document.getElementById('user')).value
    const repo = (<HTMLInputElement>document.getElementById('repo')).value

    const divIssues = document.getElementById('issues')

    const requestURL = createRequestURL(user, repo)

    sendRequest('GET', requestURL)
        .then(data => render(divIssues, data))
        .catch(err => console.log(err))
}

function createRequestURL(user: string, repo: string): string {
    return `https://api.github.com/repos/${user}/${repo}/issues`
}

function sendRequest(method: string, url: string): Promise<any> {
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

function render(element: HTMLElement, data: Array<object>) {
    console.log(data)
    data.forEach( (object: Issue) => {
        const el = document.createElement('div')
        el.innerHTML = `<a href="${object.html_url}"><p class="title">${object.title}</p></a>
                        <p class="description">
                            #${object.number} opened at ${object.created_at}
                            by <span class="username">${object.user.login}</span>
                            <span>comments: ${object.comments}</span>
                        </p>`
        element.append(el)
    })
}

document.getElementById('search').addEventListener('click', search)
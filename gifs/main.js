API_KEY = '830VG8X4ZVQ2'
let controller = new AbortController();

const getData1 = async (query) => {
    const response = await fetch(`https://api.tenor.com/v1/search?q=${query}&key=${API_KEY}&limit=20`)
    return await response.json();
}

const GifsFactory = () => {
    let hiddenXHR

    return query => {
        if (hiddenXHR) {
            hiddenXHR.abort()
        }

        return new Promise ((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            hiddenXHR = xhr

            xhr.open("GET", `https://api.tenor.com/v1/search?q=${query}&key=${API_KEY}&limit=20`)

            xhr.onload = function () {
                if (xhr.status !== 200) {
                    reject(xhr.status);
                    return
                }
                resolve(JSON.parse(xhr.response))
            }

            xhr.send()
        })
    }
}

const getGifs = GifsFactory()

const getData2 = async (query) => {
    try {
        const data = await getGifs(query)
        renderGifs(data.results)
    } catch (err) {
        console.error('Something went wrong', err)
    }
}

const renderGifs = (array) => {
  const main = document.getElementById('gifs')
  main.innerHTML = ""

  array.forEach( gif => {
    const element = new DOMParser().parseFromString(`<div><img src=${gif.media[0].mediumgif.url}></div>`, 'text/html').body.children[0];

    main.append(element)
  })
}

document.querySelector('#main').addEventListener('input', (event) => {
    // getData1(event.target.value).then(resolve => render(resolve.results))
    getData2(event.target.value)
})

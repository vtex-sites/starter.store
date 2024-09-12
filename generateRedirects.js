const fs = require('fs')

const possibleDestinations = ['/4k-philips-monitor-99988213/p', '/aedle-vk1-headphone-99988211/p', '/echo-dot-smart-speaker-99988214/p']

function generateRandomString(prefix, length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const randomString = Array(length)
        .fill()
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join('')
    return prefix + randomString
}


function generateRedirects(amount) {
    const redirects = []
    for (let i = 0; i < amount; i++) {
        const source = generateRandomString('/produto/', 15)
        const destination = possibleDestinations[i % possibleDestinations.length]
        redirects.push({ source, destination, permanent: true })
    }

    return redirects
}

(function main() {
    const redirects = generateRedirects(10000)
    console.log(redirects)
    fs.writeFileSync('./src/redirects.json', JSON.stringify(redirects, null, 2))
})()


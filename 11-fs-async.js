const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task')
            }
            )
    })
})
console.log('starting next task')



const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('home page')
    } else if (req.url === '/about')  {
        // blocking code 
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('about page')
    } else {
        res.end('error page')
    }
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000')
})



const {readFile, read} = require('fs')
const { reject } = require('lodash')
const path = require('path')

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err,data) => {
            if (err) {
                reject(err)
            } else {
                resolve (data)
            }
        })
    })
}

getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
    
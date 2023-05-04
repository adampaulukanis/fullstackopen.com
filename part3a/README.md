# Part 3 A

In the course *Postman* is used. I do not want to use it, so I decided to go with *curl*.

## Using `curl`

Ex.:
`curl -i -X DELETE http://localhost:3001/api/notes/3`
`curl -d '{"name": "Adam"}' -H 'Content-Type: application/json' http://localhost:3001/api/notes`

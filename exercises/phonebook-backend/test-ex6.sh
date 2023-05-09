#!/bin/sh

curl -H 'Content-Type: application/json' \
    -d '{ "name": "Adam", "number": "123-555-0178" }' \
    -X POST http://localhost:3001/api/persons

# should throw an error: name must be unique
curl -H 'Content-Type: application/json' \
    -d '{ "name": "Adam", "number": "123-555-0178" }' \
    -X POST http://localhost:3001/api/persons

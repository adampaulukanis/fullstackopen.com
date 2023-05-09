#!/bin/sh

curl -H 'Content-Type: application/json' \
    -d '{ "name": "Adam", "number": "123-555-0178", "id": 123 }' \
    -X POST http://localhost:3001/api/persons

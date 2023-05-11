#!/bin/sh

curl -H 'Content-Type: application/json' \
    -d '{ "name": "Keller sie nazywam", "number": "123-555-0178" }' \
    -X POST http://localhost:3001/api/persons

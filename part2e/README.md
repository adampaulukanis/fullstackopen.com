# Adding styles to React app

Basically this part of the course took place in `../exercises/notes/`.

```
# in index.js:
import './index.css'

# in index.css:
div {
    background: green;
}
```

## inline styling in React

```
const MyComponent = () => {
    const myStyles = {
        color: "red",
        fontSize: 17
    }

    return (
        <div style={myStyles}>
            Hello there!
        </div>
    )
}
```

## Exercises

- phonebook step11
- phonebook step12
- exchange rate
- Data for countries step1
- Data for countries step2
- Data for countries step3

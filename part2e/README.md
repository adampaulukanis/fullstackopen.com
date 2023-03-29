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

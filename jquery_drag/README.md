Very minimized JQuery Drag plugin.

```
$el.drag({
    start: () => {
        console.log(this);
    },
    move: (cords) => {
        console.log(cords);
    },
    end: () => {
        console.log(this);
    }
});
```

### Very minimized JQuery Drag plugin.

##### How to use

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

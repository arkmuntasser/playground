---
theme: near-midnight
toc: false
---

# Weather Report

```js
const forecast = FileAttachment('./data/forecast.json').json();
```

```js
function temperaturePlot(data, {width} = {}) {
  return Plot.plot({
    title: "Hourly temperature forecast",
    width,
    x: {type: "utc", ticks: "day", label: null},
    y: {grid: true, inset: 10, label: "Degrees (F)"},
    marks: [
      Plot.lineY(data.properties.periods, {
        x: "startTime",
        y: "temperature",
        z: null, // varying color, not series
        stroke: "temperature",
        curve: "step-after"
      })
    ]
  });
}
```

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => temperaturePlot(forecast, {width}))}</div>
</div>

```css
div { display: block; }
```

```html echo
<div id="fart" class="poop" data-type="butt"></div>
```

```js echo
const butt = 'snarf';
```

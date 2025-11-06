# Call

```js echo
const [data, err] = await call(fetch('...'));
if (err) console.log(err);

async function call(promise) {
    let data, error;

    try {
        const res = await promise;
        data = await res.json();
    } catch(err) {
        error = err;
    }

    return [data, error];
}
```
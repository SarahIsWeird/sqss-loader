# sqss-loader

A webpack loader for [Structured Query Style Sheets](https://dthung1602.github.io/sqss/). Because who doesn't want to
use SQL to style their websites?

## Getting Started

```bash
npm install --save style-loader css-loader @dthung1602/sqss @sarahisweird/sqss-loader
```

Please refer to the [SQSS documentation](https://dthung1602.github.io/sqss/documentation.html#supported-features) on how
to use SQSS.

You also need to add the loader to your webpack config:

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.sql$/i,
                use: [ 'style-loader', 'css-loader', 'sqss-loader' ],
            },
        ],
    },
};
```

### Example

```sql
-- style.sql

UPDATE styles
    SET "background" = 'blue',
        "color" = 'white'
    WHERE id = 'root';
```

```js
// index.js

import './style.sql';

const root = () => {
    const element = document.createElement('div');
    
    element.id = 'root';
    element.innerText = 'I <3 SQL';
    
    return element;
};

document.body.appendChild(root());
```

## License

Distributed under the WTFPL license. See http://wtfpl.net/about/ for more details.

const sass = require('node-sass'),
    fs = require('fs');

sass.render(
    {
        file: "./style.scss"
    }, (err, res) => {
        if (err) {
            console.log(err.message);
        } else {
            fs.writeFileSync("stilos.css", res.css)
            let content = res.css.toString('utf-8')
            console.log(content);
        }
    }
)
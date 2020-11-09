const express = require('express')
const app = express()
const renderJSX = require('server-side-jsx')

app.get('/', async (req, res) => {
    
    let user = {
        name: 'Joel'
    }

    let page = await renderJSX(
        <div>
            <h1 className="header">
                {user.name}
            </h1>
            <a href={`http://www.google.com/?q=${user.name}`}>{user.name}</a>
            <p>Cool!</p>
        </div>
    )

    res.send(page)
})

app.listen(5000, () => {
    console.log('Listening on port 5000')
})
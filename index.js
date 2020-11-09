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
            <h2>Cool!</h2>
        </div>
    )

    res.send(page)
})

app.listen(5000, () => {
    console.log('Listening on port 5000')
})
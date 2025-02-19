import express from "express"

const app = express()
const PORT = 3001

app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>")
})

app.listen(PORT, ()=>{
  console.log(`Server started, http:://localhost:${PORT}/`)
})
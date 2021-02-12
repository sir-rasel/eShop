let fs = require('fs'); 

export default (req, res) => {
    if (req.method === 'POST') {
        let products = JSON.parse(req.body)

        fs.writeFile("_utilities/products.json",JSON.stringify(products),
          (err)=>{if(err)console.log(err)})
        res.status(201).json({})
    }
    else{
        let data = fs.readFileSync("_utilities/products.json",'utf8')
        res.status(200).json(JSON.parse(data))
    }
}
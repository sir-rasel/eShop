let fs = require('fs'); 

export default (req, res) => {
    if (req.method === 'POST') {
        let data = fs.readFileSync("_utilities/orders.json",'utf8')
        let orders = JSON.parse(data)
        let newOrder = JSON.parse(req.body)
        newOrder.id = orders.length + 1

        fs.writeFile("_utilities/orders.json",JSON.stringify([...orders,newOrder]),
          (err)=>{if(err)console.log(err)})
        res.status(201).json({id:newOrder.id})
    }
    else{
        let data = fs.readFileSync("_utilities/orders.json",'utf8')
        res.status(200).json(JSON.parse(data))
    }
}
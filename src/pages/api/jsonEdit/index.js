import fs from 'fs';

export default async (req, res) => {

    console.log(req, "reqqqqqqqqqqqqqqqq")

    let data = JSON.parse(fs.readFileSync('./public/db.json'));
  // your code to modify the data
  // ...
    data= req.body;
  // write the modified data back to the file
  fs.writeFileSync('./public/db.json', JSON.stringify(data));
  res.status(200).json({ message: 'Data updated successfully' });
    
} 

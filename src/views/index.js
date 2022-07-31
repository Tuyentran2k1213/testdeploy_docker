const express = require('express');
const app = express();

app.use(express.json());

app.listen("8080", () => {
    console.log("thành công")
})


// bắt đầu bằng "/" kết thúc không có dấu "/"
// request: nhận giá trị từ Front End
// respone: trả giá trị từ Back End về Front End

//GET
app.get("/test", (req, res) => {
    res.status(200).send("Nguyễn Văn A");
})

//GET value
//giá trị res.send() không được trả về number
app.get("/test/:hoTen/:lop", (req, res) => {
    const { hoTen, lop } = req.params;
    res.status(400).send("213");
})

const lstData = [{
    id: 1,
    hoTen: "Nguyễn A",
    lop: "1A"
},
{
    id: 2,
    hoTen: "Nguyễn C",
    lop: "3A"
}
]


//POST
app.post("/them", (req, res) => {
    const { id, hoTen, lop } = req.body;

    lstData.push({ id, hoTen, lop });

    res.status(200).send(lstData)
})

//PUT
app.put("/sua/:id",(req,res)=>{
    const { hoTen, lop } = req.body;
    const { id } = req.params;

    const index = lstData.findIndex(n=>n.id == id);
    lstData[index].hoTen=hoTen;
    lstData[index].lop=lop;

    res.status(200).send(lstData);
})

//DELETE
app.delete("/xoa/:id",(req,res)=>{
    const { id } = req.params;

    const index = lstData.findIndex(n=>n.id == id);
    lstData.splice(index,1);

    res.status(200).send(lstData);
})
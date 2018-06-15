'use strict';
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const studentsList=[
    {
        id:1,
        name:'sai',
        age:21,
        dept:'CSE'
    },
    {
        id:2,
        name:'sai',
        age:21,
        dept:'CSE'
    }
];
app.get('/api/index',(req,resp)=>{
    resp.json(studentsList);
});
app.post('/api/create',(req,res)=>{
    const new_student={
        id: studentsList.length+1,
        name:req.body.name,
        age:req.body.age,
        dept:req.body.dept
        
    };
    studentsList.push(new_student);
    res.json(new_student.id);

});
app.delete('/api/delete/:id',(req,res)=>{
    const deleteId=req.params.id;
     const sindex=studentsList.findIndex(students=>deleteId===students.id);
     studentsList.splice(sindex,1);
    res.json(deleteId);
});
app.patch('/api/update/:id',(req,res)=>{
    const updateId=req.params.id;
     const sindex=studentsList.findIndex(students=>updateId===students.id);
     studentsList[sindex].name=req.body.name;
    res.json(studentsList);
});

app.listen(5002);
const Employee = require('../models/employee');


module.exports.create = (req,res) => {
    // const url = req.protocol + '://'+ req.get("host");  
    // if(!req.file) {
    //     return res.status(500).send({ message: 'Upload fail'});
    // }
    const employee = new Employee({
        name:req.body.name,
        age:req.body.age,
        job_description:req.body.job_description,
        salary:req.body.salary,
        department:req.body.department
        // imagePath: url + "/images/"+req.file.filename  
    });
    try {
        employee.save().then(result => {
            res.status(201).send({
                msg: "Employee added to database"
                // imagePath:result.imagePath
            })
        });
        
    } catch (error) {
        res.status(500).send({msg:error});
    }
}

module.exports.getEmp = async (req,res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).send(employees);
    } catch (error) {
        res.status(500).send({msg: error});
    }
}

module.exports.getOneEmp = async (req,res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findById(id);
        res.status(200).send(employee);
    } catch (error) {
        res.status(400).send({msg:error});
    }
}

module.exports.updateEmp = async (req,res) => {
    try {
        const {id} = req.params;
        await Employee.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
        res.status(200).send({msg:'Updated successfully'});
    } catch (error) {
        res.status(400).send({msg:error});
    }
}

module.exports.deleteEmp = async (req,res) => {
    try {
        const {id} = req.params;
        await Employee.findByIdAndDelete(id);
        res.status(200).send({msg:"Employee deleted successfully"});
    } catch(error) {
        res.status(500).send({msg: error});
    }
}
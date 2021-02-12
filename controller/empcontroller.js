/* //For MySQL
const con = require('../configuration/mysql-config');

//For MySQL
exports.getEmpDetails = (req, res, next) =>{
	 con.query("select * from emp", (err, rows) => {
		 if(err) throw err;
		 res.status(200).json(rows);
	 });
}

//For MySQL
 exports.saveEmpDetails = (req, res, next) => {
    const empid = req.body.empid;
     const empname = req.body.empname;
     const empdept = req.body.empdept;
     const addr = req.body.addr;
     const contact = req.body.contact;
     var values = [empid, empname, addr, contact, empdept];
     con.query("insert into emp values (?)", [values], (err, result) => {
      if(err) throw err;
      res.status(200).json(result);
   });
 }
 
 //For MySQL
  exports.getEmpRecord = (req, res, next) => {
	 const id = req.params.id;
     //res.status(200).json({tid:id});
     con.query(`select * from emp where empid=${id}`, (err, rows) => {
        if(err) throw err;
        res.status(200).json(rows);
    });
 }

exports.delEmpDetails = (req, res, next) => {
    const id = req.params.id;
    //res.status(200).json({tid:id});
    con.query(`delete from emp where empid=${id}`, (err, rows) => {
       if(err) throw err;
       res.status(200).json(rows);
   });
} */
 //For MongoDB
const Emp = require('../model/Emp');

exports.getEmpDetails = async (req, res, next) => {
      try{
         const emps = await Emp.find();
         res.json(emps);
      }catch(error){
         res.json({msg: error});
      }
 }

 exports.saveEmpDetails = async (req, res, next) => {

    const empid = req.body.empid;
     const empname = req.body.empname;
     const empdept = req.body.empdept;
     const addr = req.body.addr;
     const contact = req.body.contact;
  
   const emp = new Emp({
    empid:empid,
    empname:empname,
    empdept:empdept,
    addr:addr,
    contact:contact
   });

   try{
      const saveEmp = await emp.save();
      res.json(saveEmp);
   }catch(error){
      res.json({msg: error});
   }
}

exports.getEmpRecord = async (req, res, next) => {
   var empid = req.params.id;
   try{
      const emp = await Emp.find({empid:empid});
      res.json(emp);
   }catch(error){
      res.json({msg: error});
   }
}

exports.delEmpDetails = async (req, res, next) => {
   var empid = req.params.id;
   try{
      const emp = await Emp.remove({empid:empid});
      console.log(emp);
      res.json(emp);
   }catch(error){
      res.json({msg: error});
   }
}

//Not Working - Need Help!
/* exports.updateToy = async (req, res, next) => {
   var tname = req.body.name;
   var ttype = req.body.type;
   try{
      const toy = await Toy.put({toy_name:tname, $set: {toy_type:ttype} });
      console.log(toy);
      res.json(toy);
   }catch(error){
      res.json({msg: error});
   }
} */
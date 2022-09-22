import Admin from '../models/adminModel.js';


import {signuser} from "../lib/jwt.js"

export const loginController = async (req, res) => {
    try {
        const admin = await Admin.find()
        const { gmail, password } = req.body
        const sortAdmin = admin.find(e =>e.gmail === gmail && e.password === password)
        console.log(sortAdmin,gmail,password)
    
        if (!sortAdmin) {
            res.send("gmail or password is not true")
            return
        }
        
        const token = signuser({ adminId: sortAdmin._id, name: sortAdmin.gmail })
        res.status(200).send({
            stutus:200,
            token: token,
            idAdmin:sortAdmin.isAdmin
        })
    
    } catch (error) {
        console.log(error);
    }
}

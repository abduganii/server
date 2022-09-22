import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    gmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default:false
    }
})

const Admin = mongoose.model("Admin", adminSchema)

export default Admin;
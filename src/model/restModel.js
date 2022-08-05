//import mongoose
import mongoose from 'mongoose';

//create a mongoDB schema
const schema = mongoose.Schema;

//export the schema
export const UserSchema = new schema({

    //database item and its datatype
    name: {
        type: String,

        //this specifies that the name field is required
        required: 'Please enter a name.'
    },

    email: {
        type: String,
        required: 'Please enter email.'
    },

    password: {
        type: String,
        required: 'Please enter password.'
    },

    user_type: {
        type: String,
        required: 'user_type is missing.'
    },


    //this holds the creation date of a database object
    creation_date: {
        type: Date,
        //default specifies that this field is automatically inserted
        //no input is required from the user
        default: Date.now
    }
});
//import required functions from restController
import {
    addUser,
    getUsers,
    getUserByID,
    updateUserByID,
    deleteUserByID
} from '../controller/restController.js';

//Specific routes for different endpoints 
// such as get, post, delete and put
const allRoutes = (app) => {

    // we use student to get a list of all students or post a new student
    app.route('/users')

    // call the getUsers function
    .get(
        getUsers
    )

    //call the addUser function
    .post(
        addUser
    );

    // we pass studentID to get, delete and update a specific student
    app.route('/users/:userID')

    .get(
        getUserByID
    )

    .delete(
        deleteUserByID
    )

    .put(
        updateUserByID
    );
}

//export the allRoutes function so index.js can use it
export default allRoutes;
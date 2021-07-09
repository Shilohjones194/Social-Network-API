// Require Users Model
const { Users } = require('../models');

// Set up Users Controller
const usersController = {

    // Create a new User
    createUsers({ body }, res) {
        Users.create(body)
        //Error message for testing
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => res.status(400).json(err));
    },


    // // Get All Users
    getAllUsers(req, res) {
        Users.find({})

        .then(dbUsersData => res.json(dbUsersData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);S
        });

    },


    // Get single user by ID
    getUsersById({ params }, res) {
        Users.findOne({_id: params.id})

        // return if no user is found
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
            res.json(dbUsersData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },


    // Update a current User by ID
    updateUsers({ params, body }, res) {
        Users.findOneAndUpdate({})

        //Error message for testing
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: 'No User with this ID!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err))
    },


    // Delete User: // compared with docs and from Class
    deleteUsers({ params }, res) {
        Users.findOneAndDelete({ _id: params.id })

            //Error message for testing
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User with this ID!' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.status(400).json(err));
    },
    

    // add friend
    addFriend({ params }, res) {
        Users.findOneAndUpdate({})

        //Error message for testing
        .then(dbUsersData => {
            if (!dbUsersData) {
                res.status(404).json({message: 'No User with this ID!'});
                return;
            }
            res.json(dbUsersData);
        })
        .catch(err => res.json(err));
    },

    // Delete a current friend :,(
    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({})


        //Error message for testing
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: 'No User with this particular ID!'});
                return;
            }
            res.json(dbUsersData);
        })
        .catch(err => res.status(400).json(err));
}

};

// Export module Users controller
module.exports = usersController;
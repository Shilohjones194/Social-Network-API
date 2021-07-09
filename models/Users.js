const { Schema, model } = require('mongoose');

// const UsersSchema = new Schema(
//     {
//         username: {
//             type: String,
//             trim: true
//         },
//         email: {
//             //this is going to need the REGEX to validate this email.

//         },
//         thoughts: {
//             //thoughts is going to be referring back to the Thoughts.js
//         },
//         friends: {

//         }

//     },
//     {
//         //reference below from class:
//         toJSON: {
//             virtuals: true,
//             getters: true,
//         },
//         id: false
//     },
// );
// // not 100% on the crud below.

// UsersSchema.virtual().get(function() {
//     return this.
// });

// create the Users model using the Users Schema
const Users = model('Users', UsersSchema);

//Export Users back to the index.js
module.exports = Users;
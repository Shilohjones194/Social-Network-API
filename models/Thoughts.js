// this is going to hold my Thought Schema & Reaction Schema
//need to include module
const { Schema, Types } = require('mongoose');

// Going to need to review moment docs

// Thought Schema

// const ThoughtSchema = new Schema(
//     {
//         thoughtText: {
//             type: String,
//             required: true,
//             minlength: 1,
//             maxlength: 200
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         // createdAt: {
//         //     type: Date,
//         //     defaultStatus: Date.now,
//         //     // get: ()
//         // },
//         // {
//         toJSON: {
//             virtuals: true,
//             getters: true
//         },
//         id: false
//     }
// );



// // Reaction Schema
// const ReactionSchema = new Schema(
//     {
//         reactionId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId()
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         // //review Mongoose/Moment docs for syntax:
//         // createdAt: {
//         //     type: Date,
//         //     default: Date.now
//         //     //get: () =>
//         // }
//     },
//     {
//         toJSON: {
//             getters: true
//         }
//     }

// );




// // double check syntax from class: 
// ThoughtsSchema.virtual('').get(function() {
//     return this.;
// });

module.exports = Thoughts;
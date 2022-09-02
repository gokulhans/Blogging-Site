const { ObjectId } = require('mongodb');
const db = require('../connection');


const getUserProfile = async function (req, res, next) {
    let user = req.session.user
    let data = await db.get().collection('blogs').find({ author:(user.user.name) }).toArray()
    console.log(data);
    res.render('pages/profile', { data, user });
}

// const getUserAddform = async function (req, res) {
//     res.render('forms/adduser');
// }

// const addUser = async function (req, res) {
//     let data = req.body
//     await db.get().collection('data').insertOne(data)
//     res.render('pages/user', { data })
// }

// const getUserEditform = async function (req, res) {
//     let id = req.params.id
//     let data = await db.get().collection('data').findOne({ _id: ObjectId(id) })
//     res.render('forms/edituser', { data });
// }

// const editUser = async function (req, res) {
//     let newdata = req.body
//     let query = { _id: ObjectId(req.body.id) }
//     var newvalues = { $set: { name: newdata.name, desc: newdata.desc } };
//     await db.get().collection('data').updateOne(query, newvalues)
//     res.redirect(`/user/${req.body.id}`)
// }

// const deleteUser = async function (req, res) {
//     let id = req.params.id
//     await db.get().collection('data').deleteOne({ _id: ObjectId(id) })
//     res.redirect('back')
// }

// const getUserById = async function (req, res) {
//     let id = req.params.id
//     let data = await db.get().collection('data').findOne({ _id: ObjectId(id) })
//     res.render('pages/user', { data });
// }


exports.getUserProfile = getUserProfile;



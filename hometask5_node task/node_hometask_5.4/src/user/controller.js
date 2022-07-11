const pool = require('../../db')
const queries = require('./queries')

const getusers = (req, res) => {
    console.log(queries.getUsers, "getting students");
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getusersbyid = (req, res) => {
    const id = req.params.id;
    console.log(queries.getUsersByID, "getting students by ID");
    pool.query(queries.getUsersByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const postuser = (req, res) => { }

const updateuserbyid = (req, res) => { }

const deleteuserbyid = (req, res) => {
    const id = req.params.id;
    pool.query(queries.deleteUsersByID, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getusers,
    getusersbyid,
    postuser,
    updateuserbyid,
    deleteuserbyid
}
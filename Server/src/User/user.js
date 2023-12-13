"use strict";

const express = require("express");
let router = express.Router();
var db = require('../db');

router
    .route("/")
    .post(async(req, res) => {
        let person_id = Number(req.body.person_id);
        let query = `INSERT INTO person (person_id) VALUES (${person_id});`;
        try {
            const [rows] = await db.query(query);
            console.log(rows);
            res.status(200).json(rows)
        } catch(err) {
            console.log(err);
            res.status(400).json({"err": "Couldnt Create User"})
        }
    })

router
    .route("/createGroup")
    .post(async(req, res) => {
        let person_id = Number(req.body.user_id);
        let query = `INSERT INTO 'group' (group_id, person_id)
        VALUES ((SELECT IFNULL(MAX(group_id), 0) + 1 FROM 'group'), ${person_id});`;
        try {
            const [rows] = await db.query(query);
            console.log(rows);
            res.status(200).json(rows)
        } catch(err) {
            console.log(err);
            res.status(400).json({"err": "Couldnt Create Group"})
        }
    })

router
    .route("/group")
    .post(async(req, res) => {
        let person_id = Number(req.body.person_id);
        let group_id = Number(req.body.group_id);
        let query = `INSERT INTO 'group' (group_id, person_id) VALUES (${group_id}, ${person_id});`;
        try {
            const [rows] = await db.query(query);
            console.log(rows);
            res.status(200).json(rows)
        } catch(err) {
            console.log(err);
            res.status(400).json({"err": "Couldnt Add to Group"})
        }
    })
    .get(async(req, res) => {
        let person_id = Number(req.body.person_id);
        let query = `SELECT group_id FROM 'group' WHERE person_id = ${person_id}`;
        try {
            const [rows] = await db.query(query);
            res.status(200).json(rows)
            
        } catch (error) {
            res.status(400)
        }
    })

module.exports = router;
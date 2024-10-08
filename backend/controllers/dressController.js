import { log } from "console";
import dressModel from "../models/dressModel.js";
import fs from 'fs';

// add dress item
const addDress = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const dress = new dressModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await dress.save();
        res.json({success: true, message: "Dress Added"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};

// all dress list
const listDress = async (req, res) => {
    try {
        const dresses = await dressModel.find({});
        res.json({success: true, data: dresses});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};


// remove dress item
const removeDress = async (req, res) => {
    try {
        const dress = await dressModel.findById(req.body.id);
        fs.unlink(`uploads/${dress.image}`, () => {});

        await dressModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Dress Removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};

export {addDress, listDress, removeDress};
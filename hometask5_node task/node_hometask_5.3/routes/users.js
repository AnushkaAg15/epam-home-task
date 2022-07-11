import express from "express";
import {getUserById, createUser, updateUser, getAllUsers, deleteUser, getAutoSuggestedUser} from "../controllers/users.js";
import validateUser from "../validation/userValidation.js";

const router = express.Router();

router.get("/",getAllUsers);
router.get("/",getAutoSuggestedUser);
router.get("/:id", getUserById);
router.post("/",validateUser,createUser);
router.patch("/:id",validateUser,updateUser);
router.delete("/:id",validateUser,deleteUser);

export default router;
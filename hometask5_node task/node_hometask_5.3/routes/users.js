import express from "express";
import {getUserById, createUser, updateUser, getAllUsers, deleteUser, getAutoSuggestedUser} from "../controllers/users.js";
import validateUser from "../validation/userValidation.js";

const router = express.Router();

router.get("/",getAllUsers);
router.get("/",getAutoSuggestedUser);
router.get("/:id", getUserById);
router.post("/",validateUser,createUser);
router.patch("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;
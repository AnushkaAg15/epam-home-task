import joi from "joi";

const schema = joi.object({
  login: joi.string().required(),
  password: joi.string().alphanum().required(),
  age:joi.number().min(4).max(130).required(),
});

const validateUser = (req, res, next) => {
  const result = schema.validate(req.body);
  if(result.error) {
    return res.status(400).json({
      message: result.error.details[0].message
    })
  } else{
    if(!req.value) {
      req.value = {};
    }
    req.value["body"] = result.value;
    next();
  }
}

export default validateUser;
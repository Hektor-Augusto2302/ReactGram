const { body } = require("express-validator");

const photoInsertValidation = () => {
    return [
        body("title")
            .not()
            .equals("undefined")
            .withMessage("O titulo é obrigatório.")
            .isString()
            .withMessage("O titulo é obrigatório.")
            .isLength({ min: 3 })
            .withMessage("O titulo precisa no minimo três caracteres."),
        body("image").custom((value, { req }) => {
            if (!req.file) {
                throw new Error("A imagem é obrigatória.");
            }

            return true;
        })
    ]
};

const photoUpdateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("O titulo é obrigatório.")
            .isLength({ min: 3 })
            .withMessage("O titulo precisa no minimo três caracteres."),
    ]
};

const commentValidation = () => {
    return [
        body("comment")
            .isString()
            .withMessage("O comentario é obrigatorio."),
    ]
}

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation,
}
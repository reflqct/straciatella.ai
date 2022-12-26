class TransformationInputInvalid extends Error {    
    constructor(message, type) {
        super(message);
        this.name = "TransformationInputInvalidError";
        this.type = type;
    }
}
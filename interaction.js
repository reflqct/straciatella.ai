module.exports = {
    transformInput(input) {
        result = [0, 0, 0, 0] 
        if (input.type != Array) { 
            throw new TransformationInputInvalid('transformation input is not an array', 'non-array input')
        } else if (input.length != 4) {
            throw new TransformationInputInvalid('more than 4 items parsed to transformInput', 'unconventional length input')
        } else {
            for (i = 0; i < input.length; i++) {
                if (input[i] = UserDetail.SUSPICIOUS) {
                    result[i] = 1
                } else if (input[i] = UserDetail.NORMAL) {
                    result[i] = 0
                } else {
                    throw new TransformationInputInvalid('different type from UserDetail found in array', 'userdetail ignorance')
                }
            }
        }

        return result
    }
    
}
const { passwordGenerator } = require("./passwordGenerator");

const passwordFunction = async (object) => {
    if (!typeof object.lowercase == "boolean" || !typeof object.uppercase == "boolean" || !typeof object.numbers == "boolean" || !typeof object.symbols == "bolean") {
        return {
            status: false,
            error: {
                title: "Unknown Element!",
                text: "This application only supports boolean type elements."
            }
        };
    }
    if (!object.lowercase && !object.uppercase && !object.numbers && !object.symbols) {
        return {
            status: false,
            error: {
                title: "Insufficient elements!",
                text: "Select at least one of the elements below to generate a password."
            }
        };
    }

    if (isNaN(object.length)) {
        return {
            status: false,
            error: {
                title: "Unknown Elements!",
                text: "This application only receives numbers as password length."
            }
        };        
    }

    if (object.length > 60 || object.length < 6) {
        return {
            status: false,
            error: {
                title: "Unknown Elements!",
                text: "Our generator caters for characters between 6 and 60 elements only."
            }
        }; 
    };
    
    

    return await passwordGenerator(object);
}

module.exports = {
    passwordFunction
}
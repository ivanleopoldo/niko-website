import validator from "validator";
import { options } from '../constants';

function ValidationHandler(handler, setErrorState, provinces){
    return{
        validate: function(event, name, value){
            switch(name){
                case 'email':{
                    if(!validator.isEmail(value)){
                        setErrorState(name, "Please input a valid email address");
                    } else if(validator.isEmpty(value)){
                        setErrorState(name, "Required");
                    } else {
                        setErrorState(name);
                    }
                    handler.LoginInfoHandler().handleEmail(event);
                    break;
                }
                case 'password':{
                    if(!validator.isStrongPassword(value, options.password)){
                        setErrorState(name, `Password must have a minimum of: ${options.password.minLength} characters, ${options.password.minNumbers} numbers, ${options.password.minSymbols} symbols, ${options.password.minUppercase} Uppercase letter`);
                    } else if(validator.isEmpty(value)){
                        setErrorState(name, "Required");
                    } else if(value.length < 5){
                        setErrorState(name, "Password must be at least 5 characters");
                    } else {
                        setErrorState(name);
                    }
                    handler.LoginInfoHandler().handlePassword(event);
                    break;
                }
                case 'province':{
                    if(value === null){
                        setErrorState(name, "You must select a province");
                    } else {
                        setErrorState(name);
                    }
                    handler.LocationInfoHandler().handleProvince(event, provinces);
                    break;
                }
                case 'city':{
                    if(value === null){
                        setErrorState(name, "You must select a province");
                    } else {
                        setErrorState(name);
                    }
                    handler.LocationInfoHandler().handleCity(event);
                    break;
                }
                case 'address':{
                    if(validator.isEmpty(value)){
                        setErrorState(name, "Required");
                    } else {
                        setErrorState(name);
                    }
                    handler.LocationInfoHandler().handleAddress(event);
                    break;
                }
                case 'zipCode':{
                    if(validator.isEmpty(value)){
                        setErrorState(name, "Required");
                    } else if(!validator.isPostalCode(value, options.locale.postal)){
                        setErrorState(name, "Zip Code does not exist");
                    } else if(value.length < 4){
                        setErrorState(name, "Zip Code must be at least 4 digits");
                    } else {
                        setErrorState(name);
                    }
                    handler.LocationInfoHandler().handleZipCode(event);
                    break;
                }
                case 'firstName':{
                    if(validator.isEmpty(value)){
                        setErrorState(name, "Required");
                    } else {
                        setErrorState(name);
                    }
                    handler.BasicInfoHandler().handleFirstName(event);
                    break;
                }
                case 'lastName':{
                    if(validator.isEmpty(value)){
                        setErrorState(name, "Required");
                    } else {
                        setErrorState(name);
                    }
                    handler.BasicInfoHandler().handleLastName(event);
                    break;
                }
                case 'phoneNumber':{
                    if(value.length < 10 || value.length > 10 || !value.startsWith('9')){
                        setErrorState(name, "Please input a valid phone number");
                    } else {
                        setErrorState(name);
                    }
                    handler.BasicInfoHandler().handlePhoneNumber(event);
                    break;
                }
                default:{
                    break;
                }
            }
        }
    }
}

export default ValidationHandler;
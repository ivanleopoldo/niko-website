import validator from "validator";
import { validatorOptions } from "../../config/constants";

function ValidationHandler(handler, setErrorState, provinces = []) {
  return {
    validateSignUp: function (event, name, value) {
      switch (name) {
        case "email": {
          if (!validator.isEmail(value)) {
            setErrorState(name, "Please input a valid email address");
          } else if (validator.isEmpty(value)) {
            setErrorState(name, "Required");
          } else {
            setErrorState(name);
          }
          handler.LoginInfoHandler(event);
          break;
        }
        case "password": {
          if (!validator.isStrongPassword(value, validatorOptions.password)) {
            setErrorState(
              name,
              `Password must have a minimum of: ${validatorOptions.password.minLength} characters, ${validatorOptions.password.minNumbers} numbers, ${validatorOptions.password.minSymbols} symbols, ${validatorOptions.password.minUppercase} Uppercase letter`
            );
          } else if (validator.isEmpty(value)) {
            setErrorState(name, "Required");
          } else if (value.length < 5) {
            setErrorState(name, "Password must be at least 5 characters");
          } else {
            setErrorState(name);
          }
          handler.LoginInfoHandler(event);
          break;
        }
        case "province": {
          if (value === null) {
            setErrorState(name, "You must select a province");
          } else {
            setErrorState(name);
          }

          const selected = provinces.find((entry) => entry.name === value);

          handler.LocationInfoHandler(event, selected);
          break;
        }
        case "city": {
          if (value === null) {
            setErrorState(name, "You must select a province");
          } else {
            setErrorState(name);
          }
          handler.LocationInfoHandler(event);
          break;
        }
        case "address": {
          if (validator.isEmpty(value)) {
            setErrorState(name, "Required");
          } else {
            setErrorState(name);
          }
          handler.LocationInfoHandler(event);
          break;
        }
        case "zipCode": {
          if (validator.isEmpty(value)) {
            setErrorState(name, "Required");
          } else if (
            !validator.isPostalCode(value, validatorOptions.locale.postal)
          ) {
            setErrorState(name, "Zip Code does not exist");
          } else if (value.length < 4) {
            setErrorState(name, "Zip Code must be at least 4 digits");
          } else {
            setErrorState(name);
          }
          handler.LocationInfoHandler(event);
          break;
        }
        case "firstName": {
          if (validator.isEmpty(value)) {
            setErrorState(name, "Required");
          } else {
            setErrorState(name);
          }
          handler.BasicInfoHandler(event);
          break;
        }
        case "lastName": {
          if (validator.isEmpty(value)) {
            setErrorState(name, "Required");
          } else {
            setErrorState(name);
          }
          handler.BasicInfoHandler(event);
          break;
        }
        case "phoneNumber": {
          if (
            value.length < 10 ||
            value.length > 10 ||
            !value.startsWith("9")
          ) {
            setErrorState(name, "Please input a valid phone number");
          } else {
            setErrorState(name);
          }
          handler.BasicInfoHandler(event);
          break;
        }
        case "specialization": {
          if (value === null) {
            setErrorState(name, "Please choose a specialization");
          } else {
            setErrorState(name);
          }
          handler.FreelancerInfo(event);
          break;
        }
        case "certificateImage": {
          if (value === null) {
            setErrorState(name, "Please upload an image of your certification");
          }

          handler.FreelancerInfo(event);
          break;
        }
        default: {
          break;
        }
      }
    },
    validateSignIn: function (event, name, value) {
      switch (name) {
        case "email": {
          if (validator.isEmpty(value)) {
            setErrorState(name, "Required");
          } else if (!validator.isEmail(value)) {
            setErrorState(name, "Please input a valid email");
          } else {
            setErrorState(name);
          }

          handler.LoginInfoHandler().handleEmail(event);
          break;
        }
        case "password": {
          if (validator.isEmpty(value)) {
            setErrorState(name, "Required");
          } else if (value.length < 5) {
            setErrorState(name, "Password must be at least 5 characters");
          } else {
            setErrorState(name);
          }

          handler.LoginInfoHandler().handlePassword(event);
          break;
        }
        default:
          break;
      }
    },
  };
}

export default ValidationHandler;

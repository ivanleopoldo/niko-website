const validatorOptions = {
    password: {
        minLength: 6,
        minSymbols: 1,
        minUppercase: 1,
        minNumbers: 1,
    },
    locale: {
        phone: "en-PH",
        postal: "any",
    },
};

export { validatorOptions };

function RegisterController(connection) {
    return {
        signUp: function (info) {
            connection.addData(info);
        },
        signUpWithGoogle: function () {},
    };
}

export default RegisterController;

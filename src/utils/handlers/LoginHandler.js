function LoginHandler(callback, loginInfo) {
    return {
        LoginInfoHandler: function () {
            return {
                handleEmail: function (event) {
                    callback({
                        ...loginInfo,
                        email: event.target.value,
                    });
                },
                handlePassword: function (event) {
                    callback({
                        ...loginInfo,
                        password: event.target.value,
                    });
                },
            };
        },
    };
}

export default LoginHandler;

function RegisterHandler(callback, info) {
    return {
        LoginInfoHandler: function (e) {
            callback({
                ...info,
                loginInfo: {
                    ...info.loginInfo,
                    [e.target.name]: e.target.value,
                },
            });
        },
        BasicInfoHandler: function (e) {
            callback({
                ...info,
                basicInfo: {
                    ...info.basicInfo,
                    [e.target.name]: e.target.value,
                },
            });
        },
        LocationInfoHandler: function (e, selected = []) {
            var province = {
                ...info,
                locationInfo: {
                    ...info.locationInfo,
                    provName: selected.name,
                    provCode: selected.provCode,
                },
            };

            var newDict = {
                ...info,
                locationInfo: {
                    ...info.locationInfo,
                    [e.target.name]: e.target.value,
                },
            };

            callback(selected.length > 1 ? province : newDict);
        },
        FreelancerInfoHandler: function (e) {
            callback({
                ...info,
                freelanceInfo: {
                    ...info.freelanceInfo,
                    [e.target.name]: e.target.value,
                },
            });
        },
    };
}

export default RegisterHandler;

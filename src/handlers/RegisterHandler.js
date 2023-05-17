
function RegisterHandler(callback, info){
    return {
        LoginInfoHandler: function(){
            return {
                handleEmail: function(e){
                    callback({
                        ...info,
                        loginInfo: {
                            ...info.loginInfo,
                            email: e.target.value,
                        }
                    });
                },
                handlePassword: function(e){
                    callback({
                        ...info,
                        loginInfo: {
                            ...info.loginInfo,
                            password: e.target.value,
                        }
                    });
                }
            }
        },
        BasicInfoHandler: function(){
            return {
                handleFirstName: function(e){
                    callback({
                        ...info,
                        basicInfo: {
                            ...info.basicInfo,
                            firstName: e.target.value,
                        }
                    });
                },
                handleLastName: function(e){
                    callback({
                        ...info,
                        basicInfo: {
                            ...info.basicInfo,
                            lastName: e.target.value,
                        }
                    });
                },
                handlePhoneNumber: function(e){
                    callback({
                        ...info,
                        basicInfo: {
                            ...info.basicInfo,
                            phoneNumber: e.target.value,
                        }
                    });
                },
                handleBio: function(e){
                    callback({
                        ...info,
                        basicInfo: {
                            ...info.basicInfo,
                            bio: e.target.value,
                        }
                    });
                },
                handleProfImage: function(e){
                    callback({
                        ...info,
                        basicInfo: {
                            ...info.basicInfo,
                            profImage: e.target.value,
                        }
                    });
                },
                handleIsFreelance: function(e){
                    callback({
                        ...info,
                        basicInfo: {
                            ...info.basicInfo,
                            isFreelancer: e.target.checked,
                        }
                    });
                }
            }
        },
        LocationInfoHandler: function(){
            return {
                handleProvince: function(e, provinces){
                    const selected = provinces.find((entry) => entry.name === e.target.value);
                    callback({
                        ...info,
                        locationInfo: {
                            ...info.locationInfo,
                            provName: selected.name,
                            provCode: selected.prov_code,
                        }
                    });
                },
                handleCity: function(e){
                    callback({
                        ...info,
                        locationInfo: {
                            ...info.locationInfo,
                            city: e.target.value,
                        }
                    });
                },
                handleAddress: function(e){
                    callback({
                        ...info,
                        locationInfo: {
                            ...info.locationInfo,
                            address: e.target.value,
                        }
                    });
                },
                handleWorkAddress: function(e){
                    callback({
                        ...info,
                        locationInfo: {
                            ...info.locationInfo,
                            workAddress: e.target.value,
                        }
                    });
                },
                handleZipCode: function(e){
                    callback({
                        ...info,
                        locationInfo: {
                            ...info.locationInfo,
                            zipCode: e.target.value
                        }
                    });
                }
            }
        },
        FreelancerInfoHandler: function(){
            return {
                handleBasePrice: function(e){
                    callback({
                        ...info,
                        freelanceInfo: {
                            ...info.freelanceInfo,
                            basePrice: parseInt(e.target.value),
                        }
                    });
                },
                handleCertificateImage: function(e){
                    callback({
                        ...info,
                        freelanceInfo: {
                            ...info.freelanceInfo,
                            certificateImage: e.target.value,
                        }
                    });
                }
            }
        }
    }
}

export default RegisterHandler;
function RegisterController(auth, connection) {
  return {
    signUp: function (info) {
      connection.addData(auth.currentUser.uid, {
        ...info,
        basicInfo: {
          ...info.basicInfo,
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          profImage: auth.currentUser.photoURL,
          uid: auth.currentUser.uid,
        },
      });
    },
  };
}

export default RegisterController;

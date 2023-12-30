import { createUserWithEmailAndPassword } from "../../config";

function RegisterController(auth, connection) {
  return {
    signUp: function (info) {
      createUserWithEmailAndPassword(
        auth,
        info.loginInfo.email,
        info.loginInfo.password
      )
        .then(() => {
          connection.addData(auth.currentUser.uid, info);
        })
        .catch((err) => console.log(err.message));
    },
  };
}

export default RegisterController;

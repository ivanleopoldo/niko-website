function LoginController(auth, loginInfo) {
  return {
    handleSignIn: async function (e) {
      e.preventDefault();
      await auth.signIn(loginInfo.email, loginInfo.password);
    },
    handleGoogleSignIn: async function () {
      try {
        await auth.signinWithGoogle();
      } catch (err) {
        console.log(err);
      }
    },
  };
}

export default LoginController;

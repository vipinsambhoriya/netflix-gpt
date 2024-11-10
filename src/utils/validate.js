export const checkValidData = (email, password) => {
  const isEmailValid =
    /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Id not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};

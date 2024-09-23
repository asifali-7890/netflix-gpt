export const checkValidateData = (email, password) => {
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isEmailValid = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/.test(email);

    if (!isEmailValid) return 'Email is not valid';
    if (!isPasswordValid) return "Password is not valid";

    return null;
}

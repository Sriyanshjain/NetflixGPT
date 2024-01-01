export const checkIfDataValid=(email,password)=>{
    const emailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValid)
    return "Please enter a valid email"
    if(!passwordValid)
    return "Choose a stronger password"

    return null;

}

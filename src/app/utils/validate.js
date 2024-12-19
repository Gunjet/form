export const validateStepOne=(form)=>{
    let isValid = true;
    let newErrors={
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    };
    if (form.firstName===''){
        isValid=false;
        newErrors.firstName='This field cannot be left empty.'
    }
    if (form.lastName===''){
        isValid=false;
        newErrors.lastName='This field cannot be left empty.'
    }
    if (form.password===''){
        isValid=false;
        newErrors.password='This field cannot be left empty.'
    }
    if (form.password.length<8){
        isValid=false;
        newErrors.password='This field cannot be left empty.'
    }
    if (form.confirmPassword===''){
        isValid=false;
        newErrors.password='This field cannot be left empty.'
    }
    if (form.confirmPassword !== form.password){
        isValid=false;
        newErrors.password='Password should be match'
    }
    return{isValid, newErrors}
}
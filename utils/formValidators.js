export const credentialsValidator = (formData) => {
    const errors = {};
  
    if (!formData.iam) {
      errors.iam = 'Please select who you are';
    }
  
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!formData.country) {
      errors.country = 'Country is required';
    }
  
    if (!formData.phoneNo.trim() && !formData.email.trim()) {
      errors.contactInfo = 'Phone Number or Email is required';
     
    } else if(!formData.phoneNo.trim()&& !/\S+@\S+\.\S+/.test(formData.email)){

      errors.email = 'Email is invalid';
    }

    else if(!formData.email.trim()&&!/^\d{10}$/.test(formData.phoneNo)){
      errors.phoneNo = 'Phone Number must be 10 digits';
    }

   
    return errors;
  };
  
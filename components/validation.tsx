export const validateName = (name) => {
    if (!name) return 'Name is required';
    if (!/[^a-zA-Z\s]/g.test(name)) return 'Name must be alphabet';
    return null;
    return null;
  };
  
  export const validateMobile = (mobile) => {
    if (!mobile) return 'Mobile number is required';
    if (!/^\d+$/.test(mobile)) return 'Mobile number must be numeric';
    return null;
  };
  
  export const validateAge = (age) => {
    if (!age) return 'Age is required';
    if (!/^\d+$/.test(age)) return 'Age must be numeric';
    return null;
  };
  
  export const validateGender = (gender) => {
    if (!gender) return 'Gender is required';
    return null;
  };
  
  export const validateDiabetes = (diabetes) => {
    if (!diabetes) return 'Diabetes status is required';
    return null;
  };
  
  export const validateBp = (bp) => {
    if (!bp) return 'BP status is required';
    return null;
  };
  
  
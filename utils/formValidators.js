export const credentialsValidator = (formData) => {
  const errors = {};

  if (!formData.iam) {
    errors.iam = "Please select who you are";
  }

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.country) {
    errors.country = "Country is required";
  }

  if (!formData.phoneNo.trim() && !formData.email.trim()) {
    errors.contactInfo = "Phone Number or Email is required";
  } else if (!formData.phoneNo.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  } else if (!formData.email.trim() && !/^\d{10}$/.test(formData.phoneNo)) {
    errors.phoneNo = "Phone Number must be 10 digits";
  }

  return errors;
};

export const otpValidator = (data) => {
  const errors = {};

  if (!data.otp) {
    errors.otp = "OTP is required";
  } else if (!/^\d{6}$/.test(data.otp)) {
    errors.otp = "OTP must be a 6-digit number";
  }

  return errors;
};

export const propertyDetailsValidator = (formData) => {
  let errors = {};

  if (!formData.propertyFor) {
    errors.propertyFor = "Property For is required.";
  }

  if (!formData.propertyType) {
    errors.propertyType = "Property Type is required.";
  }

  if (!formData.builtUpArea || formData.builtUpArea <= 0) {
    errors.builtUpArea = "Built up Area must be greater than 0.";
  }

  if (!formData.carpetArea || formData.carpetArea <= 0) {
    errors.carpetArea = "Carpet Area must be greater than 0.";
  }

  if (!formData.propertyOnFloor) {
    errors.propertyOnFloor = "Property on Floor is required.";
  }

  if (!formData.totalFloors || formData.totalFloors <= 0) {
    errors.totalFloors = "Total Floors must be greater than 0.";
  }

  if (!formData.propertyFacing) {
    errors.propertyFacing = "Property Facing is required.";
  }

  if (!formData.propertyAge) {
    errors.propertyAge = "Property Age is required.";
  }

  if (!formData.bhkType) {
    errors.bhkType = "BHK Type is required.";
  }

  if (!formData.bathrooms) {
    errors.bathrooms = "Bathrooms/Toilets is required.";
  }

  if (!formData.balcony) {
    errors.balcony = "Balcony is required.";
  }

  if (!formData.tenantPreference) {
    errors.tenantPreference = "Tenant Preference is required.";
  }

  if (!formData.availability) {
    errors.availability = "Availability is required.";
  }

  if (!formData.propertyDescription) {
    errors.propertyDescription = "Property Description is required.";
  }

  return errors;
};

export const featuresAndAmenitiesValidator = (data) => {
  const errors = {};

  if (!data.nonVeg) {
    errors.nonVeg = "This Field is required";
  }

  if (!data.pets) {
    errors.pets = "This Field is required";
  }

  if (!data.electricity) {
    errors.electricity = "This Field is required";
  }

  if (!data.waterSupply) {
    errors.waterSupply = "This Field is required";
  }

  if (!data.furnishing||data.furnishing.length===0) {
    errors.furnishing = "You need to select at least one option";
  }

  if (!data.safety||data.safety.length===0) {
    errors.safety = "You need to select at least one option";
  }

  return errors;
};

export const priceDetailsValidator = (data)=>{
  const errors = {};
  if (!data.rent) {
    errors.rent = "This Field is required";
  }

  if (!data.security) {
    errors.security = "This Field is required";
  }
  if (!data.maintenanceType) {
    errors.maintenanceType = "This Field is required";
  }

  if (!data.maintenanceFee) {
    errors.maintenanceFee = "This Field is required";
  }

  if (!data.maintenanceDuration) {
    errors.maintenanceDuration = "This Field is required";
  }
  return errors;
}

export const locationDetailsValidator = (data)=>{
  const errors = {};

  if (!data.buildingOrSociety) {
    errors.buildingOrSociety = "This Field is required";
  }

  if (!data.localityOrArea) {
    errors.localityOrArea = "This Field is required";
  }

  if (!data.landmarkOrStreetName) {
    errors.landmarkOrStreetName = "This Field is required";
  }


  if (!data.city) {
    errors.city = "This Field is required";
  }





  return errors;
}
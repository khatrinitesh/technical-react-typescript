import React,{ useState } from 'react';
import { toast,ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputField from './InputField';

const CustomApp:React.FC = () => {
  return (
    <>
      <FormValidationComp/>
    </>
  );
}

export default CustomApp;

const FormValidationComp:React.FC  =() => {
    const [formValues,setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        location: '',
    })
    const [errors,setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        location: '',
    })

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target; 
        // Restrict phone number input to numeric values only
        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9]/g, '');
            setFormValues((prevValues) => ({ ...prevValues, [name]: numericValue }));
        } 
        else if(name === 'name' || name === 'city' || name === 'location'){
            const alphaValue = value.replace(/[^a-zA-Z]/g,'')
            setFormValues((prevValues) => ({...prevValues,[name]:alphaValue}))
        }
        else {
            setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
        }
    };

    const validate = ():boolean => {
        let valid = true;
        const newErrors = {
            name: '',
            email: '',
            phone: '',
            city: '',
            location: '',
        }
        if(!formValues.name){
            newErrors.name = "Name must be alphabetic characters only"
            valid = false;
        }
        if(!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)){
            newErrors.email = 'A valid email is required'
            valid = false;
        }
        if(!formValues.phone || !/^[0-9]{10}$/.test(formValues.phone)){
            newErrors.phone = 'Phone number must be exactly 10 digits'
            valid = false;
        }
        if(!formValues.city){
            newErrors.city = 'City must be alphabetic characters only'
            valid = false;
        }
        if(!formValues.location){
            newErrors.location = 'Location must be alphabetic characters only';
            valid = false;
        }
        setErrors(newErrors)
        return valid;
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
          toast.success('Form submitted successfully!');
          console.log('Form Values:', formValues);
          // Handle form submission (e.g., send data to a server)
        } else {
          toast.error('Please fix the errors in the form.');
        }
    };
    
   
    return(
        <>
        <div className="max-w-md mx-auto p-4 bg-white border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Custom Form</h1>
      <form onSubmit={handleSubmit}>
      <InputField
          id="name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Enter your name"
        />
        <InputField
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
        />
        <InputField
          id="phone"
          name="phone"
          type="text"
          value={formValues.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Enter your phone number"
          maxLength={10}
        />
        <InputField
          id="city"
          name="city"
          type="text"
          value={formValues.city}
          onChange={handleChange}
          error={errors.city}
          placeholder="Enter your city"
        />
        <InputField
          id="location"
          name="location"
          type="text"
          value={formValues.location}
          onChange={handleChange}
          error={errors.location}
          placeholder="Enter your location"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
        </>
    )
}
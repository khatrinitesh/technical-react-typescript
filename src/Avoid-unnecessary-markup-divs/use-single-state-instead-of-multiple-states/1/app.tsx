import React, { ChangeEvent, FormEvent, useState } from "react";

const CustomApp: React.FC = () => {
  return (
    <>
    <OldForm/>
    </>
  )
};

export default CustomApp;

interface FormStateProps {
  name: string;
  email: string;
  age: string;
}

const OldForm: React.FC = () => {
  const [formData, setFormData] = useState<FormStateProps>({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "age" && !/^\d*$/.test(value)) {
        // If the name is 'age' and the value is not a number, return early
        return;
      }
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text" // Use text type to manually handle numeric validation
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

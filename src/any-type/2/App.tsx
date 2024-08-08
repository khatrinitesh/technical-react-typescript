import React, { useState } from 'react'


const App:React.FC = () => {

      // Sample dynamic form data
  const formData = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  };

   
  return (
    <>
    <DynamicForm formData={formData}/>
    </>
  )
}

export default App

interface DynamicProps{
    formData:any  // Use of `any` type
}

const DynamicForm:React.FC<DynamicProps> = ({formData}) => {
     // State to keep track of form values
    const [formValues, setFormValues] = useState<any>(formData);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
    return(
        <>
        <form>
        {Object.keys(formData).map((key) => (
            <div key={key} className="form-group">
            <label htmlFor={key}>{key}</label>
            <input
                id={key}
                name={key}
                type="text"
                value={formValues[key] || ''}
                onChange={handleChange}
            />
            </div>
        ))}
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
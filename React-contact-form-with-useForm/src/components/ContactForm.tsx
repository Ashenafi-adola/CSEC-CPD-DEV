import { useState } from "react"
import { useForm } from "react-hook-form"

interface FormData{
    name: string,
    email: string,
    message: string
}
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({defaultValues:{
        name:"",
        email: "",
        message:""
    }})

    const [success, setSuccess] = useState(false)
    const submitHandler = () => {
        setSuccess(true)
    }
  return (
    <div className="container">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <h1>Contact Form</h1>
        </div>
        {
            success && <small style={{"color":"green"}}>form submited successfully</small>
        }
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" placeholder="Name" {...register('name', {
            required: "Name is required field",
          })}/>
          {
            errors.name && <p>{errors.name.message}</p>
          }
        </div>

        <div>
          <label htmlFor="">Email:</label>
          <input type="email" placeholder="Email" {...register('email', {
            required: "Email field is required field",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })} />
          {
            errors.email && <p>{errors.email.message}</p>
          }
        </div>
        <div>
          <label htmlFor="">Message:</label>
          <textarea {...register("message", {
            required: "Message is a required field"
          })}/>
        {
            errors.message && <p>{errors.message.message}</p>
        }
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

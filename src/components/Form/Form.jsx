import { useState } from 'react'
import css from './Form.module.css'
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

function Form() {

     const [formData, setFormData] = useState({
       name: "",
       email: "",
       bookingDate: "",
       message: "",
     });

     const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
         ...formData,
         [name]: value,
       });
     };

     const handleSubmit = (e) => {
       e.preventDefault();

       console.log("Form submitted:", formData);

       setFormData({
         name: "",
         email: "",
         bookingDate: "",
         message: "",
       });
     };
    return (
      <div className={ css.container}>
        <p className={css.book}>Book your campervan now</p>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className={css.inputContainer}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name*"
                className={css.input}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email*"
                className={css.input}
              />
            </div>
            <div>
              <div>
                <DatePicker
                  selected={formData.bookingDate}
                  onChange={(date) =>
                    setFormData({ ...formData, bookingDate: date })
                  }
                  placeholderText="Booking date*"
                  className={css.input}
                />
              </div>
            </div>
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Comment"
              className={css.textarea}
            />
          </div>
          <div className={css.buttonContainer}>
            <button className={css.button} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
}

export default Form
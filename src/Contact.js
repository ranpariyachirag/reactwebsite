import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState([
    {
      fname: "",
      email: "",
      message: ""
    }
  ]);

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((data) => {
      return {
        ...data,
        [name]: value
      };
    });
  };

  const submitEvent = (e) => {
    e.preventDefault();

    alert(
      `Hi My name is ${formData.fname} and my email address is ${formData.email}. This is what my message is : ${formData.message}`
    );

    setFormData({
      fname: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <h1 className="text-center"> Contact Us </h1>

      <div className="container_fluid">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your Full Name"
                onChange={inputEvent}
                name="fname"
                value={formData.fname}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
                onChange={inputEvent}
                name="email"
                value={formData.email}
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                onChange={inputEvent}
                name="message"
                placeholder="write your message here"
                value={formData.message}
              ></textarea>
            </div>

            <div className="col-12">
              <button
                className="btn  btn-outline-info"
                type="submit"
                onClick={submitEvent}
              >
                Submit form
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

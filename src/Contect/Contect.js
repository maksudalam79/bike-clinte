import React from 'react';
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';



const Contect = () => {
    
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pgcx0ns",
        "template_et02zya",
        e.target,
        "AlC4xepvnAWgfm-mS"
      )
      .then(
        (result) => {
          swal("Thank you", "Email sent", "success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
        <div>
         <h2 className='text-5xl font-bold mt-2 text-center'>Contact Us</h2>
      <div className="hero">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 rounded-none">
            <form onSubmit={sendEmail} className="card-body ">
             
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered"
                  name="message"
                  placeholder="message"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary btn-sm w-20">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contect;
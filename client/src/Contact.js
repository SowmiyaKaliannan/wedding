import React from 'react';

function Contact() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Contact Us</h2>
      <form className="w-75 mx-auto">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="sowmi@gmail.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Type your message here..."></textarea>
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;

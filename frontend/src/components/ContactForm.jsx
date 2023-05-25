import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <h2>Add Contact</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="form-control"
          placeholder="Name"
        />
      </div>
      <div className="mb-3 form-check">
        <input type="radio" name="type" className="form-check-input" />
        Professional
      </div>
      <div className="mb-3 form-check">
        <input type="radio" name="type" className="form-check-input" />
        Personal
      </div>
      <div className="d-grid gap-2 mb-3">
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

import '../components/css/Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Please fill out the form below and we
        will get in touch with you shortly.
      </p>

      <div className="contact-details">
        <h3>Our Address</h3>
        <p>123 Delicious Street, Foodville, Taste Country</p>
        <h3>Phone</h3>
        <p>(123) 456-7890</p>
        <h3>Email</h3>
        <p>contact@ourrestaurant.com</p>
      </div>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

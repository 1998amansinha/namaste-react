const Contact = () => {
  return (
    <div className="m-5 text-center">
      <h1 className="font-bold text-2xl">Contact Us</h1>
      <div className="m-10">
        <form className="m-5 p-10">
          <input
            className="border border-blue-300 m-5 p-2"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="border border-blue-300 m-5 p-2"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="border border-blue-300 m-5 p-2"
            type="phone"
            placeholder="Phone Number"
            name="phone"
            required
          />
          <button className="bg-blue-300 p-3 rounded-lg hover:bg-blue-800 text-white" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

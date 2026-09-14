function ContactForm() {
  return (
    <form className="space-y-8">

      <div>

        <label htmlFor="contact-name" className="font-semibold">
          Your Name
        </label>

        <input
          type="text"
          id="contact-name"
          placeholder="John Doe"
          className="w-full border mt-3 p-4 rounded-lg outline-none focus:border-[#090631]"
        />

      </div>

      <div>

        <label htmlFor="contact-email" className="font-semibold">
          Email Address
        </label>

        <input
          type="email"
          id="contact-email"
          placeholder="abc@gmail.com"
          className="w-full border mt-3 p-4 rounded-lg outline-none focus:border-[#090631]"
        />

      </div>

      <div>

        <label htmlFor="contact-subject" className="font-semibold">
          Subject
        </label>

        <input
          type="text"
          id="contact-subject"
          placeholder="Subject"
          className="w-full border mt-3 p-4 rounded-lg outline-none focus:border-[#090631]"
        />

      </div>

      <div>

        <label htmlFor="contact-message" className="font-semibold">
          Message
        </label>

        <textarea
          rows="6"
          id="contact-message"
          placeholder="Write your message..."
          className="w-full border mt-3 p-4 rounded-lg outline-none focus:border-[#090631]"
        ></textarea>

      </div>

      <button className="bg-slate-900 text-white px-10 py-4 rounded hover:bg-slate-900 duration-300">

        Submit

      </button>

    </form>
  );
}

export default ContactForm;

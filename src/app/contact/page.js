import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact"
}

const ContactPage = () => {
  return (
    <div>
      <div className="p-20 max-w-4xl mx-auto">
        <h1 className="text-center text-4xl text-green-900 mb-6">Contact Info</h1>
        <section className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">We'd Love to Hear From You!</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
              <input type="text" id="name" className="w-full p-3 mt-2 border rounded-lg" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input type="email" id="email" className="w-full p-3 mt-2 border rounded-lg" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
              <textarea id="message" className="w-full p-3 mt-2 border rounded-lg" rows="5" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="text-white bg-green-500 hover:bg-green-700 px-6 py-3 rounded-md">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

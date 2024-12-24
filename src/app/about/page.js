import Footer from "../../components/Footer";

export const metadata = {
  title: "About"
}

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-20 max-w-4xl mx-auto flex-grow">
        <h1 className="text-center text-4xl text-green-900 mb-6">About Us</h1>
        <section className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4 text-1xl">
            At <strong>Green Haven Terrariums</strong>, we believe in bringing a piece of nature indoors.
            Our handmade terrariums are designed to offer a touch of greenery to your home, while providing
            low-maintenance plants that require minimal care.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

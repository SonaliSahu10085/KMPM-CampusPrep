import { Footer, Navbar } from "../components";
import Animate from "../components/Animate";
import { useStore } from "../constants/store";
import { images } from "../constants/images";
import MapComponent from "../components/MapComponent";

function Input({ label, placeholder }) {
  const { theme } = useStore();
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label htmlFor="name" className="font-medium text-primary text-md">
        {label}
      </label>

      <input
        placeholder={placeholder}
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        className={`border border-gray-400 rounded-lg px-3 py-2 focus:outline-none ${
          theme === "dark" ? "bg-black/80" : "bg-white/80"
        }`}
      />
    </div>
  );
}

function TextArea({ label, placeholder }) {
  const { theme } = useStore();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="msg" className="font-medium text-primary text-md">
        {label}
      </label>
      <textarea
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        rows={3}
        placeholder={placeholder}
        className={`border border-gray-400 rounded-lg px-3 py-2 focus:outline-none ${
          theme === "dark" ? "bg-black/80" : "bg-white/80"
        }`}
      />
    </div>
  );
}

export default function ContactUs() {
  const { theme } = useStore();
  return (
    <>
      <Navbar />

      <section className="mx-4 sm:mx-40 py-10">
        <Animate>
          <h2 className="text-brand-gradient text-4xl mb-3 font-family-abril-fatface leading-12 text-center">
            Get in Touch
          </h2>

          {/* Paragraph  */}
          <p className="mb-5 leading-6 text-center text-lg max-w-xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </Animate>

        <div className="sm:mt-6 flex flex-col sm:flex-row sm:gap-6 gap-3">
          {/* Left Side  */}
          <div className="flex flex-col sm:max-w-sm gap-3 sm:gap-6">
            <div
              className={`p-4 sm:p-6 border border-gray-400 rounded-lg flex gap-3 sm:gap-5 ${
                theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
            >
              <img src={images.icon.mail} alt="" className="h-10" />
              <div>
                <h6 className="text-primary text-md font-medium">Email</h6>
                <p>kmpm.campusprep@gmail.com</p>
              </div>
            </div>

            <div
              className={`p-4 sm:p-6 border border-gray-400 rounded-lg flex flex-col gap-3 sm:gap-5 h-85 ${
                theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
            >
              <div className="flex gap-3 sm:gap-5">
                <img src={images.icon.location} alt="" className="h-10" />
                <div>
                  <h6 className="text-primary text-md font-medium">Address</h6>
                  <p className="leading-6">
                    Mrs. KMPM Vocational College Campus Jamshedpur, Jharkhand
                    India
                  </p>
                </div>
              </div>

              <MapComponent />
            </div>
          </div>

          {/* Right Side  */}
          <div
            className={`p-4 sm:p-8 space-y-4 border border-gray-400 rounded-lg flex-1 ${
              theme === "dark" ? "bg-black/60" : "bg-white/60"
            }`}
          >
            <h3 className="text-primary text-xl font-bold">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <Input label={"Name"} placeholder={"Your name"} />
                <Input label={"Email"} placeholder={"your.email@example.com"} />
              </div>

              <Input label={"Subject"} placeholder={"How can we help ?"} />
              <TextArea
                label={"Message"}
                placeholder={"Tell us more about your inquiry"}
              />

              <button className="bg-[#0090af] text-white px-4 py-2 rounded-xl shadow-md transition-transform transform hover:scale-110">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

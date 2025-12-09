import { Footer, Navbar } from "../components";
import Animate from "../components/Animate";
import { useStore } from "../constants/store";

export default function PolicyPage() {
  const { theme } = useStore();

  return (
    <>
      <Navbar />
      <section className="mx-4 sm:mx-60 py-10">
        <Animate>
          <h2 className="text-brand-gradient text-4xl font-family-abril-fatface leading-12">
            Privacy Policy
          </h2>

          {/* Paragraph  */}
          <p className="my-4 leading-6 font-medium">
            Last updated: November 2025
          </p>
        </Animate>

        <div className="space-y-6 sm:mt-6">
          <Animate>
            <div
              className={`p-4 sm:p-8 space-y-4 border border-gray-400 rounded-lg ${
                theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
            >
              <h3 className="text-primary text-xl font-family-abril-fatface">
                Introduction
              </h3>
              <p className="leading-6">
                At KMPM CampusPrep, we take your privacy seriously. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our platform. Please read this
                privacy policy carefully.
              </p>
            </div>
          </Animate>

          <Animate>
            <div
              className={`p-4 sm:p-8 space-y-4 border border-gray-400 rounded-lg ${
                theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
            >
              <h3 className="text-primary text-xl font-family-abril-fatface">
                Information We Collect
              </h3>
              <dl>
                <dt className="text-md text-primary font-family-abril-fatface mb-1">
                  Personal Information
                </dt>
                <dd className="leading-6">
                  We collect information that you provide directly to us,
                  including your name, email address, student ID, year of study,
                  and any other information you choose to provide when creating
                  an account or using our services.
                </dd>
              </dl>

              <dl>
                <dt className="text-md text-primary font-family-abril-fatface mb-1">
                  Usage Data
                </dt>
                <dd className="leading-6">
                  We automatically collect information about your interaction
                  with our platform, including interview practice sessions,
                  performance metrics, time spent on the platform, and features
                  used.
                </dd>
              </dl>

              <dl>
                <dt className="text-md text-primary font-family-abril-fatface mb-1">
                  Audio and Video Data
                </dt>
                <dd className="leading-6">
                  When you participate in mock interviews, we may record audio
                  and video data to provide feedback and improve our AI models.
                  This data is stored securely and used solely for educational
                  purposes.
                </dd>
              </dl>
            </div>
          </Animate>

          <Animate>
            <div
              className={`p-4 sm:p-8 space-y-4 border border-gray-400 rounded-lg ${
                theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
            >
              <h3 className="text-primary text-xl font-family-abril-fatface">
                How We Use Your Information
              </h3>
              <ul>
                {[
                  "To provide, maintain, and improve our services",
                  "To personalize your learning experience and provide tailored feedback",
                  "To track your progress and generate performance reports",
                  "To communicate with you about updates, features, and support",
                  "To train and improve our AI models for better interview feedback",
                  "To ensure platform security and prevent fraud",
                ].map((li, idx) => (
                  <li key={idx} className="leading-6 list-disc ms-3">
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Animate>

          <Animate>
            <div
              className={`p-4 sm:p-8 space-y-4 border border-gray-400 rounded-lg ${
                theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
            >
              <h3 className="text-primary text-xl font-family-abril-fatface">
                Data Security
              </h3>
              <p className="leading-6">
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                method of transmission over the internet or electronic storage
                is 100% secure. While we strive to use commercially acceptable
                means to protect your data, we cannot guarantee its absolute
                security.
              </p>
            </div>
          </Animate>

          <Animate>
            <div
              className={`p-4 sm:p-8 space-y-4 border border-gray-400 rounded-lg ${
                theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
            >
              <h3 className="text-primary text-xl font-family-abril-fatface">
                Your Rights
              </h3>
              <ul>
                {[
                  "Access and receive a copy of your personal data",
                  "Correct inaccurate or incomplete data",
                  "Request deletion of your data",
                  "Opt-out of marketing communications",
                  "Withdraw consent for data processing",
                ].map((li, idx) => (
                  <li key={idx} className="leading-6 list-disc ms-3">
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </Animate>

          <Animate>
            <div
              className={`p-4 sm:p-8 space-y-4 border border-gray-400 rounded-lg ${
                theme === "dark" ? "bg-black/60" : "bg-white/60"
              }`}
            >
              <h3 className="text-primary text-xl font-family-abril-fatface">
                Contact Us
              </h3>
              <p className="leading-6">
                If you have any questions about this Privacy Policy, please
                reach out at <span className="text-primary font-bold">kmpm.campusprep@gmail.com</span>
              </p>
            </div>
          </Animate>
        </div>
      </section>
      <Footer />
    </>
  );
}

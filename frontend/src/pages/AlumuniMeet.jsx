import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactPage from "./ContactPage";
import Weddingcontact from "./weddingcontact";
import RecentWeddings from "./recentwedding";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Brush,
  ClipboardCheck,
  DollarSign,
  Palette,
  PieChart,
  Users,
} from "lucide-react";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    "What services does Aryan Events offer for alumni meets?",
    "Can Aryan Events help organize a memorable alumni meet with specific themes?",
    "How can I book an alumni meet with Aryan Events?",
    "Do you provide services like event photography or video recording for alumni meets?",
    "What is the average cost of hosting an alumni meet?"
  ];
  
  const answers = [
    "Aryan Events offers complete event planning for alumni meets, including venue decoration, catering, entertainment, class year memorabilia, and more. We ensure that the event fosters a sense of nostalgia and reconnection among alumni while creating a welcoming environment for everyone.",
    
    "Yes, we can help you create a unique and memorable alumni meet with a custom theme. Whether you want to highlight the history of your school, a particular decade, or your alumni’s achievements, we will design the perfect theme and set the right atmosphere for your event.",
    
    "Booking your alumni meet with Aryan Events is easy! You can get in touch with us through our website or by phone to discuss your event’s vision. We will work closely with you to finalize details such as the venue, catering, activities, and any special requests you may have.",
    
    "Absolutely! We offer services like professional event photography, video recording, and live streaming to capture the unforgettable moments at your alumni meet. Whether it's candid photos, group shots, or a highlight video, we’ll ensure all the special moments are recorded and remembered.",
    
    "The cost of hosting an alumni meet varies depending on factors like the number of guests, the venue, catering, entertainment, and additional services like photography or event décor. Aryan Events offers flexible packages that can be tailored to your budget. Contact us for a personalized quote based on your event needs."
  ];
  

  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-12">
      <h2 className="text-2xl text-[#11244A] font-semibold mb-6 ">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 text-[#11244A]">
        {questions.map((question, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="flex items-center justify-between w-full p-4 bg-white hover:bg-gray-100"
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              <span>{question}</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50">
                <p>{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AlumuniMeet = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    eventType: "",
  });
  const eventTypes = ["Wedding", "Birthday", "Corporate Event", "Baby Shower"];

  const features = [
    {
      icon: <ClipboardCheck className="text-white w-12 h-12" strokeWidth={1} />, // Icon styled with a rose color
      title: "Venue Selection",
      description:
        "We specialize in finding venues that perfectly match your style, preferences, and budget. From arranging seamless site visits to securing exclusive packages, we simplify the process to help you shortlist the ideal location.",
    },
    {
      icon: <DollarSign className="text-white w-12 h-12" strokeWidth={1} />, // Icon styled with a green color
      title: "Catering Services",
      description:
        "If your chosen venue allows external catering, we’ll arrange a top-tier service that suits your event. Our team works with you to craft a menu that aligns with your taste and budget, ensuring a delectable dining experience.",
    },
    {
      icon: <Users className="text-white w-12 h-12" strokeWidth={1} />, // Icon styled with a blue color
      title: "Event Decorations",
      description:
        "Our creative team transforms your vision into reality with stunning decorations tailored to your theme. With over 15 years of experience, we handle every detail to ensure a flawless and visually captivating event.",
    },
    {
      icon: <PieChart className="text-white w-12 h-12" strokeWidth={1} />, // Icon styled with a purple color
      title: "Guest Coordination",
      description:
        "We make guest management effortless, from maintaining a clear budget to aligning with your event’s theme. Our expertise helps recommend innovative ideas and ensures seamless coordination throughout your celebration.",
    },
    {
      icon: <Palette className="text-white w-12 h-12" strokeWidth={1} />, // Icon styled with a yellow color
      title: "Gifting & Hampers",
      description:
        "Delight your guests with thoughtfully curated gifts and hampers. We work closely with you to create unique, personalized keepsakes that leave a lasting impression on everyone attending your event.",
    },
    {
      icon: <Brush className="text-white w-12 h-12" strokeWidth={1} />, // Icon styled with an indigo color
      title: "Transportation Services",
      description:
        "From guest pickups to event logistics, we provide reliable and efficient transportation services. Our focus is on ensuring a smooth journey for you and your attendees, making your event stress-free and enjoyable.",
    },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Handle form submission logic here
    setIsModalOpen(false);
    const response = axios.post(`${process.env.REACT_APP_URL}/saveFormData`, formData);
    response
      .then((response) => {
        console.log("Success:", response.data);
        alert(response.data.message); // Show the success message from the server
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="bg-[#11244A] text-white py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl philosopher-bold mb-6 leading-snug bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent">
            Alumuni Meet <br />
            Planners in Gaya
          </h1>
          <p className="text-lg mb-8">
            Your wedding should tell your story, and we at Aryan Events are here
            to bring your dream celebration to life with our expertise.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-400 text-teal-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500"
          >
            START PLANNING TODAY
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/assets/alumuni.jpg"
            alt="Large Wedding Photo"
            className="rounded-lg shadow-lg w-full md:w-3/4 max-h-64 object-cover"
          />
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full md:w-[40rem] lg:w-[50rem]">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Plan Your Wedding
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black">
                  Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-black">
                  Event Type
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
                >
                  <option value="" disabled>
                    Select an event type
                  </option>
                  {eventTypes.map((event, index) => (
                    <option key={index} value={event}>
                      {event}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-400 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-900 text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="bg-white text-teal-900 py-8 px-6 md:px-12 mt-12">
        <section className="bg-white text-gray-800 py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            <div className="md:w-2/3">
              <h2 className="text-6xl philosopher-bold text-[#11244A]  mb-4">
                Best Wedding Planner in Gaya : Making Every Moment Magical
              </h2>

              <p className="mb-4 leading-relaxed">
                Welcome to Aryan Events, One of the best wedding planners in
                Gaya. We’re here to help you create the wedding of your dreams.
                Our team focuses on turning your special day into a memorable
                celebration filled with joy and love. With careful planning and
                attention to detail, we make sure everything runs smoothly at
                some of the best venues in Gaya. Many of us start fantasizing
                about our big day long before we truly understand what marriage
                is all about. The dress, the makeup, the parties, and the
                decorations that send our hearts pounding come first. We know
                that everyone has their own unique story, and we’re dedicated to
                designing a wedding that truly reflects who you are. Our
                friendly team closely works with you to understand your ideas
                and bring them to life in a beautiful way. From intimate
                gatherings to grand celebrations, we tailor every element to
                make your wedding unforgettable. Trust us to manage the stress
                so you can focus on cherishing every moment of your big day.
              </p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0">
              <img
                src="/assets/alumuni01.jpg"
                alt="Event Planner"
                className="rounded-lg shadow-lg h-96 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white text-gray-800 py-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
            <div className="md:w-1/3 mt-8 md:mt-0">
              <img
                src="/assets/alumuni02.jpg"
                alt="Event Planner"
                className="rounded-lg shadow-lg h-96 object-cover"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h2 className="text-6xl philosopher-bold text-[#11244A]  mb-4">
                Why Aryan Events is Your Trusted Wedding Planner in gaya, NCR
              </h2>
              <p className="mb-4 leading-relaxed">
                We take pride in having a thorough understanding of the finest
                wedding venues in gaya NCR, ensuring you find the perfect
                location for your love story. Whether you imagine an intimate
                get-together or a lavish destination wedding in India, we
                customize each detail to capture your own personality and sense
                of style.
              </p>
              <p className="mb-4 leading-relaxed">
                Additionally, we offer our clients a full range of services,
                including catering, invitations, gifts, hospitality, and more.
                The goal of weddings is to unite relatives, friends, and family
                to celebrate the start of a new chapter in your loved ones’
                lives. Our wedding planners are considerate of the feelings
                associated with each ceremony and make sure everything follows
                our valued traditions.
              </p>
              <p className="mb-4 leading-relaxed">
                With our expertise as some of the best wedding planners in gaya,
                we ensure that your special day is not only beautiful but also a
                true reflection of your story.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl philosopher-bold text-[#11244A]  mb-6">
              End-to-End Wedding Services: From Planning to Execution
            </h2>
            <p className="text-gray-600 text-xl philosopher-regular mb-12">
              From comprehensive and meticulous planning to seamless and
              flawless execution, we’ve got you covered at every step of the
              process.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#11244A]  text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="flex justify-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl philosopher-regular mb-4 bg-gradient-to-r from-[#d4af37] via-[#f8e45f] to-[#d4af37] bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-14">
          {/* <Link
              to="/weddingnoida"
              className="bg-[#11244A]  text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-rose-800 transition duration-300"
            >
              Wedding Planner In Noida
            </Link>
          <button
            onClick={() => navigate("/pages/weddinggurgaon")}
            className="bg-rose-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700"
          >
            Wedding Planner in Gurgaon
          </button> */}
        </div>
      </div>

      <Weddingcontact />
      <RecentWeddings />
      <Faq />
    </div>
  );
};

export default AlumuniMeet;

"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Container from "@/components/shared/Container/Container";
import { IoCheckbox } from "react-icons/io5";

const subscriptionPlans = [
  {
    title: "Pro Monthly",
    price: 4.99,
    originalPrice: 9.99,
    billingCycle: "Billed monthly",
    description:
      "Experience the benefits of Pro membership with unlimited chats for one month.",
  },
  {
    title: "Pro Quarterly",
    price: 12.99,
    originalPrice: 25.99,
    billingCycle: "Billed every 3 months",
    description:
      "Unlock three months of Pro features and save with quarterly billing.",
  },
  {
    title: "Pro Semi-Annual",
    price: 29.99,
    originalPrice: 59.99,
    billingCycle: "Billed every 6 months",
    description:
      "Enjoy six months of Pro features at a discounted rate, paid biannually.",
  },
  {
    title: "Pro Annual",
    price: 49.99,
    originalPrice: 99.99,
    billingCycle: "Billed yearly",
    description:
      "Access all Pro member features for a full year, with significant savings.",
  },
];
const features = [
  {
    title: "Multiple AI Models",
    description: "Access to a wide range of industry-leading AI models.",
  },
  {
    title: "Secure and Private",
    description:
      "Rest assured, your data and chats are kept safe, secure, and private.",
  },
  {
    title: "Incredible Savings",
    description:
      "Save money with EchoGPT as you get all models in one subscription.",
  },
  {
    title: "24/7 Priority Support",
    description:
      "Always here for you, day or night, to ensure your peace of mind.",
  },
  {
    title: "Image Generation",
    description:
      "Unlock the power of our cutting-edge image generation feature.",
  },
  {
    title: "Extensions",
    description: "Access to a wide range of industry-leading AI models.",
  },
];
const faqs = [
  {
    question: "What platforms is EchoGPT available on?",
    answer:
      "Currently, EchoGPT is available as a web app. We are actively working on expanding our reach to Android, iOS, and developing EchoGPT as a plug-in as well.",
  },
  {
    question: "Is my personal data safe and secure when using EchoGPT?",
    answer:
      "Yes, we prioritize your data security with robust organizational and technical measures. For more details, refer to our Privacy Policy.",
  },
  {
    question: "Who do I contact if I have questions or need support?",
    answer:
      "For support, email us at appifydevs@gmail.com. We aim to respond within 48 hours.",
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "To cancel your subscription, go to your account settings and select 'Manage Subscription'.",
  },
  {
    question: "How can I report a bug to the developer?",
    answer:
      "If you encounter a bug, please report it to support@appifydevs.com with a description and screenshots if possible.",
  },
  {
    question: "What can I use EchoGPT for?",
    answer:
      "EchoGPT can be used for content generation, coding assistance, and answering queries in various fields.",
  },
  {
    question: "What are the different subscription plans available?",
    answer:
      "We offer Basic, Pro, and Enterprise plans. Check our Pricing page for more details.",
  },
  {
    question: "Can I use EchoGPT on multiple devices simultaneously?",
    answer:
      "Yes, EchoGPT supports multiple devices, but usage limits depend on your subscription plan.",
  },
  {
    question: "What is the difference between basic and advanced models?",
    answer:
      "Advanced models provide more accurate and context-aware responses compared to basic models.",
  },
];

const SubscriptionPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <Container className="flex justify-center items-center min-h-screen">
      <div className="lg:max-w-4xl 2xl:max-w-6xl mx-auto ">
        {/* Title Section */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold py-4">
            Manage Subscription
          </h1>
          <p className="text-md md:text-xl 2xl:text-2xl max-w-2xl mx-auto py-4">
            Want to get more out of EchoGPT Plus? Subscribe to one of our
            professional plans.
          </p>
        </div>

        {/* Grid Layout for Subscription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-lg bg-[#23212C] text-start"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold text-white">
                  {plan.title}
                </h2>
                <span className="bg-red-500 text-sm text-white px-3 py-1 rounded-2xl">
                  Save 50%
                </span>
              </div>

              <p className="text-4xl font-bold text-white py-3">
                ${plan.price} USD
                <span className="text-2xl text-gray-500 line-through ps-5">
                  ${plan.originalPrice}
                </span>
              </p>
              <p className="text-white text-lg mt-1">{plan.billingCycle}</p>

              <button className="w-full bg-[#6F23FD] text-white py-2 mt-4 rounded-lg hover:bg-purple-700 transition ">
                Upgrade Now
              </button>

              <p className="text-sm text-white mt-2 pt-4">{plan.description}</p>
            </div>
          ))}
        </div>
        {/* Feature List */}
        <div className="max-w-6xl mx-auto my-12 ">
          <h2 className="text-xl md:text-2xl font-bold text-purple-700 uppercase  pb-2 mb-6">
            What is Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 ">
                <IoCheckbox className="text-purple-600" size={30} />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-2xl">{feature.title}</h3>
                  <p className="text-gray-600 text-xl">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* question */}
        <div className="max-w-2xl mx-auto py-10">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Cannot find the answer you are looking for? Reach out to our{" "}
            <a href="#" className="text-blue-600 underline">
              customer support
            </a>{" "}
            team.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className=" rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 bg-gray-100  transition-all"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-600" />
                  ) : (
                    <FaChevronDown className="text-gray-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-100 ">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SubscriptionPage;

import Container from "@/components/shared/Container/Container";
import React from "react";

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

const SubscriptionPage = () => {
  return (
    <Container className="flex justify-center items-center min-h-screen">
      <div className="lg:max-w-4xl 2xl:max-w-6xl mx-auto text-center">
        {/* Title Section */}
        <div className="mb-6">
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
      </div>
    </Container>
  );
};

export default SubscriptionPage;

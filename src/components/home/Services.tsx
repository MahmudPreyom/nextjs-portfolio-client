"use client";

const services = [
  {
    title: "Website Design",
    features: [
      "Attractive design that aligns with brand and engages visitors.",
      "Intuitive navigation, clear content, responsive design for different devices.",
      "Optimize for fast loading, minimize file sizes, monitor performance.",
      "Ensure the website functions properly across different web browsers.",
    ],
  },
  {
    title: "Frontend Development",
    features: [
      "HTML: Markup language for structuring web content.",
      "CSS: Stylesheet language for website styling.",
      "JavaScript: Programming language for interactive web elements.",
      "Frontend Testing: Implementing automated tests to ensure code quality.",
      "Web Animation: Adding dynamic and interactive animations.",
    ],
  },
  {
    title: "Website Authentication",
    features: [
      "Firebase: Google's development platform that provides authentication services.",
      "User Registration: Allowing users to create accounts securely.",
      "Role-Based Access Control: Assigning different roles to users.",
      "JWT Tokens: Using JSON Web Tokens for secure authentication.",
    ],
  },
];

const Services = () => {
  return (
    <section className="container mx-auto py-16 px-6 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h5 className="text-center text-lg text-gray-500 dark:text-gray-400">
        What I Offer
      </h5>
      <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-10">
        Services
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="zoom-in"
      >
        {services.map((service, index) => (
          <article
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-b-lg shadow-lg transition-all overflow-hidden"
            data-aos="fade-up"
          >
            <div className="text-white text-center py-4 shadow-md bg-blue-500 dark:bg-yellow-400 rounded-b-xl">
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
            <ul className="mt-4 space-y-5 font-medium px-6 py-5">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-800 dark:text-gray-200"
                >
                  <span className="text-blue-500 dark:text-yellow-400 mr-2">
                    *
                  </span>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { Link } from "react-router-dom";

const BCPCallToAction = () => (
  <section className="py-24 bg-brandPrimary text-white text-center">
    <div className="container">
      <h2 className="text-3xl font-bold">
        Protect Your Organization’s Future
      </h2>

      <p className="mt-4 text-lg">
        Contact us today to build a culture of resilience within your organization
      </p>

      <Link to="/contact" className="btn-light mt-8 inline-block">
        Book a Consultation
      </Link>
    </div>
  </section>
);

export default BCPCallToAction;

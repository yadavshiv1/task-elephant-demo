import React from 'react';
import About from '../src/about.png'

function AboutUs() {
  return (
    <section className="about-us">
    <img src={About}/>
    <div>
    <h2>About Us</h2>
      <p>We focus solely on booking services, bank reconciliation and financial analysis for accounting firms and small businesses.<br/>
Our goal is to provide a best-in-class service offerings with personalized service at a competitive rate. We offer the opportunity to securely reduce the cost of their basic bookkeeping functions utilizing our established outsource facility based in India.<br/>
Task Elephants has developed an efficient bookkeeping outsourcing model, with underlying processes to safely and secure deliver cost effective bookkeeping services to our clients. We utilize Amazon AWS security with auditing to host all your data in the US. More importantly, we do not require ANY data that contains Personally Identifiable Information (‘PII’).<br/>
We offer US in-personal customized service, no webforms to fill out, or 800 number to call overseas. You will have direct access to our US personnel to ensure we deliver quality at a cost-effective rate. Talk to us today to reduce your costs, increase your margins and your profits.
</p>
      <p>Our goal is to provide a best-in-class service with personalized service at a competitive rate...</p>
    </div>
    </section>
  );
}

export default AboutUs;

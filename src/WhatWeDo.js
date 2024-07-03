import React from "react";
import WhatweDo from "../src/whatwedo.png";
import DataProdection from "../src/data-protection.png";
import WhyUs from "../src/whyus.png";
import HowDoes from "../src/howdoes.png";
import NextStep from "../src/nextstep.png";
import TeamPhoto from "../src/team.jpeg";
import sectionImg from "../src/sectionImg.png"

function WhatWeDo() {
  return (
    <>
      <section className="what-we-do">
        <img src={WhatweDo} />
        <div>
          <h2>What Does Task Elephant Do?</h2>
          <p>
            We specialize in bookkeeping services to help our clients reduce
            costs, increase their margins and net profits. We serve both small
            to midsize businesses and accounting firms. Streamline your workflow
            and focus on your business, via utilizing our expert bookkeeping
            services to increase your margins/profits while reducing the stress
            of turnover or rate increases. Using our client ‘on-boarding
            process’ we can transition your bookkeeping tasks to our dedicated
            team of over 20 experienced and trained Accounting specialists in
            Mumbai, India. We handle everything securely and efficiently, so you
            can focus on running your business. Enjoy the convenience of
            personalized service with a dedicated US point of contact. No
            impersonal web forms or overseas calls required – just direct
            unlimited access to our US personnel for any questions or concerns.
          </p>
        </div>
      </section>
      <section className="how-does">
        <img src={HowDoes} alt="How Does Task Elephant" />
        <div>
          <h2>How Does Task Elephant Do It?</h2>
          <p>
            We work with our clients during the onboarding process to create
            custom solutions based on your needs, e.g., workload/volume,
            turnaround times, and format (QuickBooks, Peachtrees, Excel, etc.).
            Our process involves the transfer of your financial data (invoices,
            receipts, bank statements) to our secure client portal, which runs
            on Amazon AWS S3 utilizing Secure Socket Layer SSL, from where our
            team of qualified accountants, who are trained in industry and
            accounting standards, will work on completing bookkeeping tasks
            including:
          </p>
          <ul>
            <li>Recording income and expenses</li>
            <li>Categorizing transactions</li>
            <li>Reconciling bank statements</li>
            <li>Generating reports</li>
          </ul>
          <p>
            We are available via email, phone, or video conference to answer any
            questions via a <b>‘Follow-The-Sun’ </b>model. Our
            <b>‘Follow-The-Sun’ </b>policy means we are available around the
            clock, including outside of working hours. This leads to a faster
            turnaround time for tasks.
          </p>
        </div>
      </section>

      <section className="why-us">
        <img src={WhyUs} className="why-do-us-img"/>
        <div>
          <h2>Why Task Elephant?</h2>
          <p>
            <b>
              Tired of rising labor costs? Staff turnover? Is inflation eating
              into your profit? Can’t take on new client work because your
              existing staff are stretched thin or burnt out? Increasing
              Accounting costs
            </b>
            <br />
            <b>Cost Savings: </b>Lower your costs for a commoditized service,
            increase your margin, and ultimately your profit. Task Elephant
            offers significantly lower rates utilizing qualified and experienced
            resources. <br />
            <b>Quality: </b>We work with our clients to make sure we meet and
            exceed your quality expectations. During the scoping phase, we
            identify specific client requirements to make sure we deliver to
            client needs expectations.
            <br />
            <b>Personalized Service: </b>We offer in-person consultations and a
            dedicated US point of contact to make sure you have fluid
            communication with our offshore delivery team.
            <br /> <b>Scalability: </b>Our offshore providers can easily scale
            their team up or down to meet your workload demands. This is
            particularly helpful for businesses with fluctuating bookkeeping
            needs. Only pay for what you need/use. <br />
            <b>Focus on Your Business: </b>By outsourcing bookkeeping, you free
            up your internal staff to focus on core business activities that can
            lead to increases in revenue.
            <br />
            <img src={sectionImg} className="sectionImg"/>
            <br />
            <b>Follow the Sun Policy:</b>
            Our team works outside of your regular business hours, leading to
            faster turnaround times for tasks.
          </p>
        </div>
      </section>
      <section className="data-protection">
        <img src={DataProdection} />
        <div>
          <h2>How We Protect Your Data</h2>
          <p>
            Our client’s data is stored on secure encrypted servers hosted in
            the US. Each client has their own secure portal running on Amazon
            AWS S3, our portal has been custom developed with{" "}
            <b>security and availability</b> as a priority. Our clients can
            upload/download documents securely. We do not require ANY data which
            has PII (e.g., social security numbers, dates of birth, addresses,
            etc.). Our servers utilize Secure Socket Layer Certified (SSL
            Certified).
          </p>
        </div>
      </section>
      <section className="next-step">
        <img src={NextStep} />
        <div>
          <h2>Next Steps</h2>
          <p>
            Give us a call to schedule a complimentary consultation to see how
            Task Elephants can help <br />
            <b>
              reduce your costs, increase your profits, reduce stress, and grow
              your business.
            </b>
          </p>
        </div>
      </section>
      <section className="our-team">
        <div>
          <h2>Your Dedicated Team !</h2>
          <p>
            Our full-time dedicated team in India comprises of over 20 dedicated
            experienced and certified staff. We have Associates, Seniors,
            Managers and Partners to handle your accounting needs. Tenure and
            experience ranges from 2 years to 18 years, which gives us the
            ability to provide you with just the right level of skills and
            experience
          </p>
          <img src={TeamPhoto} className="team-img" />
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;

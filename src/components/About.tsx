
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-linkedin-light-gray px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">About</h2>
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-100">
          <p className="text-lg text-linkedin-gray leading-relaxed mb-6 font-medium">
            Experienced Talent Development Officer with a proven track record in HR transformation across diverse industries. 
            Currently leading workforce development initiatives at Flynas, where I've successfully automated key HR workflows 
            and built comprehensive analytics dashboards that drive strategic decision-making.
          </p>
          <p className="text-lg text-linkedin-gray leading-relaxed font-medium">
            My expertise spans from hands-on HR operations at Aramco's Juymah site to strategic talent development at scale. 
            I'm passionate about leveraging technology and data analytics to create efficient, people-centered HR solutions 
            that support organizational growth and employee success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

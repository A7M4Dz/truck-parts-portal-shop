
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  field: string;
  logoUrl: string;
  institutionUrl: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  logoUrl?: string;
  status?: string;
}

const educationData: EducationItem[] = [
  {
    year: "2024",
    institution: "King Saud University",
    degree: "Bachelor of Business Administration (BBA)",
    field: "Human Resources Management",
    logoUrl: "/lovable-uploads/e8f13d9e-41e4-4aa1-a8c7-0a31908e58a8.png",
    institutionUrl: "https://ksu.edu.sa/en"
  }
];

const certificationData: CertificationItem[] = [
  {
    name: "CIPD Level 5",
    issuer: "Tharwah",
    date: "In Progress",
    status: "under_process"
  },
  {
    name: "HR Analytics & Automation",
    issuer: "Professional Development",
    date: "2024"
  },
  {
    name: "Talent Development Specialist",
    issuer: "HR Institute",
    date: "2024"
  },
  {
    name: "Workforce Planning & Strategy",
    issuer: "Business Academy",
    date: "2023"
  }
];

const Education = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-linkedin-light-gray via-slate-50 to-white px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-linkedin-gray max-w-3xl mx-auto leading-relaxed">
            Continuously expanding knowledge and expertise in human resources and talent development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center lg:text-left">
              Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {educationData.map((item, index) => (
                <a
                  key={index}
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-white/90 backdrop-blur-sm hover:bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/50 hover:border-linkedin-blue/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg border-4 border-white overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-linkedin-blue/20">
                          <img 
                            src={item.logoUrl} 
                            alt={`${item.institution} logo`}
                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        {/* External link indicator */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-linkedin-blue rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
                          <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-linkedin-blue transition-colors duration-300">
                            {item.degree}
                          </h4>
                          <span className="text-linkedin-blue font-bold text-base sm:text-lg bg-linkedin-blue/10 px-3 py-1 rounded-full group-hover:bg-linkedin-blue/20 transition-colors duration-300">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-linkedin-blue font-bold text-base sm:text-lg lg:text-xl mb-2 group-hover:text-linkedin-blue-hover transition-colors duration-300">
                          {item.institution}
                        </p>
                        <p className="text-slate-600 text-sm sm:text-base lg:text-lg group-hover:text-slate-700 transition-colors duration-300">
                          {item.field}
                        </p>
                        
                        {/* Hover effect indicator */}
                        <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                          <span className="text-xs sm:text-sm text-linkedin-blue font-medium flex items-center justify-center sm:justify-start gap-2">
                            Visit University Website
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center lg:text-left">
              Certifications
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {certificationData.map((item, index) => (
                <div key={index} className={`bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 ${
                  item.status === 'under_process' 
                    ? 'border-linkedin-blue bg-gradient-to-r from-linkedin-blue/10 to-blue-50/50 hover:from-linkedin-blue/15 hover:to-blue-50/70' 
                    : 'border-slate-200/50 hover:border-linkedin-blue/30 hover:bg-white'
                }`}>
                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 transition-all duration-300 ${
                      item.status === 'under_process'
                        ? 'bg-gradient-to-br from-linkedin-blue to-blue-600 text-white shadow-lg scale-105'
                        : 'bg-linkedin-blue text-white hover:scale-105'
                    }`}>
                      {item.issuer.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                        <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                          {item.name}
                          {item.status === 'under_process' && (
                            <span className="ml-2 inline-block px-2 sm:px-3 py-1 bg-gradient-to-r from-linkedin-blue to-blue-600 text-white text-xs font-bold rounded-full shadow-md animate-pulse-blue">
                              In Progress
                            </span>
                          )}
                        </h4>
                        <span className={`font-bold text-xs sm:text-sm lg:text-base flex-shrink-0 ${
                          item.status === 'under_process' ? 'text-linkedin-blue' : 'text-linkedin-blue'
                        }`}>{item.date}</span>
                      </div>
                      <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg">
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

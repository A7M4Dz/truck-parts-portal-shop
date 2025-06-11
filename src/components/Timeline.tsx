
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TimelineItem {
  dateRange: string;
  company: string;
  title: string;
  achievement: string;
  isCurrent?: boolean;
  logoUrl: string;
  companyUrl: string;
}

const timelineData: TimelineItem[] = [
  {
    dateRange: "Jan 2025 – Present",
    company: "Flynas",
    title: "Talent Development Officer",
    achievement: "Driving workforce development by automating key HR workflows and building analytics dashboards that improved decision-making efficiency by 40%.",
    isCurrent: true,
    logoUrl: "/lovable-uploads/d40ea9b9-3717-4f29-a72b-7e0a169ca268.png",
    companyUrl: "https://www.flynas.com/en"
  },
  {
    dateRange: "Aug 2024 – Dec 2024",
    company: "Aramco",
    title: "HR Intern",
    achievement: "Supported onboarding and training processes for 100+ employees at Juymah site, streamlining orientation procedures and reducing time-to-productivity by 25%.",
    logoUrl: "/lovable-uploads/1b2fa2fb-689d-4d66-8047-64ed538b0780.png",
    companyUrl: "https://www.aramco.com/en"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-linkedin-light-gray px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-linkedin-gray max-w-3xl mx-auto leading-relaxed">
            Building expertise across leading organizations in the Kingdom of Saudi Arabia
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Modern timeline line */}
          <div className="hidden sm:block absolute left-6 lg:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/40 to-transparent rounded-full shadow-sm"></div>
          
          <div className="space-y-6 sm:space-y-8">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Timeline connector */}
                <div className={`hidden sm:block absolute left-4 lg:left-6 top-8 w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                  item.isCurrent 
                    ? 'bg-linkedin-blue animate-pulse-blue scale-110' 
                    : 'bg-slate-400 group-hover:bg-linkedin-blue group-hover:scale-110'
                }`}></div>

                {/* Experience card */}
                <a 
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block ml-0 sm:ml-16 lg:ml-20"
                >
                  <div className="bg-white/90 backdrop-blur-sm hover:bg-white border border-slate-200/50 hover:border-linkedin-blue/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">
                    {/* Header section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                      {/* Company logo */}
                      <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-xl border-4 border-white overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-linkedin-blue/20">
                          <img 
                            src={item.logoUrl} 
                            alt={`${item.company} logo`}
                            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        {/* External link indicator */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-linkedin-blue rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      </div>
                      
                      {/* Company info */}
                      <div className="flex-grow text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-3">
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-lg sm:text-xl lg:text-2xl text-linkedin-blue font-bold group-hover:text-linkedin-blue-hover transition-colors duration-300">
                              {item.company}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <span className={`inline-block text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-full transition-all duration-300 ${
                              item.isCurrent 
                                ? 'bg-gradient-to-r from-linkedin-blue to-blue-600 text-white shadow-lg' 
                                : 'bg-slate-100 text-slate-700 group-hover:bg-linkedin-blue/10 group-hover:text-linkedin-blue'
                            }`}>
                              {item.dateRange}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievement */}
                    <div className="px-2 sm:px-0">
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-slate-700 transition-colors duration-300 line-height-loose">
                        {item.achievement}
                      </p>
                    </div>

                    {/* Hover effect indicator */}
                    <div className="mt-4 sm:mt-6 flex items-center justify-center sm:justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs sm:text-sm text-linkedin-blue font-medium flex items-center gap-2">
                        Visit Company Website
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

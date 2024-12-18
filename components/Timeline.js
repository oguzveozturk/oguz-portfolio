import React from "react";

const Timeline = () => {
  // Sample timeline data
  const timelineEvents = [
    {
      date: "04/2019",
      title: "3Togo",
      description: "Jr. iOS Developer",
    },
    {
      date: "07/2020",
      title: "Improver Digital",
      description: "iOS Developer",
    },
    {
      date: "11/2020",
      title: "Mediate Tech.",
      description: "iOS Developer",
    },
    {
      date: "07/2023",
      title: "Bitaksi",
      description: "iOS Developer",
    },
    {
      date: "02/2024",
      title: "Roofstacks",
      description: "Sr. iOS Developer",
    },
    {
      date: "01/2025",
      title: "OBSS",
      description: "Sr. iOS Developer",
    },
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-[-10%] right-[-10%] top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200 dark:bg-gray-700"></div>

        {/* Timeline container */}
        <div className="relative flex justify-between items-center">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex flex-col items-center ${index % 2 === 0 ? 'top-1/2' : 'bottom-1/2'}`}>
              {/* Dot - positioned exactly on the line */}
              <div className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full z-10"></div>

              {/* Label - left-bottom corner attached to dot */}
              <div className={`w-32 absolute ${index % 2 === 0 ? '-top-24' : 'top-4'}`}>
                <div className="bg-white dark:bg-gray-800 shadow-lg p-3 rounded-lg border border-gray-200 dark:border-gray-600 transform transition-transform duration-300 hover:scale-105">
                  <h3 className="font-bold text-sm dark:text-gray-300">{event.date}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{event.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

import React, { useState, useEffect, useRef } from "react";

const statsData = [
  { title: "Startups supported", count: 1000 },
  { title: "Seed Fundings", count: 500 },
  { title: "Investors Engaged", count: 750 },
  { title: "Projects Launched", count: 300 },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  const handleObserver = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.disconnect(); 
    }
  };

  const observer = new IntersectionObserver(handleObserver);

  useEffect(() => {
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  useEffect(() => {
    if (isVisible) {
      const maxCount = Math.max(...statsData.map(item => item.count));
      const duration = 1000; // Total duration in milliseconds
      const incrementTime = duration / maxCount; // Time per increment

      statsData.forEach((item, index) => {
        let count = 0;
        const targetCount = item.count;

        const interval = setInterval(() => {
          if (count < targetCount) {
            count++;
            setCounters((prevCounters) => {
              const newCounters = [...prevCounters];
              newCounters[index] = count;
              return newCounters;
            });
          } else {
            clearInterval(interval);
          }
        }, incrementTime);
      });
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-customBlue text-white font-bold px-20 py-16">
      <div className="flex justify-between">
        {statsData.map((item, index) => (
          <div key={index}>
            <h1 className="text-6xl">{counters[index]}+</h1>
            <h2 className="text-2xl">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

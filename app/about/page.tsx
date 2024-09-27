"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  const pictureWheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-rotate');
          } else {
            entry.target.classList.remove('animate-rotate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pictureWheelRef.current) {
      observer.observe(pictureWheelRef.current);
    }

    return () => {
      if (pictureWheelRef.current) {
        observer.unobserve(pictureWheelRef.current);
      }
    };
  }, []);

  const experiences = [
    { year: 2016, company: 'Edeka' },
    { year: 2019, company: 'Kaufland' },
    { year: 2020, company: 'Aldi' },
  ];

  return (
    <div className="container mx-auto py-16">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8 headline pl-2">Über uns</h1>
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg mb-4">
              Potera ist Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen. Seit unserer Gründung haben wir uns darauf spezialisiert, hochwertige Reinigungslösungen für Unternehmen und Privathaushalte anzubieten.
            </p>
            <p className="text-lg mb-4">
              Unser engagiertes Team besteht aus erfahrenen Fachkräften, die mit modernsten Techniken und umweltfreundlichen Reinigungsmitteln arbeiten. Wir legen großen Wert auf Qualität, Zuverlässigkeit und Kundenzufriedenheit.
            </p>
            <p className="text-lg">
              Mit Potera entscheiden Sie sich für einen Partner, der Ihre individuellen Bedürfnisse versteht und maßgeschneiderte Lösungen anbietet. Lassen Sie uns gemeinsam für eine saubere und gesunde Umgebung sorgen.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div ref={pictureWheelRef} className="relative w-64 h-64">
              {[1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="absolute w-full h-full transition-all duration-1000"
                  style={{
                    transform: `rotate(${(index - 1) * 90}deg)`,
                    transformOrigin: 'center center',
                  }}
                >
                  <Image
                    src={`/images/about-${index}.jpg`}
                    alt={`About us ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 headline-right pr-2">Unsere Erfahrungen</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex">
              <div className="w-24 text-right mr-4">
                <span className="font-bold">{exp.year}</span>
              </div>
              <div className="w-px bg-blue-500 relative">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1 top-1.5"></div>
              </div>
              <div className="flex-grow pl-4">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-gray-600">
                  Erfolgreiche Zusammenarbeit und Bereitstellung von Reinigungsdienstleistungen.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 headline pl-2">Zufriedene Kunden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={`/images/customer-${index}.jpg`}
                  alt={`Customer ${index}`}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Kunde {index}</h3>
                  <p className="text-sm text-gray-600">Unternehmen {index}</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Potera hat unsere Erwartungen übertroffen. Die Reinigungsqualität ist erstklassig, und das Team ist stets professionell und zuverlässig."
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
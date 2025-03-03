import React from 'react';

const Affiliations: React.FC = () => {
  const affiliations = [
    {
      name: "Uttar Pradesh Olympic Associations",
      imageUrl: "https://i.ibb.co/Xkj3NHV3/5-Uttar-Pradesh-Olympic-Associations.png"
    },
    {
      name: "NYKS Uttar Pradesh",
      imageUrl: "https://i.ibb.co/9mQNQbvZ/4-NYKS-Uttar-Pradesh.jpg"
    },
    {
      name: "Indian Council for Sports & Education",
      imageUrl: "https://i.ibb.co/F4vYLYqq/1-Indian-Council-for-Sports-Education.jpg"
    },
    {
      name: "International Health and Fitness Association",
      imageUrl: "https://i.ibb.co/tPNKSFYG/3-International-Health-and-Fitness-Association.jpg"
    },
    {
      name: "Bharat Scout & Guide",
      imageUrl: "https://i.ibb.co/DPfKp0dg/2-Bharat-Scout-Guide.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Affiliations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-800">
                <img 
                  src={affiliation.imageUrl} 
                  alt={affiliation.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center font-medium text-gray-800">{affiliation.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
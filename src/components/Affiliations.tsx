import React from 'react';

const Affiliations: React.FC = () => {
  const affiliations = [
    {
      name: "Uttar Pradesh Olympic Associations & NYKS Uttar Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1569517282132-25d22f4573e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Indian Council for Sports & Education",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "International Health and Fitness Association",
      imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Bharat Scout & Guide",
      imageUrl: "https://images.unsplash.com/photo-1529693662653-9d480530a697?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
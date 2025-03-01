import React from 'react';

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "District Level Sports Competition",
      date: "2025-01-15",
      location: "Lucknow Stadium",
      description: "Annual district level sports competition for schools"
    },
    {
      id: 2,
      title: "Youth Sports Workshop",
      date: "2025-01-28",
      location: "Gorakhpur Community Center",
      description: "Workshop for young athletes to improve skills"
    },
    {
      id: 3,
      title: "State Championship Trials",
      date: "2025-02-10",
      location: "Varanasi Sports Complex",
      description: "Selection trials for state championship"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-700">Upcoming Events</h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Events List */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-green-700">Events</h3>
            <div className="space-y-6">
              {events.map(event => (
                <div key={event.id} className="border-l-4 border-green-700 pl-4 py-3">
                  <h4 className="font-bold text-lg">{event.title}</h4>
                  <p className="text-gray-600">
                    <span className="font-medium">Date:</span> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
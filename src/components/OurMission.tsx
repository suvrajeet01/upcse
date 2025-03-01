import React from 'react';

const OurMission: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Mission</h2>
      <blockquote className="italic text-gray-700 border-l-4 border-blue-800 pl-4">
        <p className="mb-4">
          Uttar Pradesh Council for Sports and Education has been working in Uttar Pradesh for the last 3 years to promote sports and education. UPCSE, which is affiliated to the Indian Council of Sports and Education and is recognized by the Uttar Pradesh Olympic Association, is working on its slogan -
        </p>
        <p className="font-bold text-xl text-green-700 mb-2">
          "खेलेगा गांव तभी तो खेलेगा भारत!"
        </p>
        <p className="font-bold text-xl text-green-700 mb-4">
          (Only if the village plays, India will play.)
        </p>
        <p>
          The Council is also encouraging the youth towards sports in every district and village of the state, in which the Council, with the help of the head of the village and town and the village head, is encouraging the youth to do more sports. JADA is trying to provide more opportunities for sports so that good players get a chance to participate in the competitions held in the district and the state and showcase their talent.
        </p>
      </blockquote>
    </div>
  );
};

export default OurMission;
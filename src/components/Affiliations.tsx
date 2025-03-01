import React from 'react';

const Affiliations: React.FC = () => {
  const affiliations = [
    {
      name: "Uttar Pradesh Olympic Associations",
      imageUrl: "https://www.google.com/imgres?q=Uttar%20Pradesh%20Olympic%20Association&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100063796546070&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FUttarpradesholympicassociation%2F&docid=DylhaIbITimnoM&tbnid=lSMMoBltkNkRNM&vet=12ahUKEwjftPuv7-mLAxWtcPUHHVGPBbsQM3oECBoQAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjftPuv7-mLAxWtcPUHHVGPBbsQM3oECBoQAA"
    },
    {
      name: "NYKS Uttar Pradesh",
      imageUrl: "https://www.google.com/imgres?q=NYKS%20Uttar%20Pradesh&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100067964171164&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FNYKSUP%2F&docid=P6Zbb0RFy03qwM&tbnid=HXcIVMAKJW_xRM&vet=12ahUKEwinm53p7-mLAxUdbfUHHd7FABUQM3oECBUQAA..i&w=266&h=190&hcb=2&ved=2ahUKEwinm53p7-mLAxUdbfUHHd7FABUQM3oECBUQAA"
    },
    {
      name: "Indian Council for Sports & Education",
      imageUrl: "https://www.google.com/imgres?q=Indian%20Council%20for%20Sports%20%26%20Education&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100080180556510&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fp%2FIndian-Council-For-Sports-Education-100080180556510%2F&docid=8rsViorekIv8ZM&tbnid=xOAGRv_xU4Vv0M&vet=12ahUKEwjmpoz47-mLAxXJevUHHdsCKMYQM3oECBwQAA..i&w=899&h=902&hcb=2&ved=2ahUKEwjmpoz47-mLAxXJevUHHdsCKMYQM3oECBwQAA"
    },
    {
      name: "International Health and Fitness Association",
      imageUrl: "https://www.google.com/imgres?q=International%20Health%20and%20Fitness%20Association&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064082771488&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fihfafitness%2F&docid=4305NOzSjby6JM&tbnid=REi-wBFUT72lYM&vet=12ahUKEwiEv-iH8OmLAxU6k68BHTI1FxIQM3oECBUQAA..i&w=1359&h=1359&hcb=2&ved=2ahUKEwiEv-iH8OmLAxU6k68BHTI1FxIQM3oECBUQAA"
    },
    {
      name: "Bharat Scout & Guide",
      imageUrl: "https://www.google.com/imgres?q=Bharat%20Scout%20%26%20Guide&imgurl=https%3A%2F%2Frajsevak.com%2Fwp-content%2Fuploads%2F2021%2F01%2Fthe-bharat-scouts-and-guides.jpg&imgrefurl=https%3A%2F%2Frajsevak.com%2Fthe-bharat-scouts-and-guides%2F&docid=KG8C0468JFSBVM&tbnid=OFFWXp5OjoV_xM&vet=12ahUKEwihiciQ8OmLAxVdjK8BHSCrM4UQM3oECGQQAA..i&w=700&h=692&hcb=2&ved=2ahUKEwihiciQ8OmLAxVdjK8BHSCrM4UQM3oECGQQAA"
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
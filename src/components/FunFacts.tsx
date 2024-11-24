const FunFactsComponent: React.FC = () => {
    const funFacts = [
      {
        fact: "A single recycled plastic bottle saves enough energy to power a 60-watt light bulb for 6 hours!",
        image: "/images/plastic-water-bottle-empty-300x300.jpg",
        alt: "Recycled plastic bottle",
      },
      {
        fact: "Composting 900 kilograms of food waste prevents the production of 225 kilograms of greenhouse gas emissions!",
        image: "/images/compost-fact.jpg",
        alt: "Composting food waste",
      },
      {
        fact: "Planting a tree can absorb up to 21 kilograms of Co2 each year!",
        image: "/images/tree-fact.jpg",
        alt: "Tree planting",
      },
    ];
  
    return (
      <div className="bg-green-200 py-12 px-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-8 text-green-600">Did You Know?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src={fact.image} alt={fact.alt} className="mb-4 rounded-lg shadow-md" />
              <p className="text-gray-700 mb-4">{fact.fact}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default FunFactsComponent;
  
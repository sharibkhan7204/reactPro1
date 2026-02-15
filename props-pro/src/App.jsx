import React from "react";
import CardStyle from "./compo/CardStyle";

const App = () => {
  const Image = [
    {
      img: "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8MXwwfHx8MA%D%3D",
      Name: "Office",
    },
    {
      img: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "Forest",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661611175477-e460bdb5d895?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWdyb3VuZHxlbnwwfDF8MHx8fDA%3D",
      Name: "PLayground",
    },
    {
      img: "https://images.unsplash.com/photo-1768853143267-c168d2b220bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",
      Name: "Car",
    },
    {
      img: "https://images.unsplash.com/photo-1601999007938-f584b47324ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJhaW58ZW58MHwxfDB8fHww",
      Name: "Train",
    },
    {
      img: "https://images.unsplash.com/photo-1606152535780-6b29396e2571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhbXxlbnwwfDF8MHx8fDA%3D",
      Name: "Tram",
    },
    {
      img: "https://images.unsplash.com/photo-1529179307417-ca83d48bd790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWV0cm98ZW58MHwxfDB8fHww",
      Name: "Metro",
    },
    {
      img: "https://images.unsplash.com/photo-1700576211571-6bf9d6bf54af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJ1bGxldCUyMFRyYWlufGVufDB8MXwwfHx8MA%3D%3D",
      Name: "Bullet Train",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {Image.map((elem, idx) => (
        <CardStyle key={idx} img={elem.img} Name={elem.Name} />
      ))}
    </div>
  );
};

export default App;

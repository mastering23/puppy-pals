import React from "react";
import puppyList from "./Data";
import PuppyCardComponent from "./components/PuppCardComponent";

const App = () => {
  const puppies = puppyList();

  return (
    <div>
      <h1>Puppy List</h1>
      {puppies.map((puppy) => (
        <PuppyCardComponent key={puppy.id} puppy={puppy} />
      ))}
    </div>
  );
};

export default App;

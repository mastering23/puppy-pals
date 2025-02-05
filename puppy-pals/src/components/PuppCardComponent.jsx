import React from "react";

const PuppyCardComponent = ({ puppy }) => {
  return (
    <div>
      
      <h2>{puppy.name}</h2>
      <p>Email: {puppy.email}</p>
      <p>Age: {puppy.age}</p>
      <p>Owner ID: {puppy.ownerId}</p>
     <strong><p>Tricks</p></strong> 

      <div>
      { puppy.tricks.length > 0 ? (<ul>
        { puppy.tricks.map((trick) => (
        <li key={trick.id}>
          {trick.title}
        </li>
      ))}</ul>) : "No tricks Available!" }

      </div>
      

    </div>
  );
};

export default PuppyCardComponent;

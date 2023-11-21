import React, { useState } from 'react'
import TypeIt from "typeit-react";
import './home.css'



const HomePage = () => {

  const [buttonText, setButtonText] = useState("Buy Me Sip");
  const [instance, setInstance] = useState(null);

  const toggleFreeze = () => {
    if (instance.is("frozen")) {
      instance.unfreeze();
      setButtonText("Buy ME Sip");
      return;
    }

    instance.freeze();
    setButtonText("Unfreeze");
  };

  return (
    <div style={{
      backgroundImage: `url("https://previews.123rf.com/images/mackoflower/mackoflower2103/mackoflower210300117/165222310-traditional-indian-foods-arranged-as-collage-of-the-cuisine.jpg")`
    }}>

      <div>
        <button onClick={toggleFreeze}>{buttonText}</button>

        <TypeIt
          options={{ loop: true }}
          getAfterInit={(instance) => {
            setInstance(instance);
            return instance;
          }}
        >
          Great Ideas Comes after a Great Sip.
        </TypeIt>
      </div>
      {/* </div> */}
    </div>
  )
}

export default HomePage
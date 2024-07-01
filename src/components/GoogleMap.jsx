import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-area">
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15204.975235059761!2d75.91730131738282!3d17.685939000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5daf3eafc6181%3A0x17f43f2b71770161!2sSolapur%20-Market%20Yard!5e0!3m2!1sen!2sin!4v1718695924372!5m2!1sen!2sin"        
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;

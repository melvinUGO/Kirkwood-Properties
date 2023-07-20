import React from "react";

const OfficeMap = () => {
  return (
    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3964.6243327728744!2d3.5269503!3d6.4422611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6f3d2323f11%3A0x43cb4a4750cca4c5!2sChevyview%20Estate!5e0!3m2!1sen!2sng!4v1687883866114!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default OfficeMap;

import React from "react";

const CamdenMap = () => {
  return (
    <div className="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4461.9076131820775!2d3.529210012186419!3d6.441913287929828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sChevron%2C%20Lekki%20!5e0!3m2!1sen!2sng!4v1688132862417!5m2!1sen!2sng"
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

export default CamdenMap;

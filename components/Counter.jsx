import React from "react";

const Counter = () => {
  return (
    <section className="grid grid-cols-2 gap-3 md:grid-cols-4 text-center">
      <div>
        <h2 className="py-1 text-kirkwood-blue font-medium md:border-r ">
          1000
        </h2>
        <p>HECTARES</p>
      </div>
      <div>
        <h2 className="py-1 text-kirkwood-blue font-medium md:border-r">
          200+
        </h2>
        <p>KIRKWOOD CLIENTS</p>
      </div>
      <div>
        <h2 className="py-1 text-kirkwood-blue font-medium md:border-r">3</h2>
        <p>MEGA PROJECTS</p>
      </div>
      <div>
        <h2 className="py-1 text-kirkwood-blue font-medium md:border-r">50+</h2>
        <p>FACILITIES</p>
      </div>
    </section>
  );
};

export default Counter;

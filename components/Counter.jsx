"use client";
import React, { useRef } from "react";
import { useCountUp } from "react-countup";

const Counter = () => {
  const hectaresRef = useRef(null);
  const clientsRef = useRef(null);
  const projectsRef = useRef(null);
  const facilitiesRef = useRef(null);
  useCountUp({ ref: hectaresRef, end: 15000 });
  useCountUp({ ref: clientsRef, end: 2000 });
  useCountUp({ ref: projectsRef, end: 4 });
  useCountUp({ ref: facilitiesRef, end: 300 });

  return (
    <section className="grid grid-cols-2 gap-3 md:grid-cols-4 text-center">
      <div>
        <div className="py-1">
          <h2
            ref={hectaresRef}
            className=" text-kirkwood-blue font-medium md:border-r "
          />
        </div>
        <p>HECTARES</p>
      </div>
      <div>
        <div className="py-1 text-kirkwood-blue font-medium md:border-r  flex justify-center">
          <div className="flex">
            <h2 ref={clientsRef} />
            <h2>+</h2>
          </div>
        </div>
        <p>KIRKWOOD CLIENTS</p>
      </div>
      <div>
        <div className="py-1">
          <h2
            ref={projectsRef}
            className=" text-kirkwood-blue font-medium md:border-r "
          />
        </div>
        <p>MEGA PROJECTS</p>
      </div>
      <div>
        <div className="py-1 text-kirkwood-blue font-medium md:border-r  flex justify-center">
          <div className="flex">
            <h2 ref={facilitiesRef} />
            <h2>+</h2>
          </div>
        </div>
        <p>FACILITIES</p>
      </div>
    </section>
  );
};

export default Counter;

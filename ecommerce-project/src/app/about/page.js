import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About",
  description: "Generated by create next app",
};

function About() {
  return (
    <>
      <Image
        src="https://images.pexels.com/photos/31075100/pexels-photo-31075100/free-photo-of-charming-venetian-canal-with-historic-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={500}
        height={500}
        alt="img"
        style={{ width: 300, height: 300, objectFit: 'contain' }}
      />

      <Image
        src="https://images.pexels.com/photos/31075100/pexels-photo-31075100/free-photo-of-charming-venetian-canal-with-historic-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={50}
        height={50}
        alt="img"
        style={{ width: 300, height: 300, objectFit: 'contain' }}
      />
    </>
  );
}

export default About;

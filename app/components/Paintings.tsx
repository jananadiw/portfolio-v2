import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ViewMore from "./ViewMore";

const imageList = [
  {
    src: "https://janawcontent.s3.ap-northeast-2.amazonaws.com/1_Girl_and_her_coffee.jpg",
    alt: "artwork 1",
  },
  {
    src: "https://janawcontent.s3.ap-northeast-2.amazonaws.com/6_Serenity_in_submersion.jpg",
    alt: "artwork 2",
  },
  {
    src: "https://janawcontent.s3.ap-northeast-2.amazonaws.com/3_Guiding_light.jpg",
    alt: "artwork 3",
  },
  {
    src: "https://janawcontent.s3.ap-northeast-2.amazonaws.com/2_Into_the_wild.jpg",
    alt: "artwork 4",
  },
];

const hoverEffect = {
  whileHover: { scale: 1.05, transition: { duration: 0.1 } },
};

export default function Paintings() {
  return (
    <section
      id="paintings"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
    >
      <div className="mb-10 grid grid-rows-2 grid-flow-col gap-4">
        {imageList.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={300}
            height={400}
            loading="lazy"
            style={{ pointerEvents: "none" }}
          />
        ))}
      </div>
      <ViewMore text="See More Paintings" type="paintings" />
    </section>
  );
}

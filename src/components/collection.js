import React from "react";
import Style from "./collection.module.css";
import CollecCart from "./collec-cart";
import image1 from "../assets//collection/bandouliere-back-to-school.jpg";
import image2 from "../assets//collection/bandouliere-poignee-metal-et-bi-matiere.jpg";
import image3 from "../assets//collection/cabas-bi-matiere-poche-devant-avec-foulard.jpg";
import image4 from "../assets//collection/sac-cabas-detail-tresse.jpg";
import image5 from "../assets//collection/shopper-bi-matiere-details-clous.jpg";

const Collection = () => {
  return (
    <section id="collection">
      <div className={Style.collection}>
        <button className={Style.btnCollec} href="#collection">
          Collection
        </button>

        <button className={Style.btnMore} href="/">
          See more
          <svg
            width="31"
            height="19"
            viewBox="0 0 31 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.320312 8.17819C0.10677 8.39174 0 8.68535 0 9.05905C0 9.43275 0.120116 9.73972 0.360352 9.97995C0.600587 10.2202 0.90755 10.3403 1.28125 10.3403H26.3457L20.9004 15.8657C20.2598 16.4529 20.2464 17.0535 20.8604 17.6675C21.4743 18.2814 22.0749 18.268 22.6621 17.6274L30.3496 9.93991C30.5098 9.83314 30.6165 9.69968 30.6699 9.53952C30.7233 9.37936 30.75 9.21921 30.75 9.05905C30.75 8.8989 30.7233 8.73874 30.6699 8.57858C30.6165 8.41843 30.5098 8.28497 30.3496 8.17819L22.6621 0.490694C22.0749 -0.149934 21.4743 -0.163281 20.8604 0.450655C20.2464 1.06459 20.2598 1.66517 20.9004 2.25241L26.3457 7.7778H1.28125C0.90755 7.7778 0.587241 7.91126 0.320312 8.17819Z"
              fill="#1E1E1E"
            />
          </svg>
        </button>
      </div>
      <div className={Style.collecScroll}>
        {/* create collec carts inside the scroll */}
        <CollecCart img={image1} />
        <CollecCart img={image2} />
        <CollecCart img={image3} />
        <CollecCart img={image4} />
        <CollecCart img={image5} />

        {/* fin scroll element */}
      </div>
    </section>
  );
};
export default Collection;

import React from "react";
import { Image } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";

export default function Promoted() {
  return (
    <div className=" border frame1   mt-2  bgWhite">
      <p className="d-flex justify-content-between mt-1 mb-0">
        <span className="ml-3"> Promoted</span>
        <span className="mr-3">
          <BsThreeDots />
        </span>
      </p>
      <div className="d-flex ml-3 mr-3 align-items-center">
        <div className="promoted-logo-container">
          <Image
            src="https://media.licdn.com/dms/image/D4D0EAQFpxppPduLQzg/rightRail-logo-shrink_100_100/0/1666993752808?e=1671721200&v=beta&t=fNDQcjGUGdVuJjOuPl8w4oDXfOTghYSRwQZnJDFvAtQ"
            alt="verizon logo"
            className="promoted-logo"
          />
        </div>

        <div className="ml-2">
          <span className="promoted-text-header text-left">
            Online investments
          </span>
          <p className="promoted-text-content">
            Invest and earn income from your assets. Thousands of people earn
            with us
          </p>
        </div>
        <span>
          <SlArrowRight />
        </span>
      </div>
    </div>
  );
}

import type { FC } from "react";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/Hero.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

interface PunjabProps {
  name: string;
  principalSubdivision: string;
  date: string;
  venue: string;
  map: string;
  registration?: string | undefined;
}

const Punjab: FC<PunjabProps> = ({
  date,
  map,
  name,
  principalSubdivision,
  venue,
  registration,
}) => {
  return (
    <div className="w-screen mb-16 sm:mb-20">
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start justify-center mx-24">
          <p className="hidden min-[1537px]:block mb-5 min-[1537px]:mt-8 text-2xl font-semibold text-center text-gblue">
            Hello, We Welcome you to
          </p>
          <Image
            src="/svg/wowcenter.svg"
            width={300}
            height={300}
            alt="circle"
          />
          <div
            className={`uppercase text-transparent bg-gradient-to-r bg-clip-text from-[#2E2525] to-[#733423] text-justify text-[5vw] font-google-sans font-bold ${styles.bgGradientAnim}`}
          >
            {name}
          </div>
        </div>
        <div className="flex mt-3 flex-col items-center justify-center mx-auto">
          <div
            className={`mb-4 my-3 min-[1537px]:mb-8 text-xl sm:text-3xl text-center ${poppins.className}`}
          >
            <div>Date: {date || "To Be Announced"}</div>
            <div className="mt-2 h-[2px] transition-all bg-gred w-full"></div>
          </div>
          <div
            className={`text-center my-4 text-lg sm:text-2xl ${poppins.className}`}
          >
            {map && venue ? (
              <Link href={map} className="flex gap-2 items-center">
                <Image
                  src={"/punjab/location_icon.png"}
                  width={30}
                  height={30}
                  alt="Location icon"
                  loading="lazy"
                />{" "}
                {venue}
              </Link>
            ) : (
              <div>
                <Image
                  src={"/punjab/location_icon.png"}
                  width={30}
                  height={30}
                  alt="Location icon"
                  loading="lazy"
                />
                Coming Soon
              </div>
            )}

            <div className="mt-2 h-[2px] transition-all bg-gyellow w-full"></div>
          </div>
          <div className="mb-4 min-[1537px]:mb-8 w-fit group">
            <button className="flex items-center px-6 py-3 mt-5 text-xl rounded-md cursor-pointer w-fit bg-gblue">
              <span className={`${poppins.className} text-white`}>
                {registration ? (
                  <Link href={registration}>GRAB YOUR SEATS NOW !!</Link>
                ) : (
                  `REGISTRATIONS OPENING SOON !`
                )}
              </span>
            </button>
            <div className="mt-2 h-[0.1rem] rounded-lg transition-all group-hover:bg-ggreen w-full bg-transparent"></div>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <Image
          src={"/punjab/banner.png"}
          width={1440}
          height={380}
          alt="Punjab"
          className="relative w-full"
        />
      </div>
    </div>
  );
};

export default Punjab;

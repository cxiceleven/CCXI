import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/CXIBlue/hero.svg";

export default function Hero2() {
  return (
    <>
      <Container className="flex flex-wrap pb-36">
      <div className="flex items-center  justify-center w-full lg:w-2/3 -mr-40 pl-20 pt-20 -pb-20">
          <div className="">
            <Image
              src={heroImg}
              width="916"
              height="617"
              className="mix-blend-color-dodge"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
            />
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/4 pb-20 -ml-20">
          <div className="max-w-2xl mb-20 flex flex-col items-end">
          <p className="text-xl leading-normal text-right text-gray-500 lg:text-xl xl:text-4xl text-white">
              Welcome To The
            </p>
            <h1 className="text-4xl font-extrabold leading-snug tracking-tight text-right lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-cyan-500 ">
              Cricket club
            </h1>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-11 py-3 text-lg font-medium text-center text-white bg-cyan-500 rounded-full ">
                Join The Club
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

import Image from "next/image";
import Container from "./container";
import roadmapL from "../public/img/CXIBlue/roadmapL.png";
import roadmapR from "../public/img/CXIBlue/roadmapR.png";
import roadmapArc from "../public/img/CXIBlue/roadmapArc.png";
import roadmapBall from "../public/img/CXIBlue/roadmapBall2.png";

export default function Roadmap() {
  return (
    <>
      <div className="bg-no-repeat bg-cover dark:bg-[url('/img/CXIBlue/roadmapBg2.png')]">
        <div className="flex flex-wrap justify-center pb-36">
          <div className="flex items-center w-full lg:w-1/5">
            <div className="pb-[315px] pl-[130px]">
              <Image
                src={roadmapL}
                alt="Hero Illustration"
                layout="intrinsic"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex items-center justify-center relative w-[855px] h-[646px]">
            <Image
              src={roadmapArc}
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
              width="855"
              height="646"
            />
            <div className="group">
            <div className="absolute top-[168px] left-[10px] hover:rotate-180 duration-500 ease-out">
              <Image
                src={roadmapBall}
                alt="Hero Illustration"
                layout="intrinsic"
                loading="eager"
                placeholder="blur"
                width="50"
                height="50"
              />
            </div>
            <div className="absolute top-[178px] left-[86px] text-xl font-medium">
              Phase 01
              <div className="w-40 flex-col justify-between bg-blue-900 rounded-2xl p-4 mt-5 hidden group-hover:flex">
              <p className="text-sm leading-normal ">
                Research on Web3 Idea and Conceptualization Product finalization
                Infrastructure Planning Workflow Design Business Model Design
              </p>
            </div>
            </div>
            </div>
            

            

            <div className="absolute top-[144px] left-[412px] hover:rotate-180 duration-500 ease-out">
              <Image
                src={roadmapBall}
                alt="Hero Illustration"
                layout="intrinsic"
                loading="eager"
                placeholder="blur"
                width="80"
                height="80"
              />
            </div>
            <div className="absolute top-[162px] left-[300px] text-xl font-medium">
              Phase 02
            </div>
            <div className="absolute top-[355px] left-[706px] hover:rotate-180 duration-500 ease-out">
              <Image
                src={roadmapBall}
                alt="Hero Illustration"
                layout="intrinsic"
                loading="eager"
                placeholder="blur"
                width="110"
                height="110"
              />
            </div>
            <div className="absolute top-[310px] left-[575px] text-xl font-medium">
              Phase 03
            </div>
          </div>
          <div className="flex items-center w-full lg:w-1/5 pt-[406px] ml-[-123px]">
            <Image
              src={roadmapR}
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}

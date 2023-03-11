import React from "react";
import Breadcrumb from "@/components/shared/breadcrumb";
import LinearContainer from "@/components/shared/linear-container";
import PurpleButton from "@/components/common/buttons/PurpleButton";
import GradientButton from "../buttons/GradientButton";
import CircleIcon from "@/components/svgs/circle-icon";
import { useRouter } from "next/router";

const SuccessScreen = ({
  children,
  title,
  footer,
  PromoteBtn,
  purplebtn,
  classes,
}) => {
  const router = useRouter();
  return (
    <LinearContainer>
      <Breadcrumb title={title} />
      <div className="w-[90%] mx-auto py-60">
        <div className="text-center">
          <div className="bg-gradient mask mask-hexagon w-[65px] h-[70px] mx-auto flex justify-center items-center">
            <CircleIcon height={34} width={34} className="text-white " />
          </div>
          <p className="text-white font-bold text-[16px] mt-2">Success! </p>
        </div>
        {children}
        <div
          className={`  pb-2 ${
            PromoteBtn ? "w-full mx-auto" : "max-w-[800px] mx-auto"
          } `}
        >
          {PromoteBtn && (
            <div className="py-4">
              <GradientButton
                classes="w-full"
                // onClick={() => setActionmodal(!actionmodal)}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5129 32.2863H25.4843C29.4271 32.2863 30.9986 29.872 31.1843 26.9291L31.9271 15.1291C32.1271 12.0434 29.67 9.42913 26.57 9.42913C25.6986 9.42913 24.8986 8.92913 24.4986 8.1577L23.47 6.08627C22.8129 4.78627 21.0986 3.71484 19.6414 3.71484H16.37C14.8986 3.71484 13.1843 4.78627 12.5271 6.08627L11.4986 8.1577C11.0986 8.92913 10.2986 9.42913 9.42714 9.42913C6.32714 9.42913 3.86999 12.0434 4.06999 15.1291L4.81285 26.9291C4.98428 29.872 6.56999 32.2863 10.5129 32.2863Z"
                    stroke="white"
                    strokeWidth="1.85714"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.8594 12.2852H20.1451"
                    stroke="white"
                    strokeWidth="1.85714"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.9983 26.5709C20.5555 26.5709 22.6412 24.4852 22.6412 21.928C22.6412 19.3709 20.5555 17.2852 17.9983 17.2852C15.4412 17.2852 13.3555 19.3709 13.3555 21.928C13.3555 24.4852 15.4412 26.5709 17.9983 26.5709Z"
                    stroke="white"
                    strokeWidth="1.85714"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </GradientButton>
            </div>
          )}
          <div className="mt-7">
            {purplebtn !== false ? (
              <PurpleButton
                classes={`border border-white/[0.3] text-[#ffffff] ${classes}`}
                outlined={true}
                isGrayBorder={true}
                title={"Close"}
                onClick={()=>router.push("/home")}
              />
            ) : (
              <div
                className={`text-center text-[#667085]`}
                onClick={() => router.push("/")}
              >
                Close
              </div>
            )}
          </div>
        </div>
        <p className="text-white text-center pb-3">{footer && footer}</p>
      </div>
    </LinearContainer>
  );
};

export default SuccessScreen;

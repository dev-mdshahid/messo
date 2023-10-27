import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import userDp from "@/public/media/img/shahid.jpg";
import { siteName } from "@/data/siteData";

type LoginSideBannerProps = {
  className?: string;
};

export default function LoginSideBanner({ className }: LoginSideBannerProps) {
  return (
    <div
      className={
        "hidden h-full items-center bg-messo-600 p-6 md:grid md:p-16 lg:p-20 " +
        className
      }
    >
      <div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#93f8e1]">
          <FaQuoteLeft className="text-messo-600" />
        </div>

        <div className="flex">
          {/* Vertical line */}
          <div className="mt-3 h-auto w-32">
            <div className="mx-auto h-full w-0.5 bg-messo-500"></div>
          </div>

          {/* right side content of vertical line */}
          <div className="">
            <h1 className="relative right-8 mb-10 mt-7 text-5xl font-bold leading-normal text-[#edfcf7]">
              Messy to Organized
            </h1>

            <div className="relative right-5 flex">
              {/* Horizontal Line */}
              <div className="mt-2">
                <div className="mr-8 h-0.5 w-12 bg-messo-500"></div>
              </div>

              {/* Testimonial */}
              <div className="flex flex-col gap-6">
                <p className="text-xs leading-relaxed text-messo-200">
                  {`${siteName} has changed my life drastically. Back in quarantine time, I gained tons of weight but with the help of ${siteName} I managed to balance that again.`}
                </p>
                <div className="flex items-center">
                  <Image
                    src={userDp}
                    width={40}
                    height={40}
                    className="mr-3 rounded-full"
                    alt="User avatar"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#c5e0d7]">
                      Md Shahidul Islam
                    </h4>
                    <small className="text-xs text-[#c5e0d7cb] ">
                      Satisfied Client
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

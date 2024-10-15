"use client";
import React from "react";
import { ContainerScroll } from "@/app/src/components/ui/container-scroll-animation";
import image from "@/app/src/images/github.webp";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl font-semibold pt-56 text-black dark:text-white md:pt-0">
              Unleash the power of <br />
              <span className="text-2xl md:text-[6rem] font-bold mt-1 leading-none">
                Open Source <br />
              </span>
              <br />
            </h1>
          </>
        }
      >
        <Image
          src={image}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

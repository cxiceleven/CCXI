import React from "react";
import Container from "./container";

export default function SectionTitle(props:any) {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        
<h3 className="text-center -mb-12 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-5xl bg-gradient-to-bl from-cyan-400 via-blue-600 to-blue-700 text-transparent bg-clip-text">
              {props.preTitle}
              </h3>
      )}
      {props.title && (
        <h3 className="text-center max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        {props.title}
      </h3>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

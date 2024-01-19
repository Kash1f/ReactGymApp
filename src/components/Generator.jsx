import React from "react";
import SectionWrapper from "./SectionWrapper";

function Header({ index, title, description }) {
  return (
    <div>
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}

const Generator = () => {
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}>

      <Header index={'01'} title={'Pick your poison'}
      description={"Select the Workout you wish to enjoy"}/>

    </SectionWrapper>
  );
};

export default Generator;

import React from "react";
import TitleBlock from "../ui/TitleBlock";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";

const Description = ({ text }) => {
  return (
    <TitleBlock title="Описание">
      <TextContent fontSize={16} fontWeight={400} color={colors.black}>
        {text}
      </TextContent>
    </TitleBlock>
  );
};

export default Description;

import React from "react";
import TextContent from "../../assets/styles/components/TextContent";
import Between from "../../assets/styles/components/Between";
import Flex from "../../assets/styles/components/Flex";
import Wrapper from "../../assets/styles/components/Wrapper";
import { colors } from "../../assets/styles/colors";

const MainBlock = ({
  title,
  priceUSD,
  miniPriceUSD,
  priceSom,
  miniPriceSom,
  house,
}) => {
  return (
    <Wrapper top={true} padding={[16, 0]}>
      <TextContent top={10} fontSize={18} fontWeight={500} color={colors.black}>
        {title}
      </TextContent>
      <Flex top={16} gap={20}>
        <TextContent fontSize={22} fontWeight={600} color={colors.black}>
          {priceUSD}
        </TextContent>
        <TextContent fontSize={14} fontWeight={400} color={colors.gray}>
          {priceSom}
        </TextContent>
      </Flex>
      <Flex top={4} gap={20}>
        <TextContent fontSize={16} fontWeight={500} color={colors.black}>
          {miniPriceUSD}
        </TextContent>
        <TextContent fontSize={12} fontWeight={400} color={colors.gray}>
          {miniPriceSom}
        </TextContent>
      </Flex>

      <Between></Between>
    </Wrapper>
  );
};

export default MainBlock;

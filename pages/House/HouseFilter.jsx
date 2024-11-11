import React from "react";
import Header from "../../components/Header";
import { colors } from "../../assets/styles/colors";
import ButtonLayouts from "../../layouts/buttonLayouts";
import { View } from "react-native";
import Wrapper from "../../assets/styles/components/Wrapper";
import InputSelect from "../../customs/InputSelect";
import { useStateHouse } from "../../context/stateHouseContext";

const HouseFilter = () => {
  const { param } = useStateHouse();

  console.log(param);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header container={true} back={true}>
        Поиск
      </Header>
      <ButtonLayouts title="Показать 123 предложений" color={colors.black}>
        <Wrapper top={true} padding={[8, 8]}>
          <InputSelect
            select={true}
            label="Регион"
            value="region"
            placeholder="Выберите регион"
          />
          <InputSelect
            select={true}
            label="Тип недвижимости"
            value="category"
            placeholder="Выберите тип недвижимости"
          />
          <InputSelect
            select={true}
            label="Количество комнат"
            value="rooms"
            placeholder="Выберите тип недвижимости"
          />
          <InputSelect
            select={true}
            label="Этаж от"
            value="floors"
            keys="floorsFor"
            placeholder="Выберите этаж от"
          />
          <InputSelect
            select={true}
            label="Этаж до"
            value="floors"
            keys="floorsUp"
            placeholder="Выберите этаж до"
          />
          <InputSelect
            select={true}
            label="Этажей в доме от"
            value="floors"
            keys="floorsHouseFor"
            placeholder="Выберите этажей в доме от"
          />
          <InputSelect
            select={true}
            label="Этажей в доме до"
            value="floors"
            keys="floorsHouseUp"
            placeholder="Выберите этажей в доме до"
          />
          <InputSelect
            select={true}
            label="Тип недвижимости"
            value="category"
            placeholder="Выберите тип недвижимости"
          />
        </Wrapper>
      </ButtonLayouts>
    </View>
  );
};

export default HouseFilter;

import React from "react";
import Header from "../../components/Header";
import { colors } from "../../assets/styles/colors";
import ButtonLayouts from "../../layouts/buttonLayouts";
import { View } from "react-native";
import Wrapper from "../../assets/styles/components/Wrapper";
import InputSelect from "../../customs/InputSelect";
import { useStateHouse } from "../../context/stateHouseContext";
import Column from "../../assets/styles/components/Column";
import CheckBoxCustom from "../../customs/CheckBox";

const HouseFilter = () => {
  const { param, filter, setFilter } = useStateHouse();

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
          <Column gap={6}>
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
              value={filter.livingAreaFrom}
              onChangeText={(text) =>
                setFilter({ ...filter, livingAreaFrom: text })
              }
              placeholder="Жилая площадь от, м²"
            />
            <CheckBoxCustom
              active={filter.notEndFloor}
              handle={() => {
                setFilter({ ...filter, notEndFloor: !filter.notEndFloor });
              }}
              text="Не последний этаж"
            />
            <CheckBoxCustom
              active={filter.endFloor}
              handle={() => {
                setFilter({ ...filter, endFloor: !filter.endFloor });
              }}
              text="Только последний этаж"
            />
          </Column>
        </Wrapper>
      </ButtonLayouts>
    </View>
  );
};

export default HouseFilter;

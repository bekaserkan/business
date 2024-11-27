import React from "react";
import Header from "../../components/Header";
import { colors } from "../../assets/styles/colors";
import ButtonLayouts from "../../layouts/buttonLayouts";
import { ScrollView, StyleSheet, View } from "react-native";
import Wrapper from "../../assets/styles/components/Wrapper";
import InputSelect from "../../customs/InputSelect";
import { useStateHouse } from "../../context/stateHouseContext";
import Column from "../../assets/styles/components/Column";
import CheckBoxCustom from "../../customs/CheckBox";
import { useNavigation } from "@react-navigation/native";

const CarFilter = ({ route }) => {
  const { filter, loading, result, setFilter } = useStateHouse();
  const navigation = useNavigation();
  const { id } = route.params || 0;

  const Sybmit = () => {
    console.log(id);
    if (id) {
      navigation.navigate("CarScreens", {
        screen: "CarResult",
      });
    } else {
      navigation.navigate("MainScreen");
    }
  };
  const SybmitFunc = () => {
    navigation.navigate("CarScreens", {
      screen: "CarResult",
    });
  };

  return (
    <View
      style={{
        flex: 1, 
      }}
    >
      <Header handleBack={Sybmit} container={true} back={true}>
        Поиск
      </Header>
      <ButtonLayouts
        handle={SybmitFunc}
        loading={loading}
        title={`Показать ${result.length} предложений`}
        color={colors.black}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex:'1',}} >
            <Column gap={6}>
            <Wrapper top={true} bottom={true} style={styles.wrapper}>
            <InputSelect
                select={true}
                label="Регион"
                value="region"
                placeholder="Выберите регион"
                border={true}
              />
            </Wrapper>
            <Wrapper top={true} bottom={true} style={styles.wrapper}> 
            <InputSelect
                select={true}
                value="category"
                border={true}
                styleContainer={styles.input_center1}
                car={true}
                arrow={true}
              />
            </Wrapper>
            <Wrapper top={true} bottom={true} style={styles.wrapper}>
              <Column gap={6}>
              <InputSelect
                select={true}
                value="rooms"
                placeholder="Выберите тип недвижимости"
                styleContainer={styles.input_center}
                car={true}
              />
              <InputSelect
                select={true}
                label="Валюта"
                value="currency"
                placeholder="Выберите валюту"
              />
              <InputSelect
                select={true}
                value="floors"
                keys="floor"
                border={true}
                car={true}
                styleContainer={styles.input_center}
              />
              </Column>
            </Wrapper>
            <Wrapper top={true} bottom={true} style={styles.wrapper}>
              <Column gap={6}>
              <InputSelect
                select={true}
                value="serie"
                placeholder="Выберите серию"
                car={true}
                styleContainer={styles.input_center}
              />
              <InputSelect
                select={true}
                value="condition"
                placeholder="Выберите состояние"
                car={true}
                styleContainer={styles.input_center}
              />
              <InputSelect
                select={true}
                value="heating"
                placeholder="Выберите отопление"
                car={true}
                styleContainer={styles.input_center}
              />
              <InputSelect
                select={true}
                value="furniture"
                placeholder="Выберите мебель"
                car={true}
                styleContainer={styles.input_center}
              />
              <InputSelect
                select={true}
                value="building_type"
                placeholder="Выберите тип строения"
                border={true}
                car={true}
                styleContainer={styles.input_center}
              />
              </Column>
            </Wrapper>
            <Wrapper top={true} bottom={true} style={styles.wrapper}>
            <CheckBoxCustom
                active={filter.is_urgent}
                handle={() => {
                  setFilter({ ...filter, is_urgent: !filter.is_urgent });
                }}
                text="Срочно"
              />
              <CheckBoxCustom
                active={filter.picture_exists}
                handle={() => {
                  setFilter({
                    ...filter,
                    picture_exists: !filter.picture_exists,
                  });
                }}
                text="Есть фото"
              />
              <CheckBoxCustom
                active={filter.video_exists}
                handle={() => {
                  setFilter({ ...filter, video_exists: !filter.video_exists });
                }}
                text="Есть видео"
              />
              <CheckBoxCustom
                active={filter.exchange}
                handle={() => {
                  setFilter({ ...filter, exchange: !filter.exchange });
                }}
                text="Возможен обмен"
              />
              <CheckBoxCustom
                active={filter.installment}
                handle={() => {
                  setFilter({ ...filter, installment: !filter.installment });
                }}
                text="Возможна рассрочка"
              />
              <CheckBoxCustom
                active={filter.mortgage}
                handle={() => {
                  setFilter({ ...filter, mortgage: !filter.mortgage });
                }}
                text="Возможна ипотека"
              />
            </Wrapper>
         <Wrapper top={true} style={{paddingTop:8,paddingBottom:200}}>
          <Column gap={6}>
          <InputSelect
                select={true}
                label="От кого"
                value="owner_type"
                placeholder="Выберите от кого"
              />
              <InputSelect
                select={true}
                label="Правоустанавливающие документы"
                value="document"
                placeholder="Выберите правоустанавливающие документы"
                border={true}
              />
          </Column>
         </Wrapper>
            </Column>
          </View>
        </ScrollView>
      </ButtonLayouts>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    paddingBottom:8, 
    paddingTop:8, 
  },
  input_center:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_center1 : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  }
})

export default CarFilter;

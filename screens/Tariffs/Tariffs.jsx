import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Container from "../../assets/styles/components/Container";
import Header from "../../components/Header";
import { url } from "../../api/api";
import Loading from "../../ui/Loading";
import { colors } from "../../assets/styles/colors";
import Column from "../../assets/styles/components/Column";
import Wrapper from "../../assets/styles/components/Wrapper";
import Flex from "../../assets/styles/components/Flex";
import TextContent from "../../assets/styles/components/TextContent";
import Wave from "../../customs/Wave";

const Tariffs = () => {
  const [tariffs, setTariffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(true);
  const [selectDetail, setSelectDetail] = useState([]);
  const [plan, setPlan] = useState("");

  console.log(tariffs);

  const getTeriff = async () => {
    try {
      const response = await url.get("tariffs/");
      setTariffs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const postTeriff = async () => {
    setPostLoading(true);
    try {
      const response = await url.post("tariffs/active");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setPostLoading(false);
    }
  };

  useEffect(() => {
    getTeriff();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container none={true} phon={true}>
      <Header back={true} container={true}>
        Продать быстрее
      </Header>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Column
          style={{
            paddingBottom: 200,
          }}
          gap={10}
        >
          {tariffs.map((el, id) => {
            if (el.plans.length > 0) {
              return (
                <Wave key={id} handle={() => setSelectDetail(el)}>
                  <Wrapper top={id == 0} padding={[16, 16]}>
                    <View style={style.box}>
                      <Flex gap={10}>
                        <Image
                          style={{
                            width: 24,
                            height: 24,
                          }}
                          source={{ uri: el.img }}
                        />
                        <TextContent
                          fontSize={20}
                          fontWeight={500}
                          color={colors.black}
                        >
                          {el.name}
                        </TextContent>
                      </Flex>
                      <TextContent
                        top={10}
                        fontSize={14}
                        fontWeight={500}
                        color={colors.gray}
                      >
                        {el.description}
                      </TextContent>
                    </View>
                  </Wrapper>
                </Wave>
              );
            }
          })}
        </Column>
      </ScrollView>
    </Container>
  );
};

const style = StyleSheet.create({
  box: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: colors.phon,
  },
});

export default Tariffs;

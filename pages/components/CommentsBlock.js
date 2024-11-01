import React, { useState } from "react";
import TitleBlock from "../ui/TitleBlock";
import Wave from "../../customs/Wave";
import Between from "../../assets/styles/components/Between";
import Flex from "../../assets/styles/components/Flex";
import More from "../../assets/svg/more";
import Icon from "../../assets/svg/chat";
import TextContent from "../../assets/styles/components/TextContent";
import { colors } from "../../assets/styles/colors";
import { ScrollView, View } from "react-native";
import Column from "../../assets/styles/components/Column";
import ImageCustom from "../../customs/Image";
import ModalDown from "../../ui/ModalDown";
import Close from "../../assets/svg/clode";

const CommentBox = ({ handleAnswer, handleReport, data }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          gap: 10,
        },
        data.answer == true && {
          paddingLeft: 40,
        },
      ]}
    >
      <ImageCustom uri={data.ava} width={40} height={40} borderRadius={50} />
      <Column gap={6}>
        <TextContent fontSize={12} fontWeight={600} color={colors.black}>
          {data.name}
        </TextContent>
        <TextContent fontSize={14} fontWeight={400} color={colors.black}>
          {data.text}
        </TextContent>
        <Flex gap={20}>
          <TextContent>
            <TextContent fontSize={12} fontWeight={400} color={colors.gray}>
              {data.date}
            </TextContent>
          </TextContent>
          <Wave handle={handleAnswer}>
            <TextContent fontSize={12} fontWeight={500} color={colors.gray}>
              Ответить
            </TextContent>
          </Wave>
          <Wave handle={handleReport}>
            <TextContent fontSize={12} fontWeight={500} color={colors.gray}>
              Пожаловаться
            </TextContent>
          </Wave>
        </Flex>
      </Column>
    </View>
  );
};

const CommentsBlock = ({ data, comments }) => {
  const [modal, setModal] = useState(false);

  const handleAnswer = () => {};

  const handleReport = () => {};

  return (
    <View>
      <TitleBlock title="Комментарии">
        <Wave handle={() => setModal(true)}>
          <Between center="center">
            <Flex gap={10}>
              <Icon />
              <TextContent fontSize={16} fontWeight={500} color={colors.gray}>
                {comments == 0
                  ? "Оставьте первый коментарий!"
                  : comments + " комментарий"}
              </TextContent>
            </Flex>
            <More />
          </Between>
        </Wave>
      </TitleBlock>
      <ModalDown modal={modal} setModal={setModal}>
        <Between top={10} center={"center"}>
          <View style={{ width: 24 }} />
          <TextContent fontSize={16} fontWeight={500} color={colors.black}>
            {data.length} комментарий
          </TextContent>
          <Wave handle={() => setModal(false)}>
            <Close />
          </Wave>
        </Between>
        <ScrollView
          style={{
            marginTop: 20,
            width: "100%",
            height: "40%",
          }}
        >
          <Column gap={20}>
            {data.length > 0 ? (
              data?.map((el, id) => (
                <CommentBox
                  data={el}
                  key={id}
                  handleAnswer={handleAnswer}
                  handleReport={handleReport}
                />
              ))
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextContent fontSize={16} fontWeight={500} color={colors.gray}>
                  Оставьте первый коментарий!
                </TextContent>
              </View>
            )}
          </Column>
        </ScrollView>
      </ModalDown>
    </View>
  );
};

export default CommentsBlock;

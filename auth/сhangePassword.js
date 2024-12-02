import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Header from '../components/Header';
import Container from '../assets/styles/components/Container';
import Column from '../assets/styles/components/Column';
import TextContent from '../assets/styles/components/TextContent';
import ButtonLayouts from '../layouts/buttonLayouts';
import { colors } from '../assets/styles/colors';

const сhangePassword = () => {
  return (
        <ButtonLayouts     handle={""}
        loading={""}
        title="Обновить пароль"
        color={colors.blue}>
            <Container>
            <Header back={true}>Смена пароля</Header>
            <Column gap={16} style={{marginTop:16}}>
            <Column gap={4}>
              <TextContent fontSize={14} fontWeight={400} color={colors.black}>
              Старый пароль
              </TextContent>
              <TextInput
                style={[styles.input, styles.input_from_gray]}
                placeholder="Введите старый пароль"
              />
            </Column>
            <Column gap={4}>
              <TextContent fontSize={14} fontWeight={400} color={colors.black}>
              Новый пароль
              </TextContent>
              <TextInput
                style={[styles.input]}
                placeholder="Введите новый пароль"
              />
            </Column>
            <Column gap={4}>
              <TextContent fontSize={14} fontWeight={400} color={colors.black}>
              Повторите новый пароль
              </TextContent>
              <TextInput
                style={[styles.input]}
                placeholder="Повторите новый пароль"
              />
            </Column>
          </Column>
            </Container>
        </ButtonLayouts>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        paddingHorizontal: 16,
        borderRadius: 10,
        fontSize: 16,
        color: colors.black,
        backgroundColor: colors.phon,
      },
})

export default сhangePassword
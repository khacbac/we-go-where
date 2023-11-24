import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { TextInput, StyleSheet, View, ScrollView, Image } from "react-native";
import { AppButton, AppContainer, AppIcon, AppText } from "../../components";
//@ts-ignore
import Omise from "omise-react-native";
import { AppNavigationProps } from "../../types";
import { useStore } from "../../stores";
import { Icons } from "../../assets";
import { useAddCard } from "./useAddCard";
Omise.config("pkey_test_5wvisbxphp1zapg8ie6", "2017-11-12");

type IProps = AppNavigationProps<"CardsList"> & {};
export const AddCardScreen: React.FC<IProps> = observer(({ navigation }) => {
  const { states, funcs } = useAddCard();

  const onAddCard = async () => {};

  const renderNumber = () => {
    return (
      <View>
        <AppText style={styles.fieldLabel}>
          ATM/Debit/Credit card number
        </AppText>
        <View
          style={[
            { flexDirection: "row", alignItems: "center" },
            styles.fieldPlaceHolder,
          ]}
        >
          <TextInput
            placeholder="0000 0000 0000 0000"
            style={[{ flex: 1 }, styles.filedInput]}
            placeholderTextColor={"#CDCDCD"}
            onChangeText={states.setCardNumber}
            keyboardType="numeric"
          />
          {[Icons.visa, Icons.master_card, Icons.jcb_cards].map((e, i) => {
            return (
              <AppIcon
                source={e}
                key={i}
                style={{
                  width: 25,
                  height: 15,
                  resizeMode: "contain",
                  marginLeft: 6,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderName = () => {
    return (
      <View style={styles.nameWrapper}>
        <AppText style={styles.fieldLabel}>Name on Card</AppText>
        <View
          style={[
            { flexDirection: "row", alignItems: "center" },
            styles.fieldPlaceHolder,
          ]}
        >
          <TextInput
            placeholder="Ty Lee"
            style={[{ flex: 1 }, styles.filedInput]}
            placeholderTextColor={"#CDCDCD"}
            onChangeText={states.setCardName}
          />
        </View>
      </View>
    );
  };

  const renderExpiryDate = () => {
    return (
      <View style={[styles.nameWrapper, styles.fill]}>
        <AppText style={styles.fieldLabel}>ExpiryDate</AppText>
        <View
          style={[
            { flexDirection: "row", alignItems: "center" },
            styles.fieldPlaceHolder,
          ]}
        >
          <TextInput
            placeholder="MM/YY"
            style={[{ flex: 1 }, styles.filedInput]}
            placeholderTextColor={"#CDCDCD"}
            onChangeText={states.setCardExpiryDate}
          />
        </View>
      </View>
    );
  };

  const renderCVV = () => {
    return (
      <View style={[styles.nameWrapper, styles.fill, { marginLeft: 16 }]}>
        <AppText style={styles.fieldLabel}>CVV</AppText>
        <View
          style={[
            { flexDirection: "row", alignItems: "center" },
            styles.fieldPlaceHolder,
          ]}
        >
          <TextInput
            placeholder=""
            style={[{ flex: 1 }, styles.filedInput]}
            placeholderTextColor={"#CDCDCD"}
            onChangeText={states.setCardCVV}
          />
        </View>
      </View>
    );
  };

  return (
    <AppContainer>
      <View style={[styles.fill, styles.content]}>
        <View style={styles.fill}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {renderNumber()}
            {renderName()}
            <View style={styles.row}>
              {renderExpiryDate()}
              {renderCVV()}
            </View>
            <Image
              source={Icons.secure_payment}
              style={{ alignSelf: "center", marginTop: 40 }}
            />
          </ScrollView>
        </View>
        <AppButton
          text="Add Card"
          onPress={onAddCard}
          style={{ borderRadius: 100 }}
          disable={!funcs.isValidFnc()}
        />
      </View>
    </AppContainer>
  );
});

const styles = StyleSheet.create({
  fill: { flex: 1 },
  row: { flexDirection: "row", alignItems: "center" },
  content: { padding: 16 },
  fieldPlaceHolder: {
    borderWidth: 1,
    borderColor: "#E6E3E6",
    padding: 14,
    borderRadius: 6,
    marginTop: 8,
  },
  fieldLabel: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "500",
  },
  filedInput: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  nameWrapper: { marginTop: 22 },
});

import React from "react";
import { View, StyleSheet } from "react-native";
import { OmiseCard } from "../../models";
import { AppText } from "../text";
import { AppColors } from "../../themes";
import { AppIcon } from "../icon";
import { Icons } from "../../assets";

type IProps = { card: OmiseCard };
export const OmiseCardItem: React.FC<IProps> = ({ card }) => {
  const renderNumber = () => {
    return (
      <View style={styles.numberWrapper}>
        <AppText style={[styles.number, styles.securenumber]}>{"••••"}</AppText>
        <AppText style={[styles.number, styles.securenumber]}>{"••••"}</AppText>
        <AppText style={[styles.number, styles.securenumber]}>{"••••"}</AppText>
        <AppText style={styles.number}>{card.last_digits}</AppText>
      </View>
    );
  };

  const renderName = () => {
    return (
      <View>
        <AppText style={styles.label}>Name on Card</AppText>
        <AppText style={styles.text}>{card.name}</AppText>
      </View>
    );
  };

  const renderExprires = () => {
    return (
      <View>
        <AppText style={styles.label}>Exprires</AppText>
        <AppText
          style={styles.text}
        >{`${card.expiration_month}/${card.expiration_year}`}</AppText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppIcon source={Icons.visa} style={{ width: 66, height: 21 }} />
      {renderNumber()}
      <View style={styles.bottom}>
        {renderName()}
        {renderExprires()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    shadowColor: "rgba(0,0,0,0.5)",
    backgroundColor: AppColors.white,
    marginHorizontal: 23,
    paddingVertical: 23,
    paddingLeft: 31,
    paddingRight: 71,
    borderRadius: 8,
  },
  bottom: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numberWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  label: {
    fontSize: 10,
    lineHeight: 14,
    color: AppColors.secondaryText,
    fontWeight: "500",
  },
  text: {
    fontSize: 13,
    lineHeight: 18,
    color: AppColors.primaryText,
    marginTop: 12,
    fontWeight: "500",
  },
  number: {
    fontSize: 15,
    lineHeight: 21,
    color: "#808080",
    marginTop: 12,
    fontWeight: "500",
  },
  securenumber: {
    fontSize: 24,
    lineHeight: 27,
  },
});

import React, { useLayoutEffect } from "react";
import {
  FlatList,
  StyleSheet,
  ListRenderItem,
  View,
  Pressable,
} from "react-native";
import {
  AppContainer,
  AppIcon,
  AppText,
  OmiseCardItem,
} from "../../components";
import { AppNavigationProps } from "../../types";
import { NoCardItem } from "./components";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import { useCardsStore } from "./useCardsStore";
import { OmiseCard } from "../../models";
import { Icons } from "../../assets";

type IProps = AppNavigationProps<"CardsList"> & {};
export const CardsListScreen: React.FC<IProps> = observer(({ navigation }) => {
  useCardsStore();
  const { cardsStore } = useStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={{
            width: 24,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 16,
          }}
          onPress={() => navigation.navigate("AddCard")}
        >
          <AppIcon source={Icons.add} size={18} />
        </Pressable>
      ),
    });
  }, []);

  const isEmpty = cardsStore.cards.length <= 0;

  const renderItem: ListRenderItem<OmiseCard> = ({ item }) => {
    return <OmiseCardItem card={item} />;
  };

  const renderContent = () => {
    if (cardsStore.isLoading) {
      return null;
    }
    if (isEmpty) {
      return (
        <NoCardItem
          onCreateAdd={() => {
            navigation.navigate("AddCard");
          }}
        />
      );
    }
    return (
      <FlatList
        data={cardsStore.cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    );
  };

  return <AppContainer>{renderContent()}</AppContainer>;
});

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

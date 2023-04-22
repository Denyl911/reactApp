import { StyleSheet } from "react-native";

// import React, {useEffect, useState} from 'react';
import { Box, ScrollView, Text, Heading, VStack } from "native-base";
import BookCart from "../components/BookCard";

// const getBooks = async () => {
//   const res = await fetch('https://www.dbooks.org/api/recent')
//   const data = await res.json()
// }

// useEffect(() => {
//     getBooks()
// }, []);

export default function BooksScreen() {
  return (
      <ScrollView>
        <VStack  space="2">
          <BookCart title="Prueba1" description="lorem impusum dolo lore..."/>
          <BookCart title="Prueba2" description="lorem impusum dolo lore..."/>
          <BookCart title="Prueba3" description="lorem impusum dolo lore..."/>
          <BookCart title="Prueba4" description="lorem impusum dolo lore..."/>
        </VStack>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

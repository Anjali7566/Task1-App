import React from "react";
import { Stack } from "expo-router";


export default function Rootlayout() {
    return(
        <Stack>
         <Stack.Screen  name="(tabs)"/>
         <Stack.Screen name="index"/>
        </Stack>
    );
}
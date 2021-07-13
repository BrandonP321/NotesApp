import { StyleSheet } from "react-native";
import {baseColors} from "./colors";

export const baseStyles = StyleSheet.create({
    default: {
        // bo
    },
    defaultParagraph: {
        color: baseColors.textPrimaryColor,
        fontSize: 20,
    },
    defaultBtn: {
        color: baseColors.textPrimaryColor,
        backgroundColor: baseColors.siteAccentColor,
        shadowColor: "white",
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 5
    },
    defaultBtnText: {
        color: baseColors.textPrimaryColor,
        fontSize: 20,
    }
});

export const colors = baseColors;
import { StyleSheet } from "react-native";
import {colors, baseStyles} from "../../shared/styles/baseUI";

export default StyleSheet.create({
    inputWrapper: {
        marginBottom: 20
    },
    inputField: {
        padding: 10,
        paddingBottom: 5,
        height: 50,
        fontSize: 30,
        backgroundColor: colors.shadow,
        borderRadius: 5,
        color: colors.textPrimaryColor,
    },
    inputHeading: {
        ...baseStyles.defaultParagraph
    },
    registrationPage: {
        display: "flex",
        padding: 20,
        backgroundColor: colors.bodyBgColor,
        minHeight: "100%"
    },
    inputError: {
        ...baseStyles.defaultParagraph,
        color: colors.warning,
        fontSize: 16,
    },
    submitBtn: {
        ...baseStyles.defaultBtn,
        marginTop: 30
    },
    submitBtnText: {
        ...baseStyles.defaultBtnText,
        textAlign: "center",
    }
});
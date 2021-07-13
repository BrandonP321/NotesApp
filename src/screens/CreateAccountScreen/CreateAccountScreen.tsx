import React from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import styles from "./CreateAccountScreenStyles";
import { useForm, Controller } from "react-hook-form";
import API from '../../utils/API';
import { useState } from 'react';

export interface IRegistrationFields {
    fullName: string;
    email: string;
    password: string;
    passwordReenter: string;
}

interface Props {

}

const CreateAccountScreen = (props: Props) => {
    const [showPasswordsMatchErr, setShowPasswordsMatchErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (fields: IRegistrationFields) => {
        const doPasswordsMatch = errors.password === errors.passwordReEnter;
        setShowPasswordsMatchErr(!doPasswordsMatch);

        if (!doPasswordsMatch) {
            return
        }

        setIsLoading(true);

        API.createAccount(fields)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                switch(err.response.status) {
                    case 500:
                        createAlert("An unexpected error has occured, please try again later");
                        break;
                    case 401:
                        createAlert(`Please fill out field '${err.response.data.missingProperty}'`);
                        break;
                    case 402:
                        createAlert("Looks like that email is already taken");
                        break;
                }
                setIsLoading(false);
            })
    }

    // create an alert with a custom msg and an "ok" button
    const createAlert = (msg: string) => {
        Alert.alert("Oops!", msg, [
            {
                text: "OK"
            }
        ])
    }

    return (
        <View style={styles.registrationPage}>
            <View style={styles.inputWrapper}>
                <Text style={styles.inputHeading}>Name</Text>
                <Controller
                    control={control}
                    rules={{
                        required: false
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputField}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} />
                    )}
                    name="fullName"
                    defaultValue="" />
                {errors.fullName && <Text style={styles.inputError}>This is required</Text>}
            </View>

            <View style={styles.inputWrapper}>
                <Text style={styles.inputHeading}>Email</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputField}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} />
                    )}
                    name="email"
                    defaultValue="" />
                {errors.email && <Text style={styles.inputError}>This is required</Text>}
            </View>

            <View style={styles.inputWrapper}>
                <Text style={styles.inputHeading}>Password</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputField}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} />
                    )}
                    name="password"
                    defaultValue="" />
                {errors.email && <Text style={styles.inputError}>This is required</Text>}
            </View>

            <View style={styles.inputWrapper}>
                <Text style={styles.inputHeading}>Re-Enter Password</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.inputField}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value} />
                    )}
                    name="passwordReEnter"
                    defaultValue="" />
                {showPasswordsMatchErr && <Text style={styles.inputError}>Passwords don't match</Text>}
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.submitBtnText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateAccountScreen

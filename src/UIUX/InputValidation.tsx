import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import React from "react";
import MaskInput from 'react-native-mask-input';

export const ValidationTextInput = React.forwardRef((props: any, ref: any) => {
    const [text, setText] = useState<string>('');
    const [validationMessage, setValidationMessage] = useState<string>('');

    const handleTextChange = (input: string) => {
        setText(input);
        if (!!props.setValue) {
            props.setValue(input);
        }

        if (validationMessage) {
            validate(input);
        }
    };

    const validate = (input: string) => {
        let isValid = true;
        if (!!props.regex) {
            isValid = props.regex.test(input);
            if (!isValid) {
                setValidationMessage(props.validationMessage);
            } else {
                setValidationMessage('');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: "red",
                    marginBottom: 4,
                    display: validationMessage.length != 0 ? 'flex' : 'none'
                }}
            >
                {validationMessage}
            </Text>
            <MaskInput
                ref={ref}
                style={styles.input}
                onChangeText={handleTextChange}
                onEndEditing={() => validate(text)}
                value={text}
                {...props}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {},
    msg: {
        color: "red",
        marginBottom: 4,
    },
    input: {
        width: '100%',
        height: 50,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20,
        color: 'black',
    },
});
export default ValidationTextInput;
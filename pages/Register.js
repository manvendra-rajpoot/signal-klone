import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';
import React, { useState, useLayoutEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Input, Button, Text} from 'react-native-elements';



const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to SignIn",
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior='padding'style={styles.container} >
            <StatusBar style='light' />
            <Text h3 style={{marginBottom: 50}}>Create Your Account</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Name'
                    autoFocus
                    type='text'
                    value={name}
                    onChangeText={ (text) => setName(text)}
                />
                <Input
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChangeText={ (text) => setEmail(text)}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                    type='password'
                    value={password}
                    onChangeText={ (text) => setPassword(text)}
                />
                <Input
                    placeholder='Profile Picture URL (Optional)'
                    type='text'
                    value={imageUrl}
                    onChangeText={ (text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button onPress={register} raised containerStyle={styles.button} title='Continue' />
            <View style={{height:100}}></View>

        </KeyboardAvoidingView>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },

    inputContainer: {
        width: 300,
    },

    button: {
        width: 200,
        marginTop: 10,
    },
});

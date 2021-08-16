import React from 'react';
import { Text, View, TextInput, Pressable, Image, SafeAreaView, ToastAndroid, StatusBar, ScrollView } from 'react-native';
import styles from '../styles/LoginStyle';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor="black"
                translucent={false}
            />
            <ScrollView style={styles.formView}>
                <View style={styles.viewLogo}>
                    <Image source={require('../../assets/logo.jpg')} style={styles.logoImg} width={140} height={140} />
                </View>
                <View style={styles.viewInput}>
                    <View style={styles.viewIcon}>
                        <Icon name="email" color={'#A6BCD0'} size={30} />
                        <View style={styles.lineInput} />
                    </View>
                    <TextInput style={styles.input} placeholder="Email" />
                </View>
                <View style={styles.viewInput}>
                    <View style={styles.viewIcon}>
                        <Icon name="lock" color={'#A6BCD0'} size={30} />
                        <View style={styles.lineInput} />
                    </View>
                    <TextInput style={styles.input} placeholder="Password" />
                </View>
                <Pressable
                    onPress={() => ToastAndroid.show('Quên mật khẩu', ToastAndroid.SHORT)}
                    style={styles.forgot}>
                    <Text style={styles.textForgot}>Quên mật khẩu?</Text>
                </Pressable>
                <Pressable onPress={() => ToastAndroid.show('Sign In', ToastAndroid.SHORT)} style={styles.login}>
                    <Icon name="arrow-right" color={'white'} size={22} />
                    <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
                </Pressable>
                <Text style={styles.textOr}>HOẶC</Text>
                <View style={styles.viewDif}>
                    <Pressable onPress={() => ToastAndroid.show('Facebook', ToastAndroid.SHORT)} style={styles.loginFB}>
                        <Image source={require('../../assets/facebook.png')} style={styles.imgFB} width={45} height={45} />
                    </Pressable>
                    <Pressable onPress={() => ToastAndroid.show('Twitter', ToastAndroid.SHORT)} style={styles.loginTT}>
                        <Image source={require('../../assets/twitter.png')} style={styles.imgTT} width={45} height={45} />
                    </Pressable>
                    <Pressable onPress={() => ToastAndroid.show('Google', ToastAndroid.SHORT)} style={styles.loginGG}>
                        <Image source={require('../../assets/search.png')} style={styles.imgGG} width={45} height={45} />
                    </Pressable>
                </View>
                <View style={styles.viewSignUp}>
                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textSignUp}>KHÔNG CÓ TÀI KHOẢN? ĐĂNG KÍ</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;


import { StyleSheet, Dimensions } from 'react-native';
import COLOR from '../consts/color';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
        // justifyContent: 'center'
    },
    formView: {
        marginTop: height * 0.02,
        width: width * 0.9,
        alignSelf: 'center',
        padding: 8,
    },
    viewLogo: {
        marginBottom: height * 0.01,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // logoImg: {
    //     width: height / 6,
    //     height: '100%',
    // },
    viewInput: {
        // width: width * 0.9,
        flexDirection: 'row',
        backgroundColor: COLOR.input,
        height: 50,
        alignSelf: 'center',
        marginVertical: 12,
        backgroundColor: COLOR.input,
        borderRadius: 5
    },
    viewIcon: {
        width: '15%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    lineInput: {
        width: 1,
        height: 25,
        marginHorizontal: 5,
        backgroundColor: COLOR.greyText
    },
    input: {
        width: '85%',
        height: 50,
        alignSelf: 'center',
        marginVertical: 12,
        paddingVertical: 3,
        backgroundColor: COLOR.input,
        borderRadius: 5,
        fontSize: 17
    },
    // forgot: {
    //     padding: 5,
    // },
    textForgot: {
        marginVertical: 8,
        color: COLOR.greyText,
        fontSize: 15,
        textAlign: 'right'
    },
    login: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        marginVertical: 12,
        backgroundColor: COLOR.primary,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textLogin: {
        color: COLOR.white,
        fontSize: 16,
        marginHorizontal: 3,
    },
    textOr: {
        textAlign: 'center',
        color: COLOR.black,
        fontSize: 17,
        marginVertical: 12
    },
    viewDif: {
        width: '100%',
        height: height * 0.05,
        marginVertical: 16,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    loginFB: {
        width: '30%',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginTT: {
        width: '30%',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginGG: {
        width: '30%',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewSignUp: {
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
    },
    textSignUp: {
        color: COLOR.primary,
    },

});

import { StyleSheet, Dimensions } from 'react-native';
import COLOR from '../consts/color';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: COLOR.white,
        // justifyContent: 'center'
    },
    viewLogo:{
        width: width * 0.9,
        height: height / 6,
        // backgroundColor: COLOR.greyText,
        alignSelf: 'center',
        marginVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        width: height / 6,
        height: '100%',
    },
    viewInput: {
        width: width * 0.9,
        flexDirection: 'row',
        backgroundColor: COLOR.input,
        height: 55,
        alignSelf: 'center',
        marginVertical: 12,
        backgroundColor: COLOR.input,
        borderRadius: 5
    },
    viewIcon: {
        width: '15%',
        height: 55,
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
        height: 55,
        alignSelf: 'center',
        marginVertical: 12,
        paddingVertical: 3,
        backgroundColor: COLOR.input,
        borderRadius: 5,
        fontSize: 17
    },
    forgot: {
        padding: 5,
        width: width * 0.9,
        alignSelf: 'center',
    },
    textForgot: {
        color: COLOR.greyText,
        fontSize: 15,
        textAlign:'right'
    },
    login: {
        width: width * 0.9,
        height: 55,
        borderRadius: 5,
        marginVertical: 15,
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
        // fontWeight: 'bold'
    },
    textOr: {
        textAlign: 'center',
        color: COLOR.black,
        fontSize: 17,
        marginVertical: 5
    },
    viewDif:{
        width: width * 0.9,
        height: height * 0.1,
        marginVertical: 8,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        // backgroundColor: COLOR.greyText
    },
    loginFB:{
        width: '30%',
        height: '100%',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgFB:{
        width: '50%',
        height: '50%'
    },
    loginTT:{
        width: '30%',
        height: '100%',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgTT:{
        width: '50%',
        height: '50%'
    },
    loginGG:{
        width: '30%',
        height: '100%',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgGG:{
        width: '50%',
        height: '50%'
    },
    viewSignUp: {
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20,
        // position: 'absolute',
        // bottom: 12,
    },
    textSignUp: {
        color: COLOR.primary,
    },

});

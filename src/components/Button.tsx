import React from 'react';
import{
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

//type ButtonProps = TouchableOpacityProps;
interface  ButtonProps extends TouchableOpacityProps{
    title : string
}

//export function MyButton({OnPress} : ButtonProps){
//export function MyButton({...rest} : ButtonProps){ 
export function MyButton({title, ...rest} : ButtonProps){ //pegando propriedades extras
    return(
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.6}
            //OnPress = {OnPress}
            {...rest} // asssim pega todas a proriedades TouchbleOpacity passadas 
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center', 
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold'
    },
  
});
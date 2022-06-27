import React from 'react';
import{
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
    skillValue: string
}

export function SkillCard({skillValue, onPress} : SkillCardProps){ //poderia usar o ...rest
    return(
        <TouchableOpacity 
        style={styles.buttonSkill} 
        onPress={onPress} // poderia usar o rest
        >  
            <Text style={styles.textSkill}>
                {skillValue}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    buttonSkill:{
        backgroundColor: '#222',
        padding: 15,
        borderRadius: 40,
        marginVertical: 5
    },
    textSkill:{
        color: '#EEE',
        fontSize: 22
    }
});
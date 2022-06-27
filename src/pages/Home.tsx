import { DEFAULT_EXTENSIONS } from '@babel/core';
import React, {useState, useEffect} from 'react';
import {
    TextInput, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Platform,
    FlatList
} from 'react-native';
import { MyButton } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string,
    name: string
}

export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [greeting, setGreeting] = useState('');

    function handleNewAddNewSkill(){
        if (newSkill === '') return;
        const data = {
            id : String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(oldState => [...oldState, data]);
        setNewSkill('');
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldstate => oldstate.filter(
            skill => skill.id !== id
        ));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12){
            setGreeting('Bom dia!');
        }else if(currentHour >= 12 && currentHour < 18){
            setGreeting('Boa tarde!');
        }else{
            setGreeting('Boa Noite!');
        }
        
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.title}>Welcome Maguila</Text>
            <Text style={styles.greetings} >{greeting}</Text>

            <TextInput 
                style={styles.input} 
                placeholder="New Skill"
                placeholderTextColor="#666"
                onChangeText={setNewSkill}  
                value={newSkill}
            />

            <MyButton onPress={handleNewAddNewSkill}  title="Add" />

            <Text style={[styles.title,  {marginVertical: 30}]}> My Skills </Text>


            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <SkillCard 
                        skillValue={item.name} 
                        onPress={() => handleRemoveSkill(item.id)}  
                    /> 
                )}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        padding: 15,
        backgroundColor: '#121015'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
        marginBottom: 5
    },
    input:{
        backgroundColor: '#333',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginVertical: 15,
        borderRadius: 7,
        textAlignVertical: 'top'
    },
    greetings:{
        color: 'white',
        fontSize: 18
    }
});
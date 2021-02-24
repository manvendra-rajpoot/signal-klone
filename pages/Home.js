import React, {useLayoutEffect} from 'react'
import { StyleSheet, ScrollView, SafeAreaView, Text, View } from 'react-native'
import CustomListItem from '../components/CustomListItem';

const Home = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerStyle: {backgroundColor: '#fff'},
            headerTitleStyle: {color: 'black'},
            headerTintColor: 'black',
            
        });
        
    }, []);


    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({});

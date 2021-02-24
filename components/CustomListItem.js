import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';

const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem>
            <Avatar 
                rounded
                source={{
                    uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: 'bold'}}>
                    Elon Musk
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail' >
                    This is my first project on React-Native with Expo platform thanks to CP team for his wonderful stream! Love from India
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem;

const styles = StyleSheet.create({})

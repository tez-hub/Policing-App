import React, {useState, useEffect, useCallback} from 'react'
import {Text, View} from 'react-native'
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

 
const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    

    useEffect(() => {
        setMessages([{
            _id: 1,
            text: 'Hello, How can we help you?',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'Chatbot',
                avatar: 'data:image/jpeg;base64,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',
            },

        }])
    }, []);

    

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages),
        );
    }, []);

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons
                        name="send-circle"
                        size={32}
                        color='#2e64e5'
                        style={{marginBottom: 5, marginRight:5}} />
                </View>
            </Send>
        )
    }

    const renderBubble = (props) => {
        return (
            <Bubble 
            {...props}
            wrapperStyle={{
                right:{
                    backgroundColor: '#2e64e5'
                }
            }}
            textStyle={{
                right: {
                    color: '#fff'
                }
            }}
        />
        )
        
    };

    const scrollToBottomComponent = () => {
        return(
            <FontAwesome name='angle-double-down' size={22} color='#333' />
        )
    }

    return (
        <GiftedChat messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id:1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
        />
    )
}

export default ChatScreen

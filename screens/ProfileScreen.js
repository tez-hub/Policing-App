import React, {useState} from 'react'
import {Text, View, Input, Image, ImageBackground, TouchableOpacity} from 'react-native'
import {ScrollView, TextInput} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'
import { AntDesign } from '@expo/vector-icons'; 
import Post from './Post'

const ProfileScreen = () => {
    
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
                backgroundColor: '#e7c582'
            }}
        >
            <View style={{
                height: 260,
                width: '100%',
                paddingHorizontal:35
            }}>
                <View style={{
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 25,
                        color: '#fff',
                        paddingVertical: 25
                    }}> Make a post
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >

                        <View style={{
                            // flexDirection: 'row',
                            borderColor: '#9ca1ac',
                            borderRadius: 20,
                            borderWidth: 0.2,
                            paddingVertical: 5,
                            alignItems:'center'
                        }}>
                            <TextInput 
                                placeholder='Share something...'
                                style={{
                                    paddingHorizontal:30,
                                    fontSize: 11,
                                    width: "90%",
                                    color: '#9ca1ac'
                                }}
                            />
                            

                        </View>
                        <AntDesign
                            name="camera"
                            size={24}
                            color="black"
                            style={{
                                marginLeft: 20,
                            }}
                        />
                    </View>

                </View>
            </View>
            <View style={{
                backgroundColor:'#fff',
                borderTopLeftRadius:40,
                borderTopRightRadius:40,
                height:1200,
                paddingHorizontal:35
            }}>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 20
                }}>
                    <TouchableOpacity
                        style={{
                            borderBottomColor:'#044244',
                            borderBottomWidth: 4,
                            paddingVertical: 6
                        }}
                    >
                        <Text style={{
                            color: '#e7c582'
                        }}>POSTS</Text>

                    </TouchableOpacity>

                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Post
                        name = 'Tez KE'
                        profile={require('../assets/picpost.jpg')}
                        photo={require('../assets/picpost.jpg')}
                    />
                    <View style={{
                        height:160,
                        backgroundColor: '#3c636c',
                        width: 20,
                        marginLeft: 20,
                        marginTop: 120,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>

                    </View>
                    

                </View>
                <Text style={{
                    fontSize: 15,
                    marginTop: 10
                }}>This is just a random text which should not actually be here but, it is.</Text>

            </View>

        </ScrollView>
        
    )
}

export default ProfileScreen

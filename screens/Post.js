import React from 'react'
import {Text, View, Image, ImageBackground} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'

// export default class Post extends React.Component{

const Post = (props) => {
    // state={
    //     liked:false
    // }
    // onLike=()=> {
    //     this.setState({liked:this.state.liked})
    // }
    // render(){

        // const {name, profile, photo, onPress} = props
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 25,
                    alignItems: 'center'
                }}>
                    <View style={{width:'20%'}}>
                        <Image
                            source={props.profile}
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 13
                            }}
                        />
                    </View>
                    <View style={{
                        width: '60%'
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#044244',
                            marginLeft: 20
                        }}>{props.name}</Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#9ca1a2',
                            marginLeft: 20
                        }}>
                            3 hrs
                        </Text>

                    </View>
                    <View style={{
                        width: '20%',
                        alignItems:'flex-end'
                    }}>
                        <Icon 
                            name='sound-mix'
                            color='#044244'
                            size={20}
                        />

                    </View>

                </View>
                <View style={{
                    flexDirection:'row',
                    width:'100%',
                    paddingTop:20
                }}>
                    <ImageBackground
                        source={props.photo}
                        style={{
                            width:'100%',
                            height:220
                        }}
                        imageStyle={{
                            borderRadius:30
                        }}
                    >
                        <View style={{
                            height: '100%',
                            flexDirection: 'row',
                            alignItems:"flex-end",
                            justifyContent:"flex-end"
                        }}>
                            {/* <TouchableOpacity
                                onPress={onPress}
                                style={{
                                    marginBottom: 20,
                                    borderRadius: 5,
                                    padding: 5,
                                    backgroundColor: '#e8e8e8'
                                }}
                            >
                                <Icon
                                    name='forward'
                                    color='#044244'
                                    size={20}
                                />

                            </TouchableOpacity> */}


                            <TouchableOpacity
                                // onPress={this.onLike}
                                style={{
                                    marginBottom: 20,
                                    borderRadius: 5,
                                    padding: 5,
                                    backgroundColor: '#e8e8e8',
                                    marginLeft: 10,
                                    marginRight: 20
                                }}
                            >
                                {/* <Icon
                                    name= {this.state.liked === true ? "heart": "heart-outlined"}
                                    color={this.state.liked===true ? "red":'#044244'}
                                    size={20}
                                /> */}
                                

                            </TouchableOpacity>

                        </View>

                    </ImageBackground>

                </View>
                
            </View>
        )
    
}

export default Post;

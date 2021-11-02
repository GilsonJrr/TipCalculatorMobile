import styled from 'styled-components/native';
import React,{useState} from 'react';
import { View, SafeAreaView, Text, Image, Button, FlatList} from 'react-native';

export const SafeArea = styled.SafeAreaView`
    background: #C5E4E7;
    flex: 1;
`;

export const Logo = styled.View`
    justify-content: center;
    align-items: center;
    height: 12%;
`;

export const Body = styled.View`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 20px;
`;

export const TotalBodyDiv = styled.View`
    margin-top: 20px;
    align-self: center;
    flex-direction: row;
    height: 17%;
    background: #00474B;
    border-radius: 20px;
`;

export const TotalBody01 = styled.View`
    width: 35%;
    background: #00474B;
    border-top-left-radius: 20px;
`;

export const TotalBody02 = styled.View`
    width: 55%;
    background: #00474B;
    border-top-right-radius: 20px;
    padding-top: 5px;
    align-items: flex-end;
    padding-right: 15px;
    justify-content: space-around;
`;

export const Div01 = styled.View`
    padding-top: 15px;
    padding-left: 15px;
`;

export const TotalBody03 = styled.View`
    height: 9%;
    width: 90%;
    align-self: center;
    background: #00474B;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    padding-top: 5px;
`;

export const TipValue = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 170px;
    height: 50px;
    background: #00474B;
    border-radius: 8px;
`;

export const TipValueInput = styled.View`
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 170px;
    height: 50px;
    background: #00474B;
    border-radius: 8px;
`;

export const RestButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 90%;
    height: 50px;
    background: #26C2AD;
    border-radius: 8px;
`;

export const TipLine = styled.FlatList`
    align-self: center;
    flex-grow: 0;
`;

export const Imput = styled.View`
    flex-direction: row;
    justify-content: center;
    padding-right: 20px;
    align-self: center;
    width: 350px;
    height: 45px;
    background: #F3F8FB;
    border-radius: 5px;
`;

export const ResteText = styled.Text`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #00504E;
`;

export const LogoText = styled.Text`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #3D6666;
`;

export const Titles = styled.Text`
    padding-left: 25px;
    padding-top: 25px;
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #3D6666;
`;

export const TipValueText = styled.Text`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #E9F8F8;
`;

export const TextResult = styled.Text`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
`;

export const ModalView = styled.View`
    background-Color: #ffffff;
    width: 90%;
    border-Radius: 20; 
    align-Items: center; 
    justify-Content: center;
`;

export const ModalTitulo = styled.Text`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #3D6666;
    margin-top: 30px;
    margin-bottom: 10px;
`;

export const ModalPerct = styled.Text`
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #3D6666;
`;

export const ModalButtom = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    background: #26C2AD;
    border-radius: 8px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const ModalImput = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 45px;
    background: #F3F8FB;
    border-radius: 5px;
    margin: 10px;
`;
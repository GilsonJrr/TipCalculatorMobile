import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, Image, TextInput, FlatList, Modal, TouchableOpacity } from 'react-native';

import {SafeArea, Body, Logo, LogoText, Titles, Imput, TipValue, Div01, TextResult, RestButton, ResteText, 
        TipLine, TipValueText, TotalBody01, TotalBody02, TotalBody03, TotalBodyDiv, TipValueInput, ModalView, 
        ModalTitulo, ModalButtom, ModalPerct, ModalImput} from './Styles';

import * as Animatable from 'react-native-animatable';

const LogoAnimated = Animatable.createAnimatableComponent(Logo);
const BodyAnimated = Animatable.createAnimatableComponent(Body);

export default function App() {

  const [Percentage, setPercentage] = useState ([
    {id: '1', percent: '5%', value: 0.05, color: '#00474B', colorText: '#E9F8F8', colorSelect: '#26C2AD', colorTextSelect: '#00504E'},
    {id: '2', percent: '10%', value: 0.10, color: '#00474B', colorText: '#E9F8F8', colorSelect: '#26C2AD', colorTextSelect: '#00504E'},
    {id: '3', percent: '15%', value: 0.15, color: '#00474B', colorText: '#E9F8F8', colorSelect: '#26C2AD', colorTextSelect: '#00504E'},
    {id: '4', percent: '25%', value: 0.25, color: '#00474B', colorText: '#E9F8F8', colorSelect: '#26C2AD', colorTextSelect: '#00504E'},
    {id: '5', percent: '50%', value: 0.50, color: '#00474B', colorText: '#E9F8F8', colorSelect: '#26C2AD', colorTextSelect: '#00504E'},
    {id: '6', percent: 'Custom', color: '#F3F8FC', colorText: '#ADCCCE'},
  ])
  const [number, setNumber] = useState(0)
  const [total, setTotal] = useState(0)
  const [porcentagem, setPorcentagem ] = useState (0)
  const [TipPerson, setTipPerson] = useState(0)
  const [Tip, setTip] = useState(0)
  const [custom, setCustom] = useState(false)
  const [percentCuston, setPercentCuston] = useState(0)

  function Reset() {
    setNumber(0)
    setTotal(0)
    setTipPerson(0)
    setTip(0)
    setPorcentagem(0)
    setPercentCuston(0)
  }

  function CallCustom() {
    setPercentCuston(0)
    if(number != 0 && total != 0){
      setCustom(true)
    }
  }

  function PercentCustonFunction() {
    
    setCustom(false)
    if(number != 0 && total != 0){
      this.TipPercent = percentCuston/100
      setTip((parseInt(total)*this.TipPercent)/parseInt(number))
      setTipPerson(((parseInt(total)*this.TipPercent)+parseInt(total))/parseInt(number)) 
    }
    setPorcentagem(0)
  }

  function Percentages (props){


    const TipPerPerson =()=>{
      setPercentCuston(0)
      if(number != 0 && total != 0){
        setPorcentagem(props.data.value)
        this.TipPercent = props.data.value
        setTip((parseInt(total)*this.TipPercent)/parseInt(number))
        setTipPerson(((parseInt(total)*this.TipPercent)+parseInt(total))/parseInt(number)) 
      }
    }

    return(

      <View>
        {props.data.value === porcentagem &&
        <TipValue 
          onPress={TipPerPerson}
          style={{ backgroundColor: props.data.colorSelect}}
        >
            <TipValueText
              style={{ color: props.data.colorTextSelect}}
            >{props.data.percent}</TipValueText>
        </TipValue>}

        {props.data.value !== porcentagem  && props.data.percent !== 'Custom' &&
        <TipValue 
          onPress={TipPerPerson}
          style={{ backgroundColor: props.data.color}}
        >
            <TipValueText
              style={{ color: props.data.colorText}}
            >{props.data.percent}</TipValueText>
        </TipValue>}

        {props.data.percent === 'Custom' &&
        <TipValue 
          onPress={CallCustom}
          style={{ backgroundColor: props.data.color}}
        >
          <TipValueText
            style={{ color: props.data.colorText}}
          >{percentCuston <= 0 ? 'Custom' : percentCuston+'%'}</TipValueText>
        </TipValue>}

      </View>
    )

  }

 return (
   <SafeArea>

     
     <LogoAnimated animation="fadeIn">
        <LogoText>S P L I</LogoText>
        <LogoText>T T E R</LogoText>
     </LogoAnimated>

     <BodyAnimated animation="bounceInUp">

       <Titles>Bill</Titles>
       <Imput>
          <View style={{width: '15%', justifyContent:'center', alignItems:'center' }}>
            <Image
              source={require('./SRC/assets/image/icon-dollar.png')}
            />
          </View>
          <View style={{ width: '85%', alignItems:'flex-end', justifyContent:'center'}}>
            <TextInput
                style={{fontSize: 18, fontWeight: 'bold', fontFamily: 'Space Mono'}}
                onChangeText={setTotal}
                value={total}
                placeholder="0"
                keyboardType="numeric"
            />
          </View>
       </Imput>

       <Titles>Select tip %</Titles>

       <TipLine
        data={Percentage}
        renderItem={ ({item}) => <Percentages data={item}/> }
        scrollEnabled={false}
        numColumns={2}
       />

       <Titles>Number of People</Titles>

       <Imput>
        <View style={{width: '15%', justifyContent:'center', alignItems:'center' }}>
          <Image
            source={require('./SRC/assets/image/icon-person.png')}
          />
        </View>
        <View style={{ width: '85%', alignItems:'flex-end', justifyContent:'center'}}>
        <TextInput
            style={{fontSize: 18, fontWeight: 'bold', fontFamily: 'Space Mono'}}
            onChangeText={setNumber}
            value={number}
            placeholder="0"
            keyboardType="numeric"
        />
        </View>
       </Imput>


       <TotalBodyDiv>
        <TotalBody01>
          <Div01>
            <TextResult style={{color: '#D5E7E7', fontSize: 18 }}>Tip Amount</TextResult>
            <TextResult style={{color: '#78AAAE', fontSize: 14 }}>/ person</TextResult>
          </Div01>
          <Div01>
            <TextResult style={{color: '#D5E7E7', fontSize: 18 }}>Total</TextResult>
            <TextResult style={{color: '#78AAAE', fontSize: 14 }}>/ person</TextResult>
          </Div01> 
        </TotalBody01>
        <TotalBody02>
            <TextResult style={{color: '#25C2AD', fontSize:30 }}>$ {Tip.toFixed(2)}</TextResult>
            <TextResult style={{color: '#25C2AD', fontSize:30 }}>$ {TipPerson.toFixed(2)}</TextResult>
        </TotalBody02>
       </TotalBodyDiv>
       <TotalBody03>
          <RestButton onPress={Reset}>
            <ResteText>RESET</ResteText>
          </RestButton>
       </TotalBody03>

     </BodyAnimated>


    <Modal 
      animationType="fade"
      transparent={true}
      visible={custom}
    >
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.7)', alignItems:'center', justifyContent:'center'}}>
        <ModalView>
          <ModalTitulo>Custom</ModalTitulo>

          <ModalImput>
            <View style={{ width: '50%', alignItems:'flex-end', justifyContent:'center'}}>
            <TextInput
                style={{fontSize: 18, fontWeight: 'bold', fontFamily: 'Space Mono'}}
                onChangeText={setPercentCuston}
                value={percentCuston}
                placeholder="0"
                keyboardType="numeric"
            />
            </View>
            <View style={{width: '50%', justifyContent:'center', alignItems:'flex-start' }}>
              <ModalPerct> %</ModalPerct>
            </View>
          </ModalImput>

          <ModalButtom onPress={PercentCustonFunction}>
            <ResteText>OK</ResteText>
          </ModalButtom>
        </ModalView>
      </SafeAreaView>
    </Modal>

   </SafeArea>

  );
}
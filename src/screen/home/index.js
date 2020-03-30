import React, { Component } from "react";
import { getAllBooks } from "../../actions/books.js";
import {
  Container,
  Content,
  Text,
  Card,
  Header,
  Body,
  Button,
  Left,
  Title,
  Icon,
  CardItem
} from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomeHeader from "../../components/customHeader.js";
import {View, ImageBackground} from "react-native"
class HomeScreen extends Component {
  // componentDidMount() {
  //   this.props.getAllBooks();
  // }

  render() {
    // console.log(this.props.count);
    return (
      <Container>
        <CustomeHeader navigation={this.props.navigation} title="Home" disableBackButton = {true} />
        <Content>
          <View>
          <ImageBackground
                source={require('../../../assets/img/trainee.jpg')}
                    
                style={{
                    height: 350,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                />
                </View>
        </Content>
      </Container>
      
      
    );
    
  }
}

export default HomeScreen;

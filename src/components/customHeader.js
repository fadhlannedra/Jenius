import React, { Component } from "react";
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
import { styles } from "./style";
import PropTypes from "prop-types";

class CustomHeader extends Component {
  render() {
    return (
        <Header>
            <Left>
                {this.props.disableBackButton ? 
                    <Button transparent onPress={() =>
                        this.props.navigation.openDrawer()}>
                        <Icon name='menu'/>
                    </Button> :
                    <Button transparent onPress={() =>
                          this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back'/>
                    </Button>
                }
            </Left>
            <Body>
                <Title>{this.props.title}</Title>
            </Body>
        </Header>
    );
}
static propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object,
    disableBackButton: PropTypes.bool
}
}

export default CustomHeader;

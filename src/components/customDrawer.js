import React, {Component} from "react";
import {ImageBackground} from "react-native"
import {Container, Header, Content, ListItem, Left, Icon, Button, Text, Right, Switch, Body} from "native-base";


  const MenuItems = [
    {
      id: "1",
      icon: "home",
      label: "Home",
      target: "Home"
    },

    {
      id: "2",
      icon: "people",
      label: "Books",
      target: "Books" 
    },
    {
      id: "3",
      icon: "books",
      label: "Students",
      target: "CounterIncrement"
    },
    {
      id: "4",
      icon: "cart",
      label: "Transaction",
      target: "CounterDecrement" 
    },

  ];

  class CustomDrawer extends Component {

    closeDrawer = () => {
        this.props.navigation.closeDrawer();
    };

    openDrawer = () => {
        this.props.navigation.openDrawer();
    };

    navigate = (target) => {
        this.props.navigation.navigate(target);
    };

    renderListItem(data, index) {
      return (
        <ListItem key={"item-" + index} icon onPress={() => this.navigate(data.target)}>
          <Left>
            <Icon active name={data.icon}/>
          </Left>
          <Body>
            <Text>{data.label}</Text>
          </Body>
          </ListItem>
      );
    }
    
    render(){
      return (          
            <Container>
            <Content>
                <ImageBackground
                source={require('../../assets/img/isuy.png')}
                    
                style={{
                    height: 120,
                    alignSelf: "stretch",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                />
                {MenuItems.map((item, index) => this.renderListItem(item, index))}
            </Content>
          </Container>
        );
    }
}

export default CustomDrawer;
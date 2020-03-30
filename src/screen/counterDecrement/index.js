import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Card,
  Header,
  Body,
  Button,
  Title,
  CardItem
} from "native-base";
import { decrement } from "../../actions/counter.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { styles } from './style';
import CustomeHeader from "../../components/customHeader.js"
class CounterDecrement extends Component {
  render() {
    console.log(this.props.count);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Redux Decrement</Title>
          </Body>
        </Header>
        <CustomeHeader navigation={this.props.navigation} title="Decrements" disableBackButton = {true}/>
        <Content padder>
          <Card>
            <CardItem>
              <Text>{this.props.count}</Text>
            </CardItem>
          </Card>
          <Button style={styles.jarak} rounded danger onPress={() => this.props.decrement()}>
            <Text>Kurang</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { decrement: decrement },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CounterDecrement);

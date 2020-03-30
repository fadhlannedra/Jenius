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
import { increment } from "../../actions/counter.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { styles } from './style';
import CustomeHeader from "../../components/customHeader.js"
class CounterIncrement extends Component {
  render() {
    console.log(this.props.count);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Redux Counter</Title>
          </Body>
        </Header>
        <CustomeHeader navigation={this.props.navigation} title="Increments" disableBackButton = {true}/>
        <Content padder>
          <Card>
            <CardItem>
              <Text>{this.props.count}</Text>
            </CardItem>
          </Card>
          <Button style={styles.jarak} rounded success onPress={() => this.props.increment()}>
            <Text>Tambah</Text>
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
    { increment: increment },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CounterIncrement);

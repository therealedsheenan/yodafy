import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';
import { Button, Text } from 'native-base';
import axios from 'axios'


export default class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      yodaMessage: '',
      text: ''
    }
  }
  handleMessageChange (e) {
    this.setState({
      message: e.target.value
    })
  }
  onSubmit () {
    axios({
      method:'get',
      params: {
        sentence: this.state.text
      },
      headers: {
        "X-Mashape-Key": "UwcACiX6sBmshVe12iFHLZytSVE4p1146dijsnhCTxpWk8OqtM",
        "Accept": "text/plain"
      },
      url:'https://yoda.p.mashape.com/yoda',
    })
    .then(function(response) {
      this.setState({
        yodaMessage: response.data
      })
    }.bind(this));

  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Input onChangeText={(text) => this.setState({text})}
                     value={this.state.text} placeholder="Enter message" />
            </Item>
            <Button success onPress={this.onSubmit}>
              <Text>Yodafy</Text>
            </Button>
            <Text>{this.state.yodaMessage}</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'green',
  }
};
import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

// static quote
// API Call
// No need for Database call,
// Bootstrap Required

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    axios.get('https://goquotes-api.herokuapp.com/api/v1/all/quotes')
      .then(res => {
        let data = res.data.quotes;
        let quoteNum = Math.floor(Math.random() * data.length);
        let randomQuote = data[quoteNum];

        this.setState({
          quote: randomQuote['text'],
          author: randomQuote['author']
        });
      });
  }

  getNewQuote = () => {
    this.getQuote();
  }

  render() {
    const { quote, author } = this.state;
    return (
      <div id='wrapper'>
        <h1 className='title'>headSpace</h1>

        <div id='quote-box'>
          <div id='text'><p>{quote}</p></div>
          <div id='author'><h5>{author}</h5></div>
          <div id='buttons'>
            <Button id='new-quote' onClick={this.getNewQuote}>New Quote </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;

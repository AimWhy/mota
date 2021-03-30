import React from 'react';
import ReactDOM from 'react-dom';
import { model } from "../src";

const createItems = (num = 2000) => {
  return new Array(num).fill('').map((num, index) => {
    return { size: 100, num, index };
  });
};

const data = { size: 100 };

@model(data)
export class Item extends React.PureComponent {
  render() {
    const { size } = this.model;
    return <div style={{
      width: size, height: 20, margin: 5, background: 'red'
    }}>
    </div>
  }
}

@model(data)
export class App extends React.PureComponent {

  input = (event) => {
    this.model.size = Number(event.target.value);
    this.model.size = Number(event.target.value) * 2;
    // this.model.items.forEach(item => {
    //   item.size = this.model.size;
    // });
  }

  onClick = () => {
    this.model.size = 10;
    // this.model.size = 20;
  }

  items = createItems();

  render() {
    window.com = this;
    const { items, size } = this.model;
    return <div>
      <div>
        <input onChange={this.input} value={size || ''} />
        <button onClick={this.onClick}>click</button>
      </div>
      <div>
        {this.items.map(item => {
          return <Item key={item.index} />
        })}
      </div>
    </div>
  }
}

window.app = ReactDOM.render(<App />, document.getElementById('root'));
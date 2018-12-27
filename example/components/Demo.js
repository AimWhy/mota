import * as React from 'react';
import { model, watch } from '../../src';

export class DemoModel {
  name = 'demo';
  message = '';
}

export class DemoModel1 {
  name = 'demo1';
  message = '';
}


@model(DemoModel)
export class DemoBase extends React.Component {

  @watch(m => m.name)
  test() {
    console.log('demo')
    //this.model.message = this.model.name;
  }

  render() {
    window.demo = this;
    return <div>DemoBase: {this.model.message}</div>
  }
}

@model(DemoModel1)
export class Demo1 extends DemoBase {
  
  @watch(m => m.name)
  test1() {
    console.log('demo1')
    //this.model.message = this.model.name;
  }
  
  render() {
    window.demo1 = this;
    return <div>Demo1: {this.model.message}</div>
  }
}

// @model(DemoModel)
// export class Demo2 extends DemoBase {
//   @watch(m => m.name)
//   test2() {
//     console.log('demo2')
//     this.model.message = this.model.name;
//   }
//   render() {
//     window.demo2 = this;
//     return <div>Demo2: {this.model.message}</div>
//   }
// }
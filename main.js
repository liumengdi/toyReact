import { createElement, render, Component} from './toyReact'

class MyComponent extends Component {

  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}



let a = (<MyComponent id="a" class="c">
  <div>123</div>
  <div>456</div>
  <div>789</div>
</MyComponent>)

render(a, document.body)
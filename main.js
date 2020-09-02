import { createElement, render, Component} from './toyReact'

class MyComponent extends Component {

  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}


render(<MyComponent id = 'a' class='c'>
  <div>123</div>
  <div>345</div>
  <div>
    <div>3445</div>
  </div>
</MyComponent>, document.body)
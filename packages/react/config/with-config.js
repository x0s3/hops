import { createElement } from 'react';
import context from './context';

export default function withConfig(Component) {
  return class WithConfig extends React.Component {
    render() {
      return createElement(context.Consumer, {}, (config) =>
        createElement(Component, { ...this.props, config })
      );
    }
  };
}

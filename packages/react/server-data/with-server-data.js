import { createElement } from 'react';
import context from './context';

export default function withServerData(Component) {
  return class WithServerData extends React.Component {
    render() {
      return createElement(context.Consumer, {}, (data) =>
        createElement(Component, { ...this.props, serverData: data })
      );
    }
  };
}

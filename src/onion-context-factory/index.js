import withProvider from './context-provider-hoc';
import withConsumer from './context-consumer-hoc';


export default ({
  name,
  state,
  context,
  renderLib
}) => ({
  providerContainer: withProvider(name, state, context.Provider, renderLib),
  consumerContainer: withConsumer(context.Consumer, renderLib),
});

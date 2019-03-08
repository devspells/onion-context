import withProvider from './context-provider-hoc';
import withConsumer from './context-consumer-hoc';

import { IOnionContextFactoryFacade, IOnionContextInstance } from './interfaces';


export default (facade: IOnionContextFactoryFacade): IOnionContextInstance => ({
  providerContainer: withProvider({
    contextName: facade.name,
    ContextStateClass: facade.state,
    Provider: facade.context.Provider,
    renderLib: facade.renderLib
  }),
  consumerContainer: withConsumer({
    Consumer: facade.context.Consumer,
    renderLib: facade.renderLib
  })
});

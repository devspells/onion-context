export interface IOnionContextFactoryFacade {
  name: string;
  state: any;
  context: {
    Provider: any;
    Consumer: any;
  };
  renderLib: any;
}

export interface IOnionContextInstance {
  providerContainer: any;
  consumerContainer: any;
}

const baseOnionContextStateFactory = renderLibBaseComponent => (
  class BaseContextState extends renderLibBaseComponent {
    render() {
      const
        renderLib = this.props.renderLib,
        contextName = this.props.contextName,
        Provider = this.props.provider,
        providerValue = {[contextName]: this.exportContextState()};

      /* JSX
       * <Provider value={providerValue}>
       *   {this.props.children}
       * </Provider>
       */
      return renderLib.createElement(Provider, { value: providerValue }, this.props.children);
    }
  }
);
  

export default baseOnionContextStateFactory;

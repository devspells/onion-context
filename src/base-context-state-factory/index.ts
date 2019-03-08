import { IBaseContextState, IRenderLib } from './interfaces';


const baseOnionContextStateFactory = (renderLibBaseComponent: any): any => (
  class BaseContextState extends renderLibBaseComponent implements IBaseContextState {
    render() {
      const
        renderLib: IRenderLib = this.props.renderLib,
        contextName: string = this.props.contextName,
        Provider: object  = this.props.Provider,
        providerValue: object = {[contextName]: this.exportContextState()};

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

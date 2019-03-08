import { IContextProviderHOCFacade } from './interfaces'


/* JSX
 * export default (contextName, ContextState, Provider, renderLib) => (
 *   Component => (
 *     componentProps => (
 *       <ContextState contextName={contextName} provider={Provider} renderLib={renderLib}>
 *         <Component {...componentProps} />
 *       </ContextState>
 *     )
 *   )
 * );
 */
export default (facade: IContextProviderHOCFacade) => (
  Component => (
    componentProps => (
      facade.renderLib.createElement(
        facade.ContextStateClass,
        { contextName: facade.contextName, Provider: facade.Provider, renderLib: facade.renderLib },
        facade.renderLib.createElement(Component, {...componentProps})
      )
    )
  )
);

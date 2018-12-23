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
export default (contextName, ContextState, provider, renderLib) => (
  Component => (
    componentProps => (
      renderLib.createElement(
        ContextState,
        { contextName, provider, renderLib },
        renderLib.createElement(Component, {...componentProps})
      )
    )
  )
);

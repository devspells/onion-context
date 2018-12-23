/* JSX
 * export default Consumer => (
 *   Component => componentProps => (
 *     <Consumer>
 *       {contextProps => <Component {...componentProps} {...contextProps} />}
 *     </Consumer>
 *   )
 * );
 */
export default (Consumer, renderLib) => (
  Component => (
    componentProps => (
      renderLib.createElement(
        Consumer,
        null, 
        contextProps => renderLib.createElement(Component, {...componentProps, ...contextProps})
      )
    )
  )
);

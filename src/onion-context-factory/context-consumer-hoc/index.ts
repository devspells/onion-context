import { IContextConsumerHOCFacade } from './interfaces';

/* JSX
 * export default Consumer => (
 *   Component => componentProps => (
 *     <Consumer>
 *       {contextProps => <Component {...componentProps} {...contextProps} />}
 *     </Consumer>
 *   )
 * );
 */
export default (facade): any => (
  Component => (
    componentProps => (
      facade.renderLib.createElement(
        facade.Consumer,
        null, 
        contextProps => facade.renderLib.createElement(Component, {...componentProps, ...contextProps})
      )
    )
  )
);

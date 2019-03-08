import contextStateFactory from './base-context-state-factory';
import onionContextFactory from './onion-context-factory';
import compose from './compose';

import { IOnionContext } from './interfaces';


const OnionContext: IOnionContext = {
  contextStateFactory,
  onionContextFactory,
  attachProviders: compose,
  attachConsumers: compose,
}


export default OnionContext;

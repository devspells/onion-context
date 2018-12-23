import contextStateFactory from './base-context-state-factory';
import onionContextFactory from './onion-context-factory';
import compose from './compose';


export default {
  contextStateFactory,
  onionContextFactory,
  attachProviders: compose,
  attachConsumers: compose,
};

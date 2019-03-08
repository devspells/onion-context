export interface IBaseContextState {
  render: () => void;
}

export interface IRenderLib {
  createElement: (ElementConstructor: any, ElementProps: any, ElementChildren: any) => void;
}

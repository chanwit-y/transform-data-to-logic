export type KeyValue = { [key: string]: PrimitiveType };

export enum FlowType {
  Variable,
  Assign,
  If,
  Loop,
  LogVariable,
  ReturnVariable,
}

export enum DataType {
  String,
  Number,
  Boolean,
}

export type PrimitiveType = string | number | boolean | KeyValue | undefined;

export type Variable = {
  name: string;
  dataType: DataType;
  defaultValue?: PrimitiveType;
};

export type LogicFlow = {
  type: FlowType;
  variable?: Variable;
  logVariable?: string;
  returnVariable?: string;
};

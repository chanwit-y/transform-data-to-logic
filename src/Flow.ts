import { KeyValue, PrimitiveType } from "./@types/index";
import { FlowType, LogicFlow, Variable } from "./@types";

export class Flow {
  private _var: KeyValue = {};

  constructor(private _flow: LogicFlow[]) {}

  private _variable(variable: Variable) {
    this._var[variable.name] = variable.defaultValue;
  }

  public run() {
    let result: PrimitiveType;
    this._flow.map((f) => {
      switch (f.type) {
        case FlowType.Variable:
          this._variable(f.variable);
          break;
        case FlowType.LogVariable:
          console.log("LogVariable", this._var[f.logVariable]);
          break;
        case FlowType.ReturnVariable:
          result = this._var[f.returnVariable];
      }
    });
    if(result) return result;
  }
}

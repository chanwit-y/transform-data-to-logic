import { DataType, LogicFlow, FlowType } from "./@types";
import { Flow } from "./Flow";

const flows: LogicFlow[] = [
  {
    type: FlowType.Variable,
    variable: {
      name: "foo",
      dataType: DataType.String,
      defaultValue: "test",
    },
  },
  {
    type: FlowType.ReturnVariable,
    returnVariable: "foo"
  }
];

function main() {
  const flow = new Flow(flows);
  const result = flow.run();
  console.log(result);
  
}

main();

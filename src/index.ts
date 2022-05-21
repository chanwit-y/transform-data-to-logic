enum FlowType {
  Declare,
  Assign,
  If,
  Loop,
}

enum DataType {
  String,
  Number,
  Boolean,
}

type PrimitiveType = string | number | boolean;

type Declare = {
  name: string;
  dataType: DataType;
  defaultValue?: PrimitiveType;
};

type Flow = {
  type: FlowType;
  declare?: Declare;
};

const flows: Flow[] = [
  {
    type: FlowType.Declare,
    declare: {
      name: "foo",
      dataType: DataType.String,
      defaultValue: "test"
    } 
  },
];

function main() {
  console.log("Hello world");
}

main();

import { CopmexDataProps } from "../page";
import DataAEditor from "./dataA";
import ComplexNameEditor from "./name";

export default function ComplexEditor({initData: { name, dataA1, dataA2 }}:{initData:CopmexDataProps}) {

  return (
    <div className="flex flex-col space-y-2">
      <ComplexNameEditor initName={name} />
      <DataAEditor target={'value1'} initData={dataA1} />
      <DataAEditor target={'value2'} initData={dataA2} />
    </div>
  )
}
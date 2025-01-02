import ComplexData from "./complexData";
import ComplexEditor from "./editor";


export interface CopmexDataProps {
  dataA1: number,
  dataA2: number,
  name: string,
}
export default function ZustandComplexPage() {


  const initData:CopmexDataProps = {
    dataA1: Math.floor(Math.random() * 50),
    dataA2: Math.floor(Math.random() * 50 + 50),
    name: (() => { return ['Asher', 'Rayn', 'Rin', 'James'][Math.floor(Math.random()*4)] })()
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-8">
      <ComplexData
        initData={initData}
      />
      <ComplexEditor 
        initData={initData}
      />
    </div>
  )
}
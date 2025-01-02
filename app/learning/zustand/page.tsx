import Counter from "./counter";

export default function ZustandardPage() {

  return (
    <div className="flex flex-col items-center space-y-16">
      <Counter initialCount={Math.floor(Math.random() * 100)} />
    </div>
  )
}
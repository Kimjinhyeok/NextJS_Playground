export enum ChipLevelColors {
  level1 = 'bg-sky-700',
  level2 = 'bg-blue-700',
  level3 = 'bg-blue-900',

}
type ChipLevels = keyof typeof ChipLevelColors;

export interface ChipProps extends React.PropsWithChildren {
  level?: ChipLevels
}
export default function Chip({ level = 'level1', children }: ChipProps) {
  const bg = ChipLevelColors[level];
  return (
    <div className={`relative grid items-center justify-center font-sans font-bold whitespace-nowrap py-1 px-2 text-sm rounded-md ${bg}`}>
      { children }
    </div>
  )
}
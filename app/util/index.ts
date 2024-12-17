export const getBgColor = (color:number) => {
  switch(color) {
    case 0:
      return 'bg-red-100'
    case 1:
      return 'bg-blue-100'
    case 2:
      return 'bg-green-100'
    case 3:
      return 'bg-yellow-100'
    case 4:
      return 'bg-orange-100'
    case 5:
      return 'bg-emerald-100'
    case 6:
      return 'bg-cyan-100'
    case 7:
      return 'bg-pink-100'
    case 8:
      return 'bg-rose-100'
    case 9:
      return 'bg-violet-100'
    default:
      return 'bg-indigo-100'
  }
}

export const getRandomBGColor = () => {
  const number = Number.parseInt(`${Math.random() * 11}`);
  return getBgColor(number);
}
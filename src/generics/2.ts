type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
};

type TopKeys = 'name' | 'color';
type BottomKeys = 'position' | 'weight';

function compare<
  T extends Pick<AllType, TopKeys>,
  U extends Pick<AllType, BottomKeys>
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
};
  

// Option 2
// function compare<T extends Pick<AllType, keyof AllType>>(top: T, bottom: T): AllType {
//     return {
//       name: top.name,
//       color: top.color,
//       position: bottom.position,
//       weight: bottom.weight,
//     };
// };

// Option 3
// function compare(
//   top: Partial<Pick<AllType, 'name' | 'color'>>,
//   bottom: Partial<Pick<AllType, 'position' | 'weight'>>
// ): AllType {
//   return {
//     name: top.name || '',
//     color: top.color || '',
//     position: bottom.position || 0,
//     weight: bottom.weight || 0,
//   };
// }
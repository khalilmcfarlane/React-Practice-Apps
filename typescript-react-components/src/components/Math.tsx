interface Props {
  arr: number[];
}

export default function SquareNums({ arr }: Props): React.JSX.Element {
  /*
    Can also do this below: 
     <div>
     <ul>
        {arr.map((num: number) => (
            <li key={num}>{num}</li>
        ))}
     </ul>
    </div>
    */

  return (
    <div>
      {arr.map((num) => (
        <p>{num}</p>
      ))}
    </div>
  );
}

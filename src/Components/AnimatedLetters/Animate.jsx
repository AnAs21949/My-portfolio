import './animate.css';


export default function Index( {letterClass, strArray, idx}) {
  return (
    <span>
       {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

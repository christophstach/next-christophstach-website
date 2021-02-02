const Badge: React.FC = (props) => {
  return (
    <span className="bg-blue-400 rounded-xl px-3 mx-1 font-bold text-xs border-blue-400 text-white border-2 whitespace-nowrap">
      {props.children}
    </span>
  )
}

export default Badge

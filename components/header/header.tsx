interface Props {
  header: string
  subHeader: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className="flex flex-col items-center py-16 bg-gray-50">
      <div className="mb-10 font-bold text-center text-transparent text-7xl md:text-8xl bg-gradient-to-r from-primary-300 to-primary-800 bg-clip-text">
        {props.header}
      </div>
      <div className="pb-4 text-3xl font-bold text-center text-transparent md:text-4xl bg-gradient-to-r from-primary-300 to-primary-800 bg-clip-text">
        {props.subHeader}
      </div>
    </header>
  )
}

export default Header

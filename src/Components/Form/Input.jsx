const Input = ({type,...rest}) => {
  return (
    <input  type={type}   {...rest}  aria-describedby=""/>
  )
}

export default Input

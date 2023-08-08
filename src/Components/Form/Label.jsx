
const Label = ({children,...rest}) => {
  return (
    <label className="form-label" {...rest}>{children}</label>
  )
}

export default Label

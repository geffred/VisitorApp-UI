function InputField({label , type ="text", event , value , placeholder , name , pattern , max = 20 , min = 2}){

    return  <div className="form-group">
                <label htmlFor={name}> {label} </label>
                <input type={type} id={name} name = {name} onChange={ event }  className='form-control' placeholder= {placeholder} value={value} minLength={min} maxLength={max} pattern={pattern} required/> 
            </div>
  }

  export default InputField;
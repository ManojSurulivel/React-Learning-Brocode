import React from 'react'

const FormValitation = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form)
        let formDataObj = Object.fromEntries(formData.entries());

        const formJson = JSON.stringify(formDataObj);
        console.log(formDataObj);
        console.log(formJson);

    }
  return (
    <>
      <form action="" className='card' onSubmit={handleSubmit}>
        <h1>SignUp</h1>

        <div className='form'>
            <label htmlFor="">Name:</label>
            <input type="text" name='name' onChange={(e)=>e.target.value} placeholder='Enter your Name...'/>
        </div>

        <div className='form'>
            <label htmlFor="">Email:</label>
            <input type="text" name='email' onChange={(e)=>e.target.value}  placeholder='Enter your Email...'/>
        </div>

        <div className='form'>
            <label htmlFor="">Gender: </label>
        <select name="" id="">
            <option value="">Select Option</option>
            <option value="name">Male</option>
            <option value="name">Female</option>
        </select>
        </div>

        <div className='form'>
            <label htmlFor="">Country: </label><br />
            <input type="radio" name='India' onChange={(e)=>e.target.value}/>India<br />
            <input type="radio" name='USA' onChange={(e)=>e.target.value}/>USA<br />
            <input type="radio" name='Astralia' onChange={(e)=>e.target.value}/>Astralia
        </div>

        <div>
            <label htmlFor="">Subscribe: </label>
            <input type="checkbox" name='checkbox' onChange={(e)=>e.target.value}/> YES
        </div>

        <button type='submit' className='form' style={{
                                                       padding:'15px',
                                                       margin:'20px',
                                                       display:'flex',
                                                       flexDirection:'column',
                                                       alignItems:'center',
                                                       justifyContent:'center',
                                                       border:'1px solid black',
                                                       borderRadius:'50px',
                                                       fontSize:'1rem',
                                                       cursor:"pointer"
                                                       }}>  Submit  </button>
       
      </form>
    </>
  )
}

export default FormValitation

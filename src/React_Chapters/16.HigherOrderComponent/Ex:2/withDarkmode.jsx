const withDarkmode = (Component) => {
       const style = {
        backgroundColor: "#212529",
        color: '#eee'
       }
       return (props)=>{
              return <div style={style}><Component {...props}/></div>
       }
}

export default withDarkmode
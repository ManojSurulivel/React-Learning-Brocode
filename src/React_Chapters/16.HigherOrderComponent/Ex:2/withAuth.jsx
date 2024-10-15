const withAuth = (Component) => {
    const isAuthendication = false;  //if true => Your Dashboard
       return function(props){
           if(isAuthendication){
                  return <Component {...props}/>
           }else{
                  return <p>Please Login to Access</p> // <= if false
           }
       }
}

export default withAuth;
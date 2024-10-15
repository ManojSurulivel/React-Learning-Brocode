import React from 'react'

const ProfilePicture = () => {

  const styles = {
    height: "auto",
    maxWidth: "50%",
    borderRadius: "50%",
    marginBottom: "10px",
    cursor: "pointer"
  }

    const image = "./src/assets/image.png"

    const handleClick = (e) => e.target.style.display = "none";

  return (
    <div>
    <img onClick ={(e)=> handleClick(e)} src={image} alt="image" style={styles}/>  
    </div>
  )
}

export default ProfilePicture

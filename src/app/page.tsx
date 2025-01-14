//import { abort } from "process";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faGit } from "@fortawesome/free-brands-svg-icons";
//import photo from "...public/photo.jpeg"



export default function HomePage () {
  return(
    <>
<div style={{
    background: "radial-gradient(600px at 512px 413px, rgba(29, 78, 216, 0.5), transparent 80%)",
height: "100vh" 
} }
   
   >
    
  <h1 style={{
    color: "whitesmoke", 
    fontSize : "50px", 
    position: "absolute", 
    left: "30px",
    top: "67.5px",
    fontFamily: "Montserrat"}}>
    Jatin Kumar</h1>

    <h2 style={{
    color: "whitesmoke", 
    fontSize : "25px", 
    position: "absolute",
    left: "35px",
    top: "130px",
    fontFamily: "Lora",}}>
      Future Software Engineer
    </h2>
{/*
    <h2 style = {{
      position: "absolute",
      top: "100px",
      right: "100px", 
      color: "royalblue", fontSize: "40px", textAlign: "center"}}>About</h2>
    */}
    <p style = {{
      position: "absolute",
      top: "85px",
      right: "20px",
      color: 'whitesmoke',
      fontSize: "20px", 
      maxWidth: "700px"
    }}>
    
    
    Hello, my name is Jatin Kumar, and I am an  aspiring software engineer with a 
     strong passion for developing impactful and innovative solutions. Currently, 
     I am gaining valuable experience as an  intern at a fitness app called 
     BawsHuman, where I am learning the ins and outs of the industry.
    <br></br>
    <br></br>
    As a second-year college student, I am deeply motivated by my enthusiasm for coding 
     and the continuous opportunity for growth in this dynamic field. I am committed to honing my  
     craft and contributing meaningfully to projects that drive progress and change.
     </p>
    
    {/*
    <div style = {{ position: "relative", height: "500px"}}>
     <Image 
      src="/replacePhoto.png"  // Path is relative to the public folder
      alt="Description of the image"
      width={300}
      height={300}
      style={{position: "absolute", top: "2px", right: "100px", border: "10px solid royalblue"}}
    />
      </div>
  */}
 

    <a href = "https://drive.google.com/file/d/1VSKx2pYx44PIbchwcF8e2--Lo1QZcCDv/view" target = "blank"
    style={{display: "inline-block",
    padding: "10px 20px",
    background: "linear-gradient(to right,blue, teal )", // Blue color
    color: "white",
    textAlign: "center",
    textDecoration: "none", // Removes the underline
    borderRadius: "5px", // Rounded corners
    fontSize: "30px",
    fontWeight: "bold",
    position: "absolute",
    top: "350px",
    left: "30px"
      
  }}
    >Resume</a>


<a href ="https://www.linkedin.com/in/jatin-kumar-5b79672a4/" target="_blank" >
  <FontAwesomeIcon icon={faLinkedin} size="xs" color="grey" 
  style={{fontSize:"10px",
  maxWidth: "30px",
  position: "absolute",
  bottom: "10px",
  left: '30px'}}></FontAwesomeIcon>
</a>


<a href="https://github.com/Jkumar-05" target="_blank">
  <FontAwesomeIcon icon={faGit} size="xs" color="grey"
  style={{fontSize:"10px",
  maxWidth: "30px",
  position: "absolute",
  bottom: "10px",
  left: '80px'}}></FontAwesomeIcon>
</a>

<p>Here is a test for my first Pull Request</p>




</div>
    </>

  );

}
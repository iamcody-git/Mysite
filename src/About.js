import React from 'react'

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src={require('./images/pp.JPG')} className= "imageAboutPage" alt="" height="95%"/>
                </div>

                <div className="col-lg-8">
                    <p> Just trying to figure out what can I do or change in technology!!
                        
                    </p>
                    
                    <div className="row mt-3">
                        <p>Welcome to my personal website! I'm thrilled to have you here. My name is Prashant Adhikari, and I am passionate about new technology. As a struggling developer, I've had the opportunity to work in minor project, i dont have many experiences as i am beginner in this filed . Through this website, I aim to share my knowledge, insights, and experiences with you, hoping to inspire, educate, and connect with like-minded individuals. Whether you're seeking information, looking for collaboration opportunities, or simply interested in exploring my work, I invite you to join me on this journey. Together, let's delve into the realms of technology and embark on an exciting adventure of growth, learning, and discovery. Thank you for visiting, and I look forward to connecting with you! I have good knowledge about HTML, CSS, Java Script ,PHP, MySQL, Python, React etc. 

                        </p>
                        <div className="col-md-6">
                            <ul>
                                <li>For collaboration: adhikariprashant009@gmail.com</li>
                                <li>Phone: +977 9848745588</li>
                                <li>Hobbies: Playing and Watching games like Football, Cricket etc</li>
                                <li>From: Dumkibas, Nawalpur, Nepal</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About

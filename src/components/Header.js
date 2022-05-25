import React from "react"
import picture from "../images/Profile_Picture.jpg"
import picture1 from "../images/Project1.jpg"
import picture2 from "../images/Project2.jpg"
import picture3 from "../images/Project3.jpg"
import picture4 from "../images/Project4.jpg"
import picture5 from "../images/Project5.jpg"
import picture6 from "../images/Project6.jpg"


const Header = () => {
  return (
    <section>
      <div className="header-wraper">
        <div className="main-info">
          <h1>Hello Welcome to my Portfolio!</h1>
          <a href="#contact" className="btn-main">
            Contact Me
          </a>
        </div>
      </div>
      <div className="d-inline-block"></div>
      <div className="flex-container container">
        <h1 className="font" id="about-me">
          About Me
        </h1>
        <div className="row">
          <div className="col-3">
            <img src={picture} alt="profile picture"></img>
          </div>
          <div className="col-9">
            <h3 className="font">
              My name is Jordan Otterson I am 21 and I like to snowboard,
              hangout with my friends, and going camping. I have 6 siblings, 5
              brothers and 1 sister and I am the youngest in my family. I am a
              full-stack web developer from the coding bootcamp at U of U.
            </h3>
          </div>
        </div>
      </div>
      <div className="d-inline-block"></div>
      <div className="container">
        <h1 className="font" id="portfolio">
          Portfolio
        </h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="font">Crytpo-Checker</h1>
            <img src={picture1} alt="Crypto-Checker" style={{width:"400px", height: "400px"}}></img>
            <h5 className="font">
              Crypto-Checker is a website for those interested in CryptoCurrency
              and various alternatives to central bank controlled fiat monies.
              It allows its user's to check the prices of crypto via search and
              also shows the user the top 8 most valuable crypto on the market
              at the given time.
            </h5>
            <p>
              <a
                className="btn btn-secondary font"
                href="https://bullmoosedev.github.io/Crypto-Checker/"
                role="button"
              >
                See Project »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h1 className="font">Candy-Shop-Inventory</h1>
            <img src={picture2} alt="Candy-Shop-Inventory" style={{width:"400px", height: "400px"}}></img>
            <h5 className="font">
              Candy Shop Inventory is an inventory management application. A
              user can sign up with their email and log in to manage the
              inventory. It has a databse of price, quantity, and products of
              canides and a user can create, update and delete the data in the
              application.
            </h5>
            <p>
              <a
                className="btn btn-secondary font"
                href="https://candy-shop-e-commerce.herokuapp.com/"
                role="button"
              >
                See Project »
              </a>
            </p>
          </div>
          
          <div className="col-md-4">
            <h1 className="font">My-Budget</h1>
            <img src={picture3} alt="My-Budget" style={{width:"400px", height: "400px"}}></img>
            <h5 className="font">
              This M.E.R.N. full stack application dynamically and safely
              displays the user's sensitive budgeting information once
              authenticated. JSON Web Token is utilized for secure
              authentication. This application was created with the aim to
              streamline and visualize the user's sensitive budget through user
              created categories. Bootstrap has been used to make the
              application's styling responsive to even mobile sizes.
            </h5>
            <p>
              <a
                className="btn btn-secondary font"
                href="https://amir-mybudget.herokuapp.com"
                role="button"
              >
                See Project »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h1 className="font">Tech Blog</h1>
            <img src={picture4} alt="Crypto-Checker" style={{width:"400px", height: "400px"}}></img>
            <h5 className="font">
              Tech Blog is a project of mine that allows you to add posts and comments and login just like you would on a blog website.
            </h5>
            <p>
              <a
                className="btn btn-secondary font"
                href="https://otterpop-tech-blog.herokuapp.com/login"
                role="button"
              >
                See Project »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h1 className="font">Note Taker</h1>
            <img src={picture5} alt="Candy-Shop-Inventory" style={{width:"400px", height: "400px"}}></img>
            <h5 className="font">
              Note Taker is an app that allows you to create notes and save them to a local storage. It is a nice app if you want to take some simple notes and save them and delete them when you don't need them anymore.
            </h5>
            <p>
              <a
                className="btn btn-secondary font"
                href="https://otterpop7-note-taker.herokuapp.com/"
                role="button"
              >
                See Project »
              </a>
            </p>
          </div>
          
          <div className="col-md-4">
            <h1 className="font">Work Day Scheduler</h1>
            <img src={picture6} alt="My-Budget" style={{width:"400px", height: "400px"}}></img>
            <h5 className="font">
            This is a workday scheduler on which you can write a task and save the task by clicking the save icon. It utilizes a local storage so that when you refresh the page it keeps your tasks. It also tells you past present and future tasks, past being grey, present being red, and future being green.
            </h5>
            <p>
              <a
                className="btn btn-secondary font"
                href="https://otterpop7.github.io/super-disco/"
                role="button"
              >
                See Project »
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="d-inline-block"></div>
      <div className="flex-container container">
        <h1 className="font" id="contact">
          Contact Me
        </h1>
        <div className="row">
          <div className="col-4">
              <a
                className="btn btn-info font"
                href="https://github.com/Otterpop7"
                role="button"
              >
                Github Profile
              </a>
          </div>
          <div className="col-4">
            <h3 className="font">Cell Phone #: &nbsp;&nbsp; (385)-482-9917</h3>
          </div>
          <div className="col-4">
            <h3 className="font">Email Address: &nbsp;&nbsp; Jordanotterson7@gmail.com</h3>
          </div>
        </div>
      </div>
      <div className="d-inline-block"></div>
    </section>
  )
}

export default Header

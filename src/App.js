import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      name:'',
      eml:'',
      msg:'',
      isSubmit:false,
    };
}
  handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      fullname:this.state.name,
      email:this.state.eml,
      message:this.state.msg
    }
    this.setState({
      isSubmit : true
    });
  }
  
  handleChange=(e)=>{
    const name = e.target.name
    if(name=='name'){
      this.setState({
        name:e.target.value
      });
    }
    if(name == 'eml'){
      this.setState({
        eml:e.target.value
      });
    }
    if(name == 'msg'){
      this.setState({
        msg:e.target.value
      });
    }
 
  }
 
  render(){
    return (
      <div>
              
              <div>
                <div className="link">
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><h6>EMAIL</h6></a>
                  <a href="https://github.com/Ratandeep123"><h6>GITHUB</h6></a>
                  <a href="https://www.linkedin.com/in/ratandeep-kumar-a64521147/"><h6>LINKEDIN</h6></a>
                </div>
              </div>
      <div className="container">
                
                <div className="lnk">
                      <a href="#expe"><h3>EXPERIENCE</h3></a>
                      <a href="#home"><h3>HOME</h3></a>
                      <a href="#about"><h3>ABOUT</h3></a>
                      <a href="#contact"><h3>CONTACT</h3></a>
                      <a href="#resume"><h3>RESUME</h3></a>
                      <a href="#blog"><h3><span className="blg">BLOG</span></h3></a>
                </div>

               <div className="hd">                             
                       <div id="expe">
                          <h3>WORK EXPERIENCE</h3>
                         <div className="border-border-0">
                              <div className="row">
                                  <div className="col-sm">
                                    Full Stack Web Developer @ Tech Aditya
                                    <div className="stackcol">Internship at techAditya at<br/> Full Stack developer(Remote)<br/>2018(July -Aug)</div>
                                  </div>
                                  <div className="col-sm">
                                    Full Stack Developement at LampStack
                                    <div className="stackcol"> Searchnotes.xyz<br/>this is my college project and this based on lamp stack server in 2019</div>
                                  </div>
                                  <div className="col-sm">
                                    Oodless technology private ltd.
                                    <div  className="stackcol">Frontend developement <br/>user interface template create<br/> HTML BOOTSTRAP AND REACT JS 2019</div>
                                  </div>
                              </div>
                          </div>
                       </div>
                        <div className="border border-0">
                            
                                <div id="resume">
                                
                                  <h3>RATANDEE KUMAR</h3>
                                    <h6>Software developer<br/>ratandeepkmr@gmail.com<br/>8960481016,9870864302</h6><br/>
                                    <h5>GRADUATION</h5>
                                    <h6>Anand Engineering College, Agra in 2019 with 60%</h6><br/>
                                    <h5>INTERMEDIATE</h5>
                                    <h6>J.G.R.S.R.K.I.C Kalinhard S kabir Nagar in 2014 with 77%</h6><br/>
                                    <h5>HIGHSCHOOL</h5>
                                    <h6>Kisan Inter Colege Uska Bazar Siddharth Nagar in 2011 with 60%</h6><br/> 
                                    <h5>WORK EXPERIENCE</h5>
                                    <h6>Software Development<br/>Internship at Tech Aditya (Virtual) July 2018-Aug 2018<br/>Full Stack Developer At Tech Aditya</h6><br/>
                                    <h5>PROJECT</h5>
                                    <h6><span className="notes">(1=> NOTES BY COLLEGE FACULTY)</span><br/><br/>This website let you search for class notes provided by the faculty.<br/> user
                                        interface is designed to be fast and responsive on mobile as well<br/> using
                                        Bootstrap,Javascript. Backend of this website built with PHP.</h6>
                                    <h6><span className="notes">2=> Frontend developement</span><br/><br/>
                                    In this project we use Html, React js for frontend developement and <br/>Styling for Bootstrap in this User Interface(UI) we have display a navbar with <br/>signup and login button form user can use after signup process and fetching<br/> data from API(Application Program Interface).</h6>  
                                    <h5>SKILLS</h5>
                                    <h6><span className="skl">PROGRAMMING LANGUAGE:</span> Java, C++</h6>
                                    <h6><span className="skl">WEB:</span>JavaScript, PHP, HTML, CSS, MySQL</h6>
                                    <h6><span className="skl">FRAMEWORK:</span> LAMP, HIBERNATE</h6>
                                    <h5>SPORT PROGRAMMING</h5>
                                    <h6><span className="skl">HACKERRANK:</span> ratandeepkmr (1 silver)</h6>
                                    <h5>HOBBIES</h5>
                                    <h6><span className="skl">INTREST:</span> CRICKET. CHESS, LUDO, BADMINTON, TRAVELLING, BIKE RIDING</h6>
                                    
                              
                          </div>
                        </div>
                        <div id="contact">
                              <span className="contact"><h5>CONTACT HERE</h5></span>
                              <form className="frm" onSubmit={this.handleSubmit}>
                                <input type="text" name="name" className="ipt"  placeholder="Enter FullName" value={this.state.value} onChange={this.handleChange} required/>
                                <input type="email" name="eml" className="ipt"  placeholder="Enter Email Id" value={this.state.value} onChange={this.handleChange} required/>
                                <input type="text" name="msg"  className="ipt"   placeholder="Write  Message Here" value={this.state.value} onChange={this.handleChange} required/><br/>
                               <button type="submit" className="btnn" value="submit"  onSubmit={(e)=>this.handleSubmit(e)}>Submit</button>
                               {this.state.isSubmit ?(<div className="sub">Message Submitted</div>):null}
                              
                               <h6>Any Further Query<br/>Call me:9870864302<br/>
                                whtsapp no:8960481016</h6>
                              </form>
                             
                          </div>
                          <div id="about">
                              
                              <div className="abt">
                              <h3>About</h3>
                                  <h4>This project is based on the<span className="react"> React.js</span> frontend developement<br/>and backend for <span className="react">Node.js</span> .this project based on itself ,rearding <br/>my knowledge. In this project we use as a id ,<br/>id means to display on the about that page</h4>
                              </div>
                          </div>
                          <div className="blog">

                                         

                          </div>
              </div>
               
               
      </div>
      </div>
    );
  }

}

export default  App;

import React, { Component } from 'react';
import Icon from 'react-fontawesome'
import photo from './images/photo.jpeg';
import './App.css';

import Container from './components/container'
import Profile from './components/profile'
import Contact from './components/contact'
import Education from './components/education'
import Languages from './components/languages'
import Interests from './components/interests'
import References from './components/references'
import Summary from './components/summary'
import {    
    Experience,
    Job,
    Project,
    Task
} from './components/experience'

class App extends Component {
  render() {
    return (
      <Container>
        <Container type="sidebar">
            <Profile photo={photo} name="Vukašin Nešović" title="Full Stack Developer"/>
            
            <Contact>
                <Contact.Visa text='C' />
                <Contact.Phone text='+41786948890' />
                <Contact.Address text='Döltschiweg 3, Zürich' />
                <Contact.Email text='vukasin.nesovic@gmail.com' />
            </Contact>
            
            <Education>
                <Education.Item 
                    degree='MSc in Computer Science'
                    university='University of Basel, Switzerland'
                    graduationTime='2014'
                />
                <Education.Item 
                    degree='BSc in Computer Science'
                    university='University of Belgrade, Serbia'
                    graduationTime='2010'
                />
            </Education>
            
            <Languages>
                <Languages.Language name='Serbian' level='Native' />
                <Languages.Language name='English' level='Fluent' />
                <Languages.Language name='German' level='Fluent' />
            </Languages>

            <Interests>
                <Interests.Subject text='Billiard' />
                <Interests.Subject text='Snowboarding' />
                <Interests.Subject text='Cooking' />
                <Interests.Subject text='Craft Beer' />
            </Interests>

            <References>
                <References.Reference name='Dan Harabagiu' title='Head of Development at Ringier AG' />
            </References>

        </Container>

        <Container type="main">
            <Summary>
                Dynamic Software Engineer skilled at developing solutions for complex problems,
                possessing strong analytical thinking skills and high energy.
            </Summary>
            <Experience>         
                <Job 
                    company='Ringier AG, Switzerland' 
                    companyUrl='http://www.ringier.com/en/about-ringier-1' 
                    title='Senior Software Developer' 
                    startTime='10/2016'
                    >
                        <Project title='Re-branding of Blick.ch' startTime='09/2017' endTime='Present'>
                            <Task>
                                Domain architect and technical support for frontend and backend parts of the project
                            </Task>
                        </Project>
                        <Project title='Re-branding of Blick.ch: Backend' startTime='06.2017' endTime='08.2017'>
                            <Task>
                                Core developer and technical lead for a View Control Transformer 
                                Framework (NodeJS) controlled by Graphiql - GraphQL editor
                            </Task>
                        </Project>
                        <Project title='Re-branding of Blick.ch: Frontend' startTime='01.2017' endTime='05.2017'>
                            <Task>Core developer for responsive website (React)</Task>
                            <Task>Core developer for hybrid iOS-Android applications (React-Native)</Task>
                        </Project>
                        <Project title='Pulse-Live & Duwun mobile website' startTime='07.2016' endTime='12.2016'>
                            <Task>Extended Blick Sport App frontend stack, to serve as a mobile website (JavaScript & React)</Task>
                            <Task>Created highly scalable low latency production setup (AWS & CDN)</Task>
                            <Task>Coached and mentored team members (Javascript & React)</Task>
                        </Project>
                </Job>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Software Developer</h3>
                            <div className="time">09/2014 to 09/2016</div>
                        </div>
                        <div className="company"><a href="http://www.ringier.com/en/about-ringier-1">Ringier AG, Switzerland</a></div>
                    </div>
                    <div className="details">
                        <div className="details">
                            <div className="project">
                                <span className="project-title">Re-branding of Blick Sport App</span>
                                <span className="time">(02.2016 - 06.2016)</span>
                                <div className="details"><Icon name="check-square-o"/>
                                    Technical specification, planning and implementation of new view-controller modules (Java & JSP)
                                </div>
                            </div>
                            <div className="project">
                                <span className="project-title">Real time sport data adapter</span>
                                <span className="time">(10.2015 - 01.2016)</span>
                                <div className="details"><Icon name="check-square-o"/>
                                    Performance, code quality and stability optimization (python)
                                </div>
                                <div className="details"><Icon name="check-square-o"/>
                                    Extension with additional data provider
                                </div>
                            </div>
                            <div className="project">
                                <span className="project-title">Blick Sport App</span>
                                <span className="time">(03.2015 - 09.2015)</span>
                                <div className="details"><Icon name="check-square-o"/>
                                    Design and modeling of widget based view-controller for the React front-end application
                                </div>
                                <div className="details"><Icon name="check-square-o"/>
                                    Development of view-controller layer (Java & JSP)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Internship & Master Thesis</h3>
                            <div className="time">01/2013 - 12/2013</div>
                        </div>
                        <div className="company"><a href="http://new.abb.com/about/technology/corporate-research-centers/corporate-research-center-switzerland">ABB Corporate Research Centre, Switzerland</a></div>
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Internship in Quality Assurance </h3>
                            <div className="time">07/2012 - 12/2012</div>
                        </div>
                        <div className="company">SapientNitro, Switzerland</div>
                    </div>
                </div>
            </Experience>

            <section className="skills-section section">
                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
                <div className="skillset">
                    <div className="item">
                        <h3 className="level-title">Javascript</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" level="95%">
                            </div>                                      
                        </div>                           
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">React</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" level="95%">
                            </div>                                      
                        </div>                            
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">React Native</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" level="80%">
                            </div>                                      
                        </div>                           
                    </div>
                    
                    <div className="item">
                        <h3 className="level-title">Java</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" level="60%">
                            </div>                                      
                        </div>                                 
                    </div>

                    <div className="item">
                        <h3 className="level-title">Python</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" level="60%">
                            </div>
                        </div>
                    </div>
                    
                </div>  
            </section>
            
        </Container>
    </Container>
    );
  }
}

export default App;

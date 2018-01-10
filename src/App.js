import React, { Component } from 'react';
import photo from './images/photo.jpeg';
import './App.css';

import Container from './components/container'
import Hide from './components/container/hide'
import Profile from './components/profile'
import Contact from './components/contact'
import Education from './components/education'
import Languages from './components/languages'
import Interests from './components/interests'
import References from './components/references'
import Summary from './components/summary'
import Skills from './components/skills'
import Screenshot from './components/screenshot'
import { 
    Experience,
    Job,
    Project,
    Task
} from './components/experience'

class App extends Component {
    render() {
        const sidebarBottomAndFooterContent = (
            <div>
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
                    <References.Reference name='Dan Harabagiu' title='Head of Development' company='Ringier AG' />
                    <References.Reference name='Dan Harabagiu' title='Head of Development' company='Ringier AG' />
                </References>
            </div>
        )

        return (
            <div>
                <Container id='capture'>
                    <Container type="side">
                        <Profile photo={photo} name="Vukašin Nešović" title="Full Stack Developer">
                            Dynamic Software Engineer skilled at developing solutions for complex problems,
                            possessing strong analytical thinking skills and high energy.
                        </Profile>
                        
                        <Contact>
                            <Contact.Visa text='C' />
                            <Contact.Phone text='+41786948890' />
                            <Contact.Address text='Döltschiweg 3, Zürich' />
                            <Contact.Email text='vukasin.nesovic@gmail.com' />
                        </Contact>

                        <Hide xsmall>
                            {sidebarBottomAndFooterContent}
                        </Hide>
                    </Container>

                    <Container type="content">
                        <Skills>
                            <Skills.Skill title='Javascript' level='95%' />
                            <Skills.Skill title='React' level='95%' />
                            <Skills.Skill title='React Native' level='85%' />
                            <Skills.Skill title='Java' level='60%' />
                            <Skills.Skill title='Python' level='60%' />
                        </Skills>  

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
                            <Job
                                company='Ringier AG, Switzerland' 
                                companyUrl='http://www.ringier.com/en/about-ringier-1' 
                                title='Software Developer' 
                                startTime='09/2014'
                                endTime='09/2016'>
                                <Project title='Re-branding of Blick Sport App' startTime='02.2016' endTime='06.2016'>
                                    <Task>Technical specification, planning and implementation of new view-controller modules (Java & JSP)</Task>
                                </Project>
                                <Project title='Real time sport data adapter' startTime='10.2015' endTime='01.2016'>
                                    <Task>Performance, code quality and stability optimization (python)</Task>
                                    <Task>Extension with additional data provider</Task>
                                </Project>
                                <Project title='Blick Sport App' startTime='03.2015' endTime='09.2015'>
                                    <Task>Design and modeling of widget based view-controller for the React front-end application</Task>
                                    <Task>Development of view-controller layer (Java & JSP)</Task>
                                </Project>
                            </Job>
                            <Job
                                company='ABB Corporate Research Centre, Switzerland' 
                                companyUrl='http://new.abb.com/about/technology/corporate-research-centers/corporate-research-center-switzerland' 
                                title='Internship & Master Thesis' 
                                startTime='01/2013'
                                endTime='12/2013'/>
                            <Job
                                company='SapientNitro, Switzerland' 
                                title='Internship in Quality Assurance' 
                                startTime='07/2012'
                                endTime='12/2012'/>
                        </Experience>          
                    </Container>
                    <Screenshot label='SAVE CV' fileName='Vukasin_Nesovic' />
                    <Hide small medium large xlarge>
                        <Container type='footer'>
                            {sidebarBottomAndFooterContent}
                        </Container>
                    </Hide>
                </Container>
            </div>
        );
    }
}

export default App;

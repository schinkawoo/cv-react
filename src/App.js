import React, { Component } from 'react';

import Container from './components/container'
import Hide from './components/container/hide'
import Profile from './components/profile'
import Contact from './components/contact'
import Education from './components/education'
import Languages from './components/languages'
import Interests from './components/interests'
import References from './components/references'
import Skills from './components/skills'
import Screenshot from './components/screenshot'
import Experience from './components/experience'

import initState from './state/init.json'

class App extends Component {

    state = initState

    componentDidMount () {
        document.title = 'Vukasin Nesovic CV in React'
    }

    render() {        
        return (
            <div>
                <Container id='capture'>
                    <Container type="side">
                        <Profile
                            photo={this.state.photo} 
                            name={this.state.name}
                            title={this.state.title}>
                            {this.state.summary}
                        </Profile>
                        
                        <Contact 
                            visa={this.state.visa}
                            phone={this.state.phone}
                            address={this.state.address}
                            email={this.state.email}
                        />
                        <Hide xsmall>
                            {sidebarBottomAndFooterContent(this.state)}
                        </Hide>
                    </Container>

                    <Container type="content">
                        <Skills data={this.state.skills} />
                        <Experience data={this.state.experiences} />
                        <Experience icon='files-o' title='Publications' 
                            data={mapPublicationsToExperiences(this.state.publications)} 
                        />
                    </Container>
                    <Screenshot label='SAVE' fileName='Vukasin_Nesovic' />
                    <Hide small medium large print xlarge>
                        <Container type='footer'>
                            {sidebarBottomAndFooterContent(this.state)}
                        </Container>
                    </Hide>
                </Container>
            </div>
        );
    }
}

export default App;

function sidebarBottomAndFooterContent ({ education, languages, interests, references}) {
    return (
        <div>
            <Education data={education} />           
            <Languages data={languages} />    
            <Interests data={interests} />
            <References data={references} />
        </div>
    )
} 

function mapPublicationsToExperiences(publications) {
    return publications.map(publication => ({
        ...publication,
        company: publication.conference
    }))
}
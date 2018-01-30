import React, { Component } from 'react';
import { path } from 'ramda'
import { connect } from 'react-redux'

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
import EditBox from './components/edit/box'

class App extends Component {
    render() {
        return (
            <div>
                <Container id='capture'>
                    <Container type="side">
                        <Profile
                            photo={this.props.photo}
                            name={this.props.name}
                            title={this.props.title}
                            summary={this.props.summary}
                        />
                        
                        <Contact 
                            visa={this.props.visa}
                            phone={this.props.phone}
                            address={this.props.address}
                            email={this.props.email}
                        />
                        <Hide xsmall>
                            {sidebarBottomAndFooterContent(this.props)}
                        </Hide>
                    </Container>

                    <Container type="content">
                        <Skills data={this.props.skills} />
                        <Experience data={this.props.experiences} />
                        <Experience icon='files-o' title='Publications' 
                            data={mapPublicationsToExperiences(this.props.publications)} 
                        />
                    </Container>
                    <Screenshot label='SAVE' fileName='Vukasin_Nesovic' />
                    <EditBox
                        appState={this.props}
                        path={path(['edit', 'path'], this.props)} 
                        fields={path(['edit', 'fields'], this.props)} 
                    />
                    <Hide small medium large print xlarge>
                        <Container type='footer'>
                            {sidebarBottomAndFooterContent(this.props)}
                        </Container>
                    </Hide>
                </Container>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps)(App);

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
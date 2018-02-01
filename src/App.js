import React, { Component } from 'react';
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
                        <Profile cursor={this.props.cursor} />
                        
                        <Contact 
                            visa={this.props.cursor.get('visa')}
                            phone={this.props.cursor.get('phone')}
                            address={this.props.cursor.get('address').toJS()}
                            email={this.props.cursor.get('email')}
                        />
                        <Hide xsmall>
                            {sidebarBottomAndFooterContent(this.props.cursor)}
                        </Hide>
                    </Container>

                    <Container type="content">
                        <Skills data={this.props.cursor.get('skills').toJS()} />
                        <Experience data={this.props.cursor.get('experiences').toJS()} />
                        <Experience icon='files-o' title='Publications' 
                            data={mapPublicationsToExperiences(this.props.cursor.get('publications').toJS())} 
                        />
                    </Container>
                    <Screenshot label='SAVE' fileName='Vukasin_Nesovic' />
                    <EditBox cursor={this.props.cursor} path={['edit']} />
                    <Hide small medium large print xlarge>
                        <Container type='footer'>
                            {sidebarBottomAndFooterContent(this.props.cursor)}
                        </Container>
                    </Hide>
                </Container>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return { cursor: state }
}

export default connect(mapStateToProps)(App);

function sidebarBottomAndFooterContent (cursor) {

    return (
        <div>
            <Education data={cursor.get('education').toJS()} />           
            <Languages data={cursor.get('languages').toJS()} />    
            <Interests data={cursor.get('interests').toJS()} />
            <References data={cursor.get('references').toJS()} />
        </div>
    )
} 

function mapPublicationsToExperiences (publications) {
    return publications.map(publication => ({
        ...publication,
        company: publication.conference
    }))
}
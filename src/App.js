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
                        
                        <Contact cursor={this.props.cursor} />
                        <Hide xsmall>
                            {sidebarBottomAndFooterContent(this.props.cursor)}
                        </Hide>
                    </Container>

                    <Container type="content">
                        <Skills cursor={this.props.cursor.get('skills')} />
                        <Experience cursor={this.props.cursor.get('experiences')} field='experiences' />
                        <Experience icon='files-o' title='Publications' 
                            cursor={this.props.cursor.get('publications')}
                            field='publications'
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
            <Education cursor={cursor.get('education')} />           
            <Languages cursor={cursor.get('languages')} />    
            <Interests cursor={cursor.get('interests')} />
            <References cursor={cursor.get('references')} />
        </div>
    )
} 

// function mapPublicationsToExperiences (publications) {
//     return publications.map(publication => ({
//         ...publication,
//         company: publication.conference
//     }))
// }
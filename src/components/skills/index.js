import React, { Component } from 'react'
import inView from 'in-view'
import classNames from 'classnames'
import Section from '../container/section'
import './style.css'

const Skills = ({ children }) => (
    <Section icon='rocket' type='skills' title='Skills & Proficiency'>
        <div className="skillset">
            {children}
        </div>
    </Section>
)

Skills.Skill = class extends Component {
    state = { visible: true }
    show = () => this.setState({ visible: true })
    bounce = () => {
        this.setState({ visible: false }, () => setTimeout(this.show, 1))
    }

    componentDidMount () {
        inView('.skills-section').on('enter', this.bounce)
    }

    componentWillUnmount () {
        inView('.skills-section').on('enter', () => {})
    }

    render () {
        const { level, title } = this.props;
        const inlineStyle = {
            width: this.state.visible ? level || 0 : 0
        }

        const classes = classNames({
            'level-bar-inner': true,
            'animate': this.state.visible
        })

        return (
            <div className='item'>
                <h3 className="level-title">{title}</h3>
                <div className="level-bar">
                    <div className='level-bar-inner-background'/>
                    <div className={classes} style={inlineStyle}/>
                    <div className="level-bar-fields">
                        {Array.from(Array(10).keys()).map((key, index) => <div key={index} className='level-bar-field'/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
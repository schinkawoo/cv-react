import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import FileSaver from 'file-saver'
import classNames from 'classnames'
import './style.css'
import Icon from 'react-fontawesome'
import toBlob from 'canvas-to-blob'
toBlob.init()

export default class SaveButton extends Component {
    state = {
        screenshot: null,
        hidden: false
    }

    handleClick = () => {        
        console.log(`Saving document in ${process.env.NODE_ENV} environment.`)
        console.log(process.env)
        if (process.env.NODE_ENV === 'development') {
            if (!this.state.hidden) {
                this.setState({ hidden: true })
            }
        } else {
            window.open('/vukasin-nesovic.pdf', '_blank')
        }
        
    }

    async componentDidUpdate () {
        if (this.state.screenshot) {
            FileSaver.saveAs(this.state.screenshot, `${this.props.fileName}.png`)
            this.setState({ screenshot: null, hidden: false })
        } else if (this.state.hidden) {
            let canvas = await html2canvas(document.getElementsByClassName('main-container')[0])
            canvas.toBlob(screenshot => this.setState({ screenshot }))
        }
    }

    render () {
        const classes = classNames({
            'screenshot': true,
            'hidden': this.state.hidden
        })

        return (
            <div
                className={classes}
                onClick={this.handleClick}>
                <Icon name='floppy-o' />
                <span>{this.props.label}</span>
            </div>
        )
    }    
}
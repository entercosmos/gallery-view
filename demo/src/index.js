import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import GalleryView from '../../src'

import data from './data.json'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Demo extends Component {
    render() {
        return (
            <div
                className={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                `}
            >
                <div
                    className={css`
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 130px;
                        z-index: 1030;
                        background-color: #fff;
                        padding-left: 20px;
                        padding-right: 20px;
                        border-bottom: 1px solid #ccc;
                    `}
                >
                    <h1>GalleryView <a href="https://www.npmjs.org/package/@cmds/gallery-view" target="_blank"><img
                        src="https://img.shields.io/npm/v/@cmds/gallery-view.svg"/></a></h1>
                    <p>Used for displaying records as individual cards in a gallery.</p>
                </div>
                <div
                    className={css`
                        position: absolute;
                        top: 130px;
                        left: 0;
                        right: 0;
                        bottom: 0;
                    `}
                >
                    <GalleryView
                        recordCount={data.content.length}
                        primaryFieldId={data.structure.table.primaryFieldId}
                        coverFieldId={data.structure.view.coverFieldId}
                        coverFitTypeId={data.structure.view.coverFitTypeId}
                        fieldVisibility={data.structure.view.fieldVisibility}
                        fields={data.structure.fields}
                        recordGetter={({index}) => {
                            return data.content[index]
                        }}
                        valueGetter={({index, fieldId}) => {
                            return data.content[index].cells[fieldId]
                        }}
                    />
                </div>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))

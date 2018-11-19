import React from 'react'
import {css} from 'emotion'

const RowContainer = ({style, children}) => {
    return (
        <div
            style={style}
            className={css`
                display: flex;
                justify-content: center;
                padding-left: 8px;
                padding-right: 8px;
            `}
        >
            {children}
        </div>
    )
}

export default RowContainer
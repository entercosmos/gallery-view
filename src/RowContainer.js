import React from 'react'
import {css} from 'emotion'

const RowContainer = ({style, children}) => {
    return (
        <div
            style={style}
            className={css`
                display: flex;
                justify-content: center;
                padding-left: 12px;
                padding-right: 12px;
            `}
        >
            {children}
        </div>
    )
}

export default RowContainer
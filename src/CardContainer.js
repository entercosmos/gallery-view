import React from 'react'
import {css, cx} from 'emotion'

const CardContainer = ({children, width, height}) => (
    <div
        className={cx(
            css`
                padding: 12px;
                display: inline-block;
                width: ${width}%;
            `
        )}
    >
        <div
            className={css`
                border-radius: 6px;
                background-color: #f3f3f3;
                width: 100%;
            `}
            style={{
                height
            }}
        >
            {children}
        </div>
    </div>
)

export default CardContainer
import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'
import range from 'lodash/range'
import {List, WindowScroller} from 'react-virtualized'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import RowContainer from './RowContainer'
import CardContainer from './CardContainer'

export default class GalleryView extends React.Component {

    static propTypes = {
        cardRenderer: PropTypes.func.isRequired,
        cardCount: PropTypes.number.isRequired,
        cardHeight: PropTypes.number.isRequired,
        cardWidth: PropTypes.number,
        defaultHeight: PropTypes.number,
        defaultWidth: PropTypes.number,
    }

    static defaultProps = {
        cardWidth: 250
    }

    render() {

        const ROW_SPACING = 24

        const {
            cardRenderer,
            cardCount,
            cardHeight,
            cardWidth,
            defaultHeight,
            defaultWidth
        } = this.props

        return (
            <AutoSizer defaultHeight={defaultHeight} defaultWidth={defaultWidth}>
                {({width, height}) => {

                    const perRowCount = Math.max(1, Math.floor(width / cardWidth))
                    const rowCount = Math.ceil(cardCount / perRowCount)

                    return (
                        <List
                            ref={(instance) => {
                                this.List = instance
                            }}
                            style={{
                                paddingTop: 12,
                                paddingBottom: 12
                            }}
                            rowHeight={cardHeight + ROW_SPACING}
                            rowRenderer={(props) => {

                                const {index} = props
                                const startIndex = index * perRowCount
                                const stopIndex = startIndex + perRowCount
                                const flexCardWidth = 100 / perRowCount

                                return (
                                    <RowContainer
                                        {...props}
                                    >
                                        {range(startIndex, stopIndex).map(i => {

                                            let card = null

                                            if (i < cardCount) {

                                                card = cardRenderer({
                                                    index: i,
                                                    height: cardHeight,
                                                    width: flexCardWidth
                                                })
                                            }

                                            return (
                                                <CardContainer
                                                    key={i}
                                                    width={flexCardWidth}
                                                    height={cardHeight}
                                                >
                                                    {card}
                                                </CardContainer>
                                            )
                                        })}
                                    </RowContainer>
                                )
                            }}
                            rowCount={rowCount}
                            width={width}
                            height={height}
                        />
                    )
                }}
            </AutoSizer>
        )
    }
}
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
        cardWidth: PropTypes.number
    }

    static defaultProps = {
        cardWidth: 240
    }

    render() {

        const ROW_SPACING = 32

        const {
            cardRenderer,
            cardCount,
            cardHeight,
            cardWidth
        } = this.props

        return (
            <div
                className={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    padding-top: 12px;
                    padding-bottom: 12px;
                `}
            >
                <AutoSizer>
                    {({width}) => {

                        const perRowCount = Math.max(1, Math.floor(width / cardWidth))
                        const rowCount = Math.ceil(cardCount / perRowCount)

                        return (
                            <WindowScroller>
                                {({height, isScrolling, onChildScroll, scrollTop}) => (
                                    <List
                                        ref={(instance) => {
                                            this.List = instance
                                        }}
                                        isScrolling={isScrolling}
                                        onScroll={onChildScroll}
                                        scrollTop={scrollTop}
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
                                        autoHeight={true}
                                        height={height}
                                    />
                                )}
                            </WindowScroller>
                        )
                    }}
                </AutoSizer>
            </div>
        )
    }
}
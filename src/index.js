import React from 'react'
import PropTypes from 'prop-types'
import RecordGalleryCard, {calculateCardHeight} from '@cmds/record-gallery-card'
import CardGallery from './CardGallery'

export default class GalleryView extends React.Component {

    static propTypes = {
        recordCount: PropTypes.number.isRequired,
        primaryFieldId: PropTypes.string.isRequired,
        coverFieldId: PropTypes.string,
        coverFitTypeId: PropTypes.string,
        fields: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                typeId: PropTypes.oneOf(['singleLineText', 'linkToAnotherRecord', 'checkbox', 'attachment'])
            })
        )
    }

    render() {

        const {recordCount, fields, fieldVisibility, coverFieldId} = this.props

        const cardHeight = RecordGalleryCard.calculateRecordHeight({
            fields,
            coverFieldId,
            fieldVisibility
        })

        return (
            <CardGallery
                cardCount={recordCount}
                cardWidth={240}
                cardHeight={cardHeight}
                cardRenderer={this.cardRenderer}
            />
        )
    }

    cardRenderer = ({index}) => {

        const {primaryFieldId, coverFieldId, fields, fieldVisibility, valueGetter} = this.props

        return (
            <RecordGalleryCard
                primaryFieldId={primaryFieldId}
                coverFieldId={coverFieldId}
                fields={fields}
                fieldVisibility={fieldVisibility}
                valueGetter={({fieldId}) => {
                    return valueGetter({index, fieldId})
                }}
            />
        )
    }
}
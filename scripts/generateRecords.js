const faker = require('faker')
const fs = require('fs')
const random = require('lodash/random')
const times = require('lodash/times')
const sample = require('lodash/sample')
const uniqueId = require('lodash/uniqueId')

const generateAttachment = () => {

    const i = uniqueId()
    const cat = sample(['wanderlust', 'water', 'canada', 'mountain', 'beach'])
    return {
        id: `att${i}`,
        type: 'image/jpeg',
        filename: `Image`,
        thumbnails: {
            small: {
                url: `https://source.unsplash.com/featured/400x360?${cat}`
            },
            medium: {
                url: `https://source.unsplash.com/featured/400x360?${cat}`
            },
            large: {
                url: `https://source.unsplash.com/featured/400x360?${cat}`
            },
        },
        url: `https://source.unsplash.com/featured/400x360?${cat}`
    }
}

const generateAttachments = () => {

    return times(random(0, 5)).map(i => {
        return generateAttachment(i)
    })
}

const generateLinkedRecord = (i) => ({
    id: `rec${i}`,
    name: faker.name.findName()
})

const generateLinkedRecords = () => {

    return times(random(0, 8)).map(i => {
        return generateLinkedRecord(i)
    })
}

const structure = {
    table: {
        id: 'tbl1',
        name: 'Persons',
        primaryFieldId: 'fld1',
    },
    view: {
        coverFieldId: 'fld5',
        coverFitTypeId: 'cover',
        fieldVisibility: [
            'fld1',
            'fld2',
            'fld3',
            'fld4',
            'fld5'
        ]
    },
    fields: [{
        id: 'fld1',
        name: 'Name',
        typeId: 'singleLineText'
    }, {
        id: 'fld2',
        name: 'Email address',
        typeId: 'singleLineText'
    }, {
        id: 'fld3',
        name: 'Active',
        typeId: 'checkbox'
    }, {
        id: 'fld4',
        name: 'Friends',
        typeId: 'linkToAnotherRecord'
    }, {
        id: 'fld5',
        name: 'Attachment',
        typeId: 'attachment'
    }]
}

const content = times(200).map(i => {

    return {
        id: 'rec' + (i + 1),
        cells: {
            'fld1': faker.name.findName(),
            'fld2': faker.internet.email(),
            'fld3': sample([false, true]),
            'fld4': generateLinkedRecords(),
            'fld5': generateAttachments()
        }
    }
})

const data = {
    structure,
    content
}

fs.writeFileSync(__dirname + '/../demo/src/data.json', JSON.stringify(data, null, 2))
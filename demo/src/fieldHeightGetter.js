export default ({field}) => {

    const FIELD_HEIGHTS = {
        attachment: 30,
        autonumber: 22,
        checkbox: 22,
        multipleCollaborator: 22,
        collaborator: 22,
        createdCollaborator: 22,
        createdTime: 22,
        date: 22,
        linkToAnotherRecord: 22,
        longText: 78,
        multipleSelect: 22,
        number: 22,
        singleLineText: 22,
        singleSelect: 22,
        updatedTime: 22
    }

    return FIELD_HEIGHTS[field.typeId]
}
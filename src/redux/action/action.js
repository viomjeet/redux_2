export default function checkChange(id, checked) {
    return {
        type: "CHECK_CHANGE",
        id: id,
        checked: checked,
    }
}


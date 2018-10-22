export default dataKey => {
    return (state, action) => {
        if (!action.payload) {
            return {}
        }
        return {
            ...state,
            messages: action.payload.messages || null,
            fetching: !action.type.endsWith("FULFILLED") && !action.type.endsWith("REJECTED"),
            data: action.type.endsWith("FULFILLED") ? action.payload[dataKey] : null,
        }
    }
}

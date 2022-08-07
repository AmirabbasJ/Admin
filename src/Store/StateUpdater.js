const stateUpdater = (prevState,newValues) => {
    return {
        ...prevState,
        ...newValues
    }
}

export default stateUpdater
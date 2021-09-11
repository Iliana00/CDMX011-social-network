const firestore = () => {
    return {
        collection: (nameColection) => {
            return {
                add: () => {}
            }
        }
    }
}

const firebase = {
    firestore: firestore
}
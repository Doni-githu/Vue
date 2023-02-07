export const getItem = key => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        return null
    }
}

export const setItem = (key, data) => {
    try {
        return localStorage.setItem(key,JSON.stringify(data))
    } catch (error) {
        return null
    }
}


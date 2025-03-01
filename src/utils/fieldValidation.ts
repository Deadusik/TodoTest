export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

export const isValidLogin = (login: string): boolean => {
    const regex = /^[a-zA-Z0-9_-]{3,20}$/
    return regex.test(login)
}

export const isValidPassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/
    return regex.test(password)
}

export const isValidTodoListName = (name: string): boolean => {
    if (name.length < 2)
        return false

    return true
}
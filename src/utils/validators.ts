interface ValidationRulePwd {
    value: number
    message: string
}

interface ValidationRuleEml {
    value: RegExp
    message: string
}

const emailValidation: ValidationRuleEml = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email, try again.'
}

const minPassword: ValidationRulePwd = {
    value: 8,
    message: "Password must be at least 8 characters"
}

const maxPassword: ValidationRulePwd = {
    value: 24,
    message: "Password must be less than 24 characters"
}

export { emailValidation, minPassword, maxPassword }
export function signIn() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'eyJhbGciOiJIUzI1NiIsInR5XVCJ9.eyJuYW1lIjoMioiQ29kZVR1ciJ9.NBqehAezcEY9-Ejfo5sU',
                user: {
                    nome: 'Vitor',
                    email: 'vitor@gmail.com'
                },
            })
        }, 2000)
    })
}
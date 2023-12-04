import * as yup from 'yup';

export const schemaYup = yup
    .object()
    .shape({
        username: yup.string()
        .required('Nome obrigatório!')
        .min(6, 'Nome precisa ter no mínimo 6 caracteres')
        .max(25, 'Nome não pode ter mais de 25 caracteres'),
        password: yup.string()
        .required('Senha obrigatória!')
        .min(6, 'Senha precisa ter no mínimo 6 caracteres')
        .max(25, 'Senha não pode ter mais de 25 caracteres'),
        email: yup.string()
        .required('Senha obrigatória!'),
        confirmPassword: yup.string()
        .required('É necessário confirmar a senha!'),
    })
    .required()
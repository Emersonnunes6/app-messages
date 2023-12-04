'use client'

import { VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input, Heading } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { schemaYup } from './schemaYup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface Inputs {
    username: string;
    password: string
}

const Login = () => {
    const { register, handleSubmit, formState, reset } = useForm<Inputs>({
        resolver: yupResolver(schemaYup),
    });
    const { errors } = formState;

    const router = useRouter()

    const onSubmit = (data: any) => {
        reset();
        console.log(data);
        console.log(formState.touchedFields)
    }

    return (
        <VStack
            as='form'
            w={{ base: '900', md: '500px' }}
            m='auto'
            justify='center'
            h='100vh'
            spacing='1rem'
            onSubmit={handleSubmit(onSubmit)}
        >
            <Heading>Login</Heading>
            <FormControl isInvalid={errors.username && formState.touchedFields?.username}>
                <FormLabel fontSize='lg' >Usuário</FormLabel>
                <Input
                    placeholder='Usuário'
                    autoComplete='off'
                    size='lg'
                    {...register("username")}
                />
                {errors.username?.message &&
                    <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
                }
            </FormControl>

            <FormControl isInvalid={errors.password && formState.touchedFields?.password}>
                <FormLabel fontSize='lg'>Senha</FormLabel>
                <Input
                    placeholder='Senha'
                    autoComplete='off'
                    size='lg'
                    type='password'
                    {...register("password")}
                />
                {errors.password?.message &&
                    <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                }
            </FormControl>

            <ButtonGroup pt='1rem' >
                <Button colorScheme='teal' type='submit'>Entrar</Button>
                <Button onClick={() => router.push('/register')}>Criar Conta</Button>
            </ButtonGroup>
        </VStack>
    )
}

export default Login
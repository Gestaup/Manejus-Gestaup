import { useState, useContext } from 'react'

import Verde from '../../assets/verde.svg'
import capa from '../../assets/capa.png'
import { AiOutlineUnlock } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { SlUser } from "react-icons/sl";
import { AuthContext } from '../../contexts/auth'

import {
    Flex, 
    Text, 
    Center, 
    Input, 
    InputGroup,
    InputRightElement, 
    Button, 
    InputLeftElement,
    useMediaQuery,
    Link
  } from '@chakra-ui/react'
 

export default function SignUP(){
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth  } = useContext(AuthContext);

    const [ismobile] =  useMediaQuery("(max-width: 600px)")
    const [show, setShow] =useState(false)
    const handleClick = () => setShow(!show)

    async function handleSignUp(e){
      e.preventDefault();

      if(name !== '' && email !== '' && password !== ''){ 
       await signUp(email, password, name);
     }
   }

    return(
        <Flex 
        bgGradient="linear-gradient(rgb(150, 169, 247),transparent)" 
        backgroundColor="manejus.azul" 
        minH="100vh"
        alignItems="center" 
        justifyContent="center"
        padding={10}>


            <Flex backgroundColor="manejus.branco"
             direction={ismobile ? 'column' : 'row'}
             height={600} 
             width={1000} 
             alignItems="center"
             justifyContent="center"
             padding={15}
             borderRadius={5}
             >
             
             <Flex 
              backgroundColor="manejus.branco"
              width={ismobile ? '0' : '100%'}
              height={ismobile ? '0' : '90%'}
              alignItems="center"
              justifyContent="center"
             >
                <img src={capa} 
                quality={100}
                alt="Capa" 
                objectFit="fill"
                />
             </Flex>

             <Flex 
              backgroundColor="manejus.clara"
              width="90%"
              height="100%"
              alignItems="center"
              justifyContent="center"
              borderTopRightRadius={5}
              borderBottomRightRadius={5}
              flexDirection="column"
              >

              <Center marginBottom={5}>
                     
              <img src={Verde} 
                quality={100}
                alt="Capa" 
                width={150}
                />

              </Center>

              <InputGroup 
                    size="lg" 
                    width="75%"
                    variant="outline"
                    marginBottom={3}>
                    <InputLeftElement
                     pointerEvents='none'
                     children={<SlUser color='#000' size={20}/>}
                    />
                    <Input
                     background="manejus.branco"
                     fontSize={14}
                     borderRadius={50}
                     placeholder="Nome"
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
              </InputGroup>

              <InputGroup 
                    size="lg" 
                    width="75%"
                    variant="outline"
                    marginBottom={3}>
                    <InputLeftElement
                     pointerEvents='none'
                     children={<GoMail color='#000' size={20}/>}
                    />
                    <Input
                     background="manejus.branco"
                     fontSize={14}
                     borderRadius={50}
                     placeholder="email@email.com"
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
              </InputGroup>


              <InputGroup 
                   size='lg' 
                   marginBottom={7} 
                   width="75%"
                   justifyContent="center"
                   >
                    <InputLeftElement
                     pointerEvents='none'
                     children={<AiOutlineUnlock color='#000' size={20}/>}
                     />
                    <Input
                     background="manejus.branco"
                     type={ show ? 'text' : 'password'}
                     placeholder="**********"
                     borderRadius={50}
                     fontSize={14}
                     variant="outline"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width='4.5rem' padding={2} >
                      <Button h='1.75rem' size='sm' onClick={handleClick} borderRadius={50} color="#104665">
                        {show ? 'Ocultar' : 'Ver'}
                      </Button>
                    </InputRightElement>
                </InputGroup>

                <Button 
                size='lg' 
                width="75%"
                fontSize={16}
                background="manejus.azul"
                justifyContent="center"
                color="manejus.branco"
                borderRadius={50}
                _hover={{background:"#104665e2"}}
                onClick={handleSignUp}
                >
                      {loadingAuth ? 'Carregadno...' : 'Cadastrar'}
                </Button>
                <Center marginTop={70}>
                <Link href='/' _hover={{ textDecor: 'none'}}>
                <Flex justifyContent={'center'} alignItems="center" flexDirection={'row'}>
                      <Text fontSize={15} color="manejus.azul" fontFamily="'Inter', sans-serif" paddingRight={1}>
                         Já possui conta?
                      </Text>
                      <Text fontSize={15} color='#11a34b' fontFamily="'Inter', sans-serif"><strong >Logar</strong></Text>
                      </Flex>
                  </Link>
                 </Center>
             </Flex>

          </Flex>

    </Flex>
    )
}
import {
  Flex,
  Text,
  Box,
  SimpleGrid,
  GridItem,
  Button,
  IconButton,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
  Image,
  FormHelperText,
  FormErrorMessage,
  
} from "@chakra-ui/react"
import { greenColor } from "./color"
import { FaFacebook, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import logo from '../image/Lbg.png'
import { useForm } from "react-hook-form";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

// data to store the input field
  const {register, handleSubmit,formState:{errors}} = useForm()
  // for checkbox
const[checked,isChecked]=useState(false)
  // for navigation
const navigate=useNavigate()

// for login button
  const onSubmit =(data)=>{
    console.log(data)
  }
  return (
    <div>
      
      <SimpleGrid columns={5}  >
        <GridItem colSpan={{ "base": "5", "md": "3" }}  >

          <Box>
{/* <Image src={logo} alt="Hello ther"/> */}
            <Flex ml={10} justifyContent={{ "base": "center", "md": "flex-start" }} >
              <Text color={greenColor}
                fontSize='3xl'>
                yarti
              </Text>
              <Text
                fontSize="3xl">
                Tech
              </Text>
            </Flex>

            <Text
              color={greenColor}
              fontSize="30px"
              textAlign="center"
              fontWeight="bold"
            >Sign in to your account</Text>

            <Text
              color={greenColor}
              fontWeight="bold"
              textAlign="center"
              fontSize="30px">____________</Text>
            <br />

            <Flex justifyContent={"center"} gap="3" >
            <a href="https://www.facebook.com/login"target="_blank" >

            <IconButton
                border="1px solid black"
                borderRadius="full"
                icon={<FaFacebook />}
                variant="solid"
                _hover={{ bgColor: "#395591" }}
                flex justifyContent="center"
              />   </a>

              <a href="https://www.linkedin.com/login" target="_blank" >

              <IconButton
                border="1px solid black"
                borderRadius="full"
                icon={<FaLinkedinIn />}
                variant="solid"
                _hover={{ bgColor: "#288FB7" }}
                flex justifyContent="center"
              

              />

              </a>
            < a href="https://www.google.com" target="_blank" >
            <IconButton
                border="1px solid black"
                borderRadius="full"
                icon={<FaGooglePlusG />}
                variant="solid"
                _hover={{ bgColor: "#00A159" }}
                flex
                justifyContent="center"

              />


            </a>
             
            </Flex><br />
            <Text
              textAlign="center"
              color="#A6AEB3"
            >or use your Email account</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Flex justifyContent="center" >
              <Box width={{ "base": "90%", md: "40%" }}>
                <FormControl isRequired >
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input  {...register("email")}  placeholder="Enter Email Address" />
                  {/* {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )} */}
                </FormControl>
                <FormControl isRequired >
                  <FormLabel htmlFor='email'>Password</FormLabel>
                  <Input id='email' type='password' {...register("password",{required:true,maxLength:10,message:"Enter Your password"})} />
                  {errors.password?.message}
                </FormControl>
                <br />
                <Flex justifyContent={"space-between"}>
                  <Checkbox onClick={()=>(isChecked===false)} >Remember me</Checkbox>
<Button variant={"link"} onClick={()=>navigate('/forgotpassword')}>  
<Text> Forgot password?  </Text>

</Button>
                </Flex>

              </Box>

            </Flex>
            <br />
            <Flex justifyContent="center" >
              <Button
                backgroundColor={greenColor}
                size='lg'
                width='40%'
                border='2px'
                borderColor='black.500' type="submit" >
                Login
              </Button>

            </Flex>
            </form>
            <br />
            <Flex justifyContent="center" >
              <Text
              color="#A6AEB3"

              >Privacy Policy ⬤ Terms&Conditions</Text>
            </Flex>
            <br />
          </Box>
          
        </GridItem>
{/* second grid */}

        <GridItem colSpan={{ "base": "5", "md": "2" }} >
          <Box bgColor={greenColor}>
            <Flex
              justifyContent="center"
              alignItems={"center"}
              height="100vh"
            >

              <Box>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  color="white"
                  fontSize="4xl"

                >Hello,Friends!</Text>

                <Text
                  color="white"
                  fontWeight="bold"
                  textAlign="center"
                  fontSize="30px">______</Text>
                <br></br>
                <Text
                  textAlign="center"
                  color="white"

                >
                  Sign in your account and start your journey with us....

                </Text>
                <br />
                <Flex justifyContent="center" >
                  <Button
                    backgroundColor={greenColor}
                    size='lg'
                    width='40%'
                    border='2px'
                    borderColor='black.500'
                    onClick={()=>navigate('/signup')}
                  >
                    Sign Up
                  </Button>

                </Flex>
              </Box>


            </Flex>
          </Box>
        </GridItem>

      </SimpleGrid>


    </div>
  )
}
export default Login
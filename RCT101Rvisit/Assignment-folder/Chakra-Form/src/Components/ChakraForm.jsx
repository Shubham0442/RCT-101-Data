
import React, { useState } from 'react'
import { 
  Box,
  Input,
  Button,
  Heading,
  Stack,
  PinInput,
  PinInputField,
  Text,
  Select,
       } from '@chakra-ui/react'
  
  import {
        Menu,
        MenuButton,
        MenuList,
        MenuItem,
        MenuItemOption,
        MenuGroup,
        MenuOptionGroup,
        MenuDivider,
      } from '@chakra-ui/react'

  import {ChevronDownIcon} from "@chakra-ui/icons"

const ChakraForm = () => {

  const [loading, setLoading] = useState(false)
  const [otp, setOtp] = useState("")
  return (
    <div>
      <Box>
        <Heading>Form</Heading>
        <Stack direction="column" gap="0.5rem">
            <Box>
              <Input placeholder='email' type="email"></Input>
            </Box>
            <Box>
              <Input placeholder="password" type="password"></Input>
            </Box>
            <Box>
                  <PinInput otp onChange={(value)=>setOtp(value)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
            </Box>
            <Box>
                <Text>{otp}</Text>
            </Box>
            <Box>
                <Select placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
            </Box>
            <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Actions
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box>
              <Button bg="red" onClick={()=>{
                setLoading(true)
                setTimeout(()=>{
                  setLoading(false)
                },2000)
              }} isLoading={loading}>Sign up</Button>
            </Box>
            
        </Stack>  
      </Box>
      
    </div>
  )
}

export default ChakraForm
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {











  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
  
  <>
  
  <VStack bgColor="white" color="black" >

      <Image src={imageSrc}></Image>

      <VStack align="left"  padding="5">
      <Heading  >{title}</Heading>
      <Text color="gray">{description}</Text>

      <HStack>

      <Text fontWeight="bold">See more</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>


      </HStack>
      </VStack>
     






  </VStack>
  
  
  
  
  
  
  
  </>);
};

export default Card;

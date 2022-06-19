import React, { useState } from "react";
import { useWeather } from "../../services/context";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const MainPage = () => {
  const [results, setResults] = useState([]);
  const [current, setCurrent] = useState([]);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [location, setLocation] = useState([]);
  const { search } = useWeather();

  const searchLocation = (name) => {
    search(name)
      .then((res) => {
        setResults(res);
        setLocation(res.data.location);
        setCurrent(res.data.current);
        setError(false);
      })
      .catch((err) => {
        console.log("ih mané");
        setError(true);
      });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    searchLocation(value);
  };

  return (
    <Box
      p={12}
      w="100%"
      h="870px"
      overflow="hidden"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Text
        fontFamily="text"
        fontWeight="hairline"
        letterSpacing={10}
        fontSize="4xl"
        color="white"
      >
        TEMPO
      </Text>
      <Box
        display="flex"
        alignItems="baseline"
        p={8}
        borderRadius="lg"
        margin={3}
        bg="white"
        width={390}
      >
        <Input
          placeholder="City"
          variant="filled"
          value={value}
          onChange={handleChange}
        ></Input>
        <Button
          colorScheme="blue"
          variant="solid"
          onClick={handleClick}
          marginLeft={2}
        >
          Search
        </Button>
      </Box>
      {error && error ? (
        <Text color="red" w={390} height={50} textAlign="center">
          Something is wrong in your search search
        </Text>
      ) : (
        <Text></Text>
      )}
      {results && results.length >= 0 ? (
        <Text
          fontFamily="subText"
          fontSize="2x1"
          bg="white"
          w={390}
          height={50}
          textAlign="center"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Search for any city
        </Text>
      ) : (
        <Box
          p={9}
          display="flex"
          flexDirection="column"
          alignItems="center"
          fontFamily="subText"
          borderRadius="lg"
          bg="white"
        >
          <TableContainer
            color="white"
            borderRadius="lg"
            bg="#3182ce"
            marginTop={5}
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="white">City</Th>
                  <Th color="white">Region</Th>
                  <Th color="white">Country</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{location.name}</Td>
                  <Td>{location.region}</Td>
                  <Td>{location.country}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Box
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            width={40}
            marginTop={5}
          >
            <Text fontSize="xl" marginTop={1}>
              {current.temp_c}°
            </Text>
            <Image src={current.condition.icon} alt={current.condition.text} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

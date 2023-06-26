import { Flex, Heading } from "@chakra-ui/react";
import CreateMemorie from "../../containers/CreateMemorie";

function PageCreateMemorie() {
  return (
    <Flex direction="column" p="4">
      <Heading marginBottom="8">Créer un souvenir</Heading>
      <CreateMemorie />
    </Flex>
  );
}

export default PageCreateMemorie;

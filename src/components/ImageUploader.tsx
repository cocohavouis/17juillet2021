import { useState } from "react";
import { Box, Button, Image, Input } from "@chakra-ui/react";
import { uploadFile } from "@/utils/uploadFile";

const ImageUploader = () => {
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("Aucune image sélectionnée");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      setImage(URL.createObjectURL(file));
      uploadFile(file);
    }
  };

  console.log(image);

  return (
    <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
      <Box mb={4}>
        {image && <Image objectFit="cover" src={image} alt={imageName} />}
      </Box>
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        hidden
        id="upload"
      />
      <label htmlFor="upload">
        <Button as="span" colorScheme="pink" variant="outline">
          Choisis une image
        </Button>
      </label>
    </Box>
  );
};

export default ImageUploader;

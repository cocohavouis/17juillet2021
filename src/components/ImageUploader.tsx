import { Box, Button, Image, Input } from "@chakra-ui/react";

interface ImageUploaderProps {
  handleImageChange: any;
  image: string;
  imageName: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  handleImageChange,
  image,
  imageName,
}) => {
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

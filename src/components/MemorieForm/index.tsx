import { Box, Button, Textarea } from "@chakra-ui/react";
import ImageUploader from "../ImageUploader";
import { MemorieFormProps } from "./types";

const MemorieForm: React.FC<MemorieFormProps> = ({
  handleSubmit,
  onSubmit,
  register,
  status,
  handleImageChange,
  image,
  imageName,
}) => {
  return (
    <Box margin="20px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUploader
          handleImageChange={handleImageChange}
          image={image}
          imageName={imageName}
        />
        <Textarea placeholder="Title" marginTop="4" {...register("title")} />
        <Textarea
          placeholder="Description"
          marginTop="4"
          {...register("desc")}
        />
        <Button
          width="100%"
          colorScheme="pink"
          size="lg"
          marginTop="4"
          type="submit"
          isLoading={status === "submitting"}
        >
          Valider
        </Button>
      </form>
    </Box>
  );
};

export default MemorieForm;

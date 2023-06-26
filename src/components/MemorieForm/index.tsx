import { Button, Flex, Textarea } from "@chakra-ui/react";
import ImageUploader from "../ImageUploader";
import { MemorieFormProps } from "./types";

const MemorieForm: React.FC<MemorieFormProps> = ({
  handleSubmit,
  onSubmit,
  register,
  status,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUploader />
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
    </div>
  );
};

export default MemorieForm;

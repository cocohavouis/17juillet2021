import { SubmitHandler, useForm } from "react-hook-form";
import MemorieForm from "../../components/MemorieForm";
import { IMemorieFormInput } from "./types";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

enum Status {
  READY = "ready",
  SUBMITTING = "submitting",
  SUBMITTED = "submitted",
}

function CreateMemorie() {
  const [status, setStatus] = useState(Status.READY);
  const { register, handleSubmit } = useForm<IMemorieFormInput>();
  const toast = useToast();

  const onSubmit: SubmitHandler<IMemorieFormInput> = (data) => {
    try {
      setStatus(Status.SUBMITTING);
      console.log(data);
      toast({
        title: "Opération réussie",
        description: "Un souvenir a été créé avec succès",
        status: "success",
      });
    } catch (error) {
      //console.log(error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la création du souvenir",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <MemorieForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      status={status}
    />
  );
}

export default CreateMemorie;

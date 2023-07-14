import { SubmitHandler, useForm } from "react-hook-form";
import MemorieForm from "../../components/MemorieForm";
import { IMemorieFormInput } from "./types";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { uploadFile } from "@/utils/uploadFile";

enum Status {
  READY = "ready",
  SUBMITTING = "submitting",
  SUBMITTED = "submitted",
}

function CreateMemorie() {
  const [status, setStatus] = useState(Status.READY);
  const { register, handleSubmit, reset } = useForm<IMemorieFormInput>();
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("Aucune image sélectionnée");

  const toast = useToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      setImage(URL.createObjectURL(file));
    }
  };

  const onSubmit: SubmitHandler<IMemorieFormInput> = async (data) => {
    try {
      setStatus(Status.SUBMITTING);

      const jwt = localStorage.getItem("jwt");

      if (image === "") {
        toast({
          title: "Erreur",
          description: "Souvenir non créé, veuillez sélectionner une image",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setStatus(Status.SUBMITTED);
        return;
      }
      const img = await uploadFile(image);

      await axios.post(
        "http://localhost:1337/api/memories",
        {
          data: {
            date: new Date(),
            desc: data.desc,
            img: img.id,
          }, // C'est le corps de votre requête. Remplacez par vos données réelles.
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`, // Remplacez par votre format d'autorisation réel si nécessaire.
            "Content-Type": "application/json", // Ou tout autre type de contenu que vous envoyez.
            // Ajoutez ici d'autres en-têtes personnalisés si nécessaire.
          },
        }
      );

      toast({
        title: "Opération réussie",
        description: "Un souvenir a été créé avec succès",
        status: "success",
      });

      reset();

      setImage("");
      setImageName("Aucune image sélectionnée");

      setStatus(Status.SUBMITTED);
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
      handleImageChange={handleImageChange}
      image={image}
      imageName={imageName}
    />
  );
}

export default CreateMemorie;

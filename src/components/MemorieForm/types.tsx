import { IMemorieFormInput } from "@/containers/CreateMemorie/types";
import {
  UseFormHandleSubmit,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";

export interface MemorieFormProps {
  handleSubmit: UseFormHandleSubmit<IMemorieFormInput, undefined>;
  onSubmit: SubmitHandler<IMemorieFormInput>;
  register: UseFormRegister<IMemorieFormInput>;
  status: any;
  handleImageChange: any;
  image: string;
  imageName: string;
}

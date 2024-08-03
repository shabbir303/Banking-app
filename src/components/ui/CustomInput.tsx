import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import {Control, FieldPath, Form} from "react-hook-form";
import { authFormSchema } from "../../../lib/utils";


const formSchema = authFormSchema("sign-up");
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder:string,

}

const CustomInput = ({control, name, label, placeholder}:CustomInput) => {
    return (
        <div>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                  <FormItem className="form-item">
                    <FormLabel
                    className="form-label"
                    >{label}</FormLabel>
                    <FormControl>
                      <Input placeholder={placeholder}
                       className="input-class"
                       type={name==="password"?"password":"text" }
                       {...field}
                      />
                    </FormControl>
                    <FormMessage 
                     className="form-message mt-2"
                    />
                  </FormItem>
                )}
              />
        </div>
    );
};

export default CustomInput;
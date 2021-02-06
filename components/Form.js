import Base from "./Form/Form";
import FormField from "./Form/FormField";
import FormButton from "./Form/FormButton";
import FormErrorMessage from "./Form/FormErrorMessage";
import FormSwitch from "./Form/FormSwitch";

const Form = (props) => Base(props);

Form.Field = FormField;
Form.Button = FormButton;
Form.ErrorMessage = FormErrorMessage;
Form.Switch = FormSwitch;

export default Form;

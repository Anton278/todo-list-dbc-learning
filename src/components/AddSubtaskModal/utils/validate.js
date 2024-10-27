export default function validate(values) {
  const errors = {};

  if (values.name?.length < 2) {
    errors.name = "Task name must be min 2 characters";
  }
  if (!values.name?.length) {
    errors.name = "Task name is required";
  }

  return errors;
}

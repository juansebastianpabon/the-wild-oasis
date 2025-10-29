import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";
function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    error,
  } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();
  function handleUpdate(e, field, currentValue) {
    const { value } = e.target;
    console.log(value, currentValue);
    if (!value) return;
    if (Number(value) !== currentValue) updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min-nights'
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength", minBookingLength)}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max-nights'
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength", maxBookingLength)}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max-guests'
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) =>
            handleUpdate(e, "maxGuestsPerBooking", maxGuestsPerBooking)
          }
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast-price'
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice", breakfastPrice)}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});

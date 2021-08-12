import { ValidationError } from 'yup'

const errorHandler = (err: ValidationError) => {

  const errors: string[] = []

  err.inner.forEach(err => {
    if (err.path) errors.push(err.message)
  })

  return errors

}

export default errorHandler
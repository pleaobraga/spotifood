import React from 'react'
import PropTypes from 'prop-types'
import { has, get } from 'lodash'
//import { KeyboardDateTimePicker } from '@material-ui/pickers'
import { format as formatDefault, isValid } from 'date-fns'
import { DateTimePicker } from '@material-ui/pickers'

const DateTimeField = (props) => {
  const {
    values,
    errors,
    name,
    label,
    className,
    setFieldValue,
    setFieldTouched,
    format,
    size,
  } = props

  const handleChange = (date) => {
    setFieldValue(name, formatDefault(date, format) || '')
  }

  const handleBlur = () => {
    setFieldTouched(name, true)
  }

  const formatDefaultData = (date) => {
    if (!isValid(date)) return ''

    return formatDefault(new Date(date), 'dd/MM/yyyy HH:mm')
  }

  return (
    <DateTimePicker
      allowKeyboardControl
      className={className}
      label={label}
      name={name}
      value={get(values, name) || null}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={has(errors, name) && get(errors, name)}
      error={has(errors, name)}
      margin="normal"
      inputVariant="outlined"
      size={size}
      ampm={false}
      labelFunc={formatDefaultData}
      fullWidth
    />
  )
}

DateTimeField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  format: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  size: PropTypes.string,
}

DateTimeField.defaultProps = {
  type: 'text',
  select: false,
  className: '',
  onClick: () => {},
  inputPropsTF: {},
  disabled: false,
  format: 'DD/MM/YYYY HH:mm',
}

export default DateTimeField

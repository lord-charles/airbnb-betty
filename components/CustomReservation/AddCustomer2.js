import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'
import { useState } from 'react'
import { Button } from '@mui/material'
import { toast, Toaster } from 'react-hot-toast'

// ** Third Party Import
import DatePicker from 'react-datepicker'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { forwardRef } from 'react'
import axios from 'axios'
import { base_url } from 'utils/baseUrl'

const notify = message => toast.error(message)

const AddCustomer2 = ({ handleNext }) => {
  const [firstname, setfirstName] = useState('')
  const [lastname, setlastname] = useState('')
  const [mobile, setMobile] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [calendarId, setCalendarId] = useState('')
  const [email, setEmail] = useState('')
  const [nextOfKin, setNextOfKin] = useState('')
  const [btnActive, setbtnActive] = useState(true)
  const [date, setDate] = useState(null)
  const [date2, setDate2] = useState(null)

  const inputDate1 = new Date(date)
  const outputDate1 = new Date(inputDate1.setHours(inputDate1.getHours() + 3)).toISOString()

  const inputDate2 = new Date(date2)
  const outputDate2 = new Date(inputDate2.setHours(inputDate2.getHours() + 3)).toISOString()

  const data = {
    firstname,
    lastname,
    mobile,
    idNumber,
    calendarId,
    email,
    nextOfKin,
    start: inputDate1,
    end: inputDate2,
    summary: `${firstname} ${lastname} (${mobile})`,
    description: `Trip to mombasa, betty reservation. Id:${idNumber} next of kin:${nextOfKin} (${email}) `
  }

  const CustomInput = forwardRef((props, ref) => {
    return <TextField inputRef={ref} label='Start Time' {...props} />
  })

  const CustomInput2 = forwardRef((props, ref) => {
    return <TextField inputRef={ref} label='End Time' {...props} />
  })

  const handleSubmit = async () => {
    setbtnActive(false)

    try {
      const res = await axios.post(`${base_url}user/register`, data)

      if (res.data.message === 'User created') {
        toast.success('New user registered')
        const res2 = await axios.post(`${base_url}google/schedule-event`, data)
        res2.status === 200 ? toast.success('Event created successfully') : toast.error('Something went wrong')

        setbtnActive(true)
      }
    } catch (err) {
      if (err.response.data.message === 'User already exists') {
        toast.success('Existing user')
        const res2 = await axios.post(`${base_url}google/schedule-event`, data)
        console.log(res2)
        res2.status === 200 ? toast.success('Event created successfully') : toast.error('Something went wrong')
        setbtnActive(true)
      }
    }
  }

  return (
    <>
      <Typography variant='h5' gutterBottom>
        Customer details
      </Typography>
      <Toaster />
      <Grid className='pl-5'>
        <Grid item xs={12} md={8} marginBottom={2}>
          <TextField
            required
            id='firstName'
            label='firstName'
            variant='standard'
            value={firstname}
            onChange={event => setfirstName(event.target.value)}
          />

          <TextField
            required
            id='lastName'
            label='lastName'
            variant='standard'
            value={lastname}
            onChange={event => setlastname(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <TextField
            required
            id='phone number'
            label='phone number'
            helperText='unique'
            type='number'
            variant='standard'
            value={mobile}
            onChange={event => setMobile(event.target.value)}
          />
          <TextField
            required
            id='Id number'
            label='Id number'
            helperText='unique'
            type='number'
            variant='standard'
            value={idNumber}
            onChange={event => setIdNumber(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <TextField
            required
            id='next of kin'
            label='next of kin'
            variant='standard'
            helperText='optional'
            value={nextOfKin}
            onChange={event => setNextOfKin(event.target.value)}
          />
          <TextField
            required
            id='Email address'
            label='Email address'
            variant='standard'
            helperText='optional'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} className='py-[20px] gap-x-1 flex'>
          <DatePickerWrapper>
            <DatePicker
              selected={date}
              showYearDropdown
              showMonthDropdown
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              timeCaption='Time'
              dateFormat='MM-dd-yyyy h:mm aa'
              id='account-settings-date'
              placeholderText='MM-DD-YYYY hh:mm AM/PM'
              customInput={<CustomInput />}
              onChange={date => setDate(date)}
            />
          </DatePickerWrapper>

          <DatePickerWrapper>
            <DatePicker
              selected={date2}
              showYearDropdown
              showMonthDropdown
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              timeCaption='Time'
              dateFormat='MM-dd-yyyy h:mm aa'
              id='account-settings-date'
              placeholderText='MM-DD-YYYY hh:mm AM/PM'
              customInput={<CustomInput2 />}
              onChange={date => setDate2(date)}
            />
          </DatePickerWrapper>
        </Grid>
        <Grid item xs={12} md={8} marginTop={3} marginBottom={2}>
          <Autocomplete
            id='multiple-select'
            sx={{ width: 300 }}
            options={houses}
            autoHighlight
            getOptionLabel={option => option.name}
            renderOption={(props, option) => (
              <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                {option.name}
              </Box>
            )}
            renderInput={params => (
              <TextField
                {...params}
                label='Choose house'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password' // disable autocomplete and autofill
                }}
              />
            )}
            onChange={(event, value) => setCalendarId(value.calId)}
          />
        </Grid>
      </Grid>

      <Grid className='lg:flex'>
        <FormControlLabel
          control={<Checkbox color='secondary' name='saveAddress' value='yes' />}
          label='Make sure all inputs are correct'
        />
        <Button
          variant='contained'
          sx={{ alignItems: 'center', ml: 25 }}
          sm={{ mt: 3, ml: 1 }}
          disabled={btnActive ? false : true}
          onClick={() => handleSubmit()}
        >
          {btnActive ? 'Add Details' : 'please wait...'}
        </Button>
      </Grid>
    </>
  )
}

const houses = [
  {
    name: '2 Bedroom apartment 1E',
    calId: '7c3b1c51655906c65360457bd7ba4e91482f6482d1b8a3c37768e784bfa61ed7@group.calendar.google.com'
  },
  {
    name: '2 Bedroom apartment 2A',
    calId: '5ee7ee5687a8392994884fd9e55466bd03e0664993cb0bc4f807d64191569b66@group.calendar.google.com'
  },
  {
    name: '3 Bedroom apartment 1',
    calId: 'bf05f0d149d3e92431387392c33d98e6922cfcf009f320196f8210c691dd5f20@group.calendar.google.com'
  },
  {
    name: 'One  Bedroom',
    calId: '062ead153bcb1d7ca94a0b619b52612388d0fce8e646c788bfa452af49682c82@group.calendar.google.com'
  },
  {
    name: 'Studio 12',
    calId: '8cc4887d61de77cd8121862cee53623839c506b77555c9def0838e29c6b536a0@group.calendar.google.com'
  },
  {
    name: 'Studio 16',
    calId: '97fcb37174f55316b4a5106027fd63782b3084eca0de055acdf0cb71c2486808@group.calendar.google.com'
  },
  {
    name: 'Studio 24',
    calId: 'fac84e465035295eff2c8c12d3d29b444d90d90a45ff9c72b7adde8f004f97e9@group.calendar.google.com'
  },
  {
    name: 'Studio 28',
    calId: '70fdd1280b315e2406f33ada0e4a840c56c61b89ca8e82e0a897105e0b8a0e24@group.calendar.google.com'
  },
  {
    name: 'Studio 35',
    calId: '79a2ee562f971041e83186cc14cd613fc164110beeccdf501d6298b9314c933d@group.calendar.google.com'
  },
  {
    name: 'Studio 43',
    calId: '2436595d46b12945274a7f68ea1a2b08266897e161dfe506b432dfb1eb60a01f@group.calendar.google.com'
  },
  {
    name: 'Studio 68',
    calId: '51be4fa107859458a3cc47d474006a4bc0d307459ffa8d5f63aad5f61ec943f1@group.calendar.google.com'
  },
  {
    name: 'Studio 77',
    calId: 'c95715edd030eaff8e82be76fb5e26d7d8f33fdf25c270a2487829510fee87d7@group.calendar.google.com'
  },
  {
    name: 'Studio E4',
    calId: '6b0fb8ae1a387ce0b2328ed3577868625cbc2abc73c8f72d488eae67f587f50f@group.calendar.google.com'
  },
  {
    name: 'studio 8',
    calId: '973e72a47745770edf1049a27ed1a2573d479260f60a76e00205bfeefa7fbf78@group.calendar.google.com'
  }
]

export default AddCustomer2

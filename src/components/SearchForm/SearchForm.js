import React from 'react'
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { getIssues } from '../../feature/issuesSlice'
import { getData } from '../../feature/dataSlice'


const SearchForm = () => {
    const dispatch = useDispatch()
    
    const schema = yup.object({
        repoName: yup.string().required('Must be required')
      });

    const { 
        control,
        handleSubmit } = useForm({
            mode: "onBlur",
            resolver: yupResolver(schema),
            defaultValues: {
                repoName: '',
            }
        });

    const onSubmit = (elemnt) => {
        const data = elemnt.repoName.replace('https://github.com/', '').split('/')
        dispatch(getIssues(data))
        dispatch(getData(data))
    };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <Controller
            render={({ field, fieldState: {error} }) => (
            <TextField
                {...field}
                fullWidth
                error={!!error}
                helperText={error?.message}
                id="outlined-basic" 
                label="Enter repo URL" 
                variant="outlined" />
            )}
            name="repoName"
            control={control}
            defaultValue=""
            className="materialUIInput"
        />
        <Button 
            type="submit" 
            variant="contained"
        >Load</Button>
    </form>
  )
}

export default SearchForm;

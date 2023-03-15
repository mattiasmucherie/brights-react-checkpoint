import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { CategorySelect } from './CategorySelect'

/**
 * Only used for level 3 (bonus) task
 */

export function AddMovieForm(props) {
  const {
    onSave = () => {
      console.log('I can do something on save')
    },
  } = props

  const [categories, setCategories] = useState('')

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const response = await (await fetch(`http://localhost:3000/categories`)).json()
    setCategories(response)
  }
  return (
    <Box noValidate autoComplete="off">
      <Typography variant="h5">Add Movie</Typography>
      {categories ? <CategorySelect categories={categories} /> : <p>Loading categories</p>}
    </Box>
  )
}

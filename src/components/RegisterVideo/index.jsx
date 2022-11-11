import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import { StyledRegisterVideo } from './styles'

function useForm(propsDoForm) {
  const [values, setValues] = useState(propsDoForm.initialValues)
  return {
    values,
    handleChange: evento => {
      const value = evento.target.value
      const name = evento.target.name
      setValues({
        ...values,
        [name]: value
      })
    },
    clearForm() {
      setValues({})
    }
  }
}
const PROJECT_URL = 'https://qxgdsdhflozqevvjrxxx.supabase.co'

const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4Z2RzZGhmbG96cWV2dmpyeHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjk4NzMsImV4cCI6MTk4Mzc0NTg3M30.aeAeh0IAgAbt2zHtCJB0tK7aBIlTcOaU2keYCLFhc1w'

const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false)
  const formCadastro = useForm({
    initialValues: {
      titulo: 'Pokemon',
      url: 'https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg'
    }
  })
  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => {
          setFormVisivel(true)
        }}
      >
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={event => {
            event.preventDefault()
            supabase
              .from('video')
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: 'https://img.youtube.com/vi/QsqatJxAUtk/hqdefault.jpg',
                playlist: 'jogos'
              })
              .then(oqueveio => {
                console.log(oqueveio)
              })
              .catch(err => {
                console.log(err)
              })
            setFormVisivel(false)
            formCadastro.clearForm()
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => {
                setFormVisivel(false)
              }}
            >
              x
            </button>
            <input
              type="text"
              name="titulo"
              placeholder="Titulo do vídeo "
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              type="text"
              name="url"
              placeholder="URL"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  )
}

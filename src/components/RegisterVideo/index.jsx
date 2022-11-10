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

export function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false)
  const formCadastro = useForm({
    initialValues: { titulo: 'Pokemon', url: 'https://youtube..' }
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

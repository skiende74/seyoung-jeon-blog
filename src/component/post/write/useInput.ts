import { ChangeEvent, useState } from 'react'

function useInputs<T extends object>(initial: T) {
  const [state, setState] = useState<T>(initial)
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setState((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  return { state, handleChange }
}

export default useInputs

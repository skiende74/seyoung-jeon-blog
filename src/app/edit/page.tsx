'use client'
import { ChangeEvent, useActionState, useState } from 'react'
import useInputs from './useInput'
import { submitAction } from './submitActions'

function Page() {
  const { state: inputState, handleChange } = useInputs({
    title: '',
    slug: '',
    date: '',
    summary: '',
    tags: '',
  })

  const [content, setContent] = useState('')

  const submitState = {
    title: inputState.title,
    slug: inputState.slug ?? inputState.title.replace(' ', '-'),
    date: inputState.date ?? Date.now().toString(),
    summary: inputState.summary ?? '',
    tags:
      inputState.tags.length > 0
        ? inputState.tags.split(',').map((str) => str.trim())
        : [],
    content,
  }

  const [response, action, isPending] = useActionState(
    () => submitAction(submitState),
    null
  )
  return (
    <div>
      <form action={action}>
        <div className="mb-2 grid grid-cols-2 gap-y-2">
          {['title', 'slug', 'date', 'summary', 'tags'].map((name) => {
            return (
              <InputField
                key={name}
                name={name}
                label={name}
                value={inputState[name as keyof typeof inputState]}
                onChange={handleChange}
              />
            )
          })}
          <button
            className="cursor-pointer disabled:bg-neutral-200"
            disabled={inputState.title.length === 0}
          >
            제출
          </button>
          {isPending && '제출하는 중'}
          {response !== null &&
            !response.isSuccess &&
            `제출에 실패하였습니다. ${response.message}`}
        </div>
        <div>
          <textarea
            className="h-100 w-full rounded-sm border-neutral-300 bg-white px-3 py-0.5"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

const InputField = ({
  name,
  label,
  value,
  onChange,
}: {
  name: string
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div>
      <label className="mr-1.5" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-sm border-neutral-300 bg-white px-3 py-0.5"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Page

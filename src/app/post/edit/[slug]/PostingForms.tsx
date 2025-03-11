'use client'
import { ChangeEvent, useActionState, useRef, useState } from 'react'
import useInputs from './useInput'
import { MDXFile } from '../../model/getMdxFileMapper'
import MdxComponent from './MdxComponent'
import { submitAction } from '@/dal/post/edit'
import { overlay } from 'overlay-kit'

function PostingForm({ mdxFile }: { mdxFile: Omit<MDXFile, 'default'> }) {
  const { frontmatter: matter, rawMDX } = mdxFile
  const { date, slug, summary, title, tags } = matter

  const { state: inputState, handleChange } = useInputs({
    title,
    slug,
    date,
    summary: summary ?? '',
    tags: tags?.join(', ') ?? '',
  })

  const [content, setContent] = useState(rawMDX)

  const submitState = {
    title: inputState.title,
    slug: inputState.slug ?? inputState.title.replace(' ', '-'),
    date: inputState.date ?? Date.now().toString(),
    summary: inputState.summary ?? '',
    tags:
      inputState.tags.length > 0
        ? inputState.tags.split(', ').map((str) => str.trim())
        : [],
    content,
  }

  const [response, action, isPending] = useActionState(
    () => submitAction(submitState),
    null
  )

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <div className="px-3">
      <form ref={formRef} action={action}>
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
            type="submit"
            className="cursor-pointer disabled:bg-neutral-200"
            disabled={inputState.title.length === 0}
          >
            제출
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className=""
            type="button"
            onClick={() => {
              overlay.open(
                ({ isOpen, close }) =>
                  isOpen && (
                    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-black opacity-30" />
                      <div className="relative z-10 rounded-md bg-neutral-700 p-4">
                        <h3 className="text-sm font-bold">제출모달</h3>
                        <div className="modal-action">
                          <div>
                            {/* if there is a button in form, it will close the modal */}
                            <div className="grid max-w-100 grid-cols-2 flex-wrap justify-center gap-x-4">
                              {['title', 'slug', 'date', 'summary', 'tags'].map(
                                (name) => {
                                  return (
                                    <InputField
                                      key={name}
                                      name={name}
                                      label={name}
                                      value={
                                        inputState[
                                          name as keyof typeof inputState
                                        ]
                                      }
                                      onChange={handleChange}
                                    />
                                  )
                                }
                              )}
                            </div>
                            <button
                              className="absolute top-3 right-3 cursor-pointer text-red-400"
                              type="button"
                              onClick={close}
                            >
                              X
                            </button>
                            <form
                              action={() => {
                                action()
                                close()
                              }}
                            >
                              <button className="cursor-pointer text-red-400">
                                제출
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )
            }}
          >
            open modal
          </button>

          {isPending && '제출하는 중'}
          {!isPending &&
            response !== null &&
            !response.isSuccess &&
            `제출에 실패하였습니다. ${response.message}`}
        </div>
        <div className="flex">
          <textarea
            className="h-160 w-full flex-1 rounded-sm border-neutral-300 bg-white px-3 py-0.5"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="h-160 flex-1 overflow-y-auto">
            <MdxComponent mdxText={content} />
          </div>
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

export default PostingForm

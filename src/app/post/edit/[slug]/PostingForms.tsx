'use client'
import { ChangeEvent, startTransition, useActionState } from 'react'
import useInputs from './useInput'
import { MDXFile } from '../../model/getMdxFileMapper'
import MdxComponent from './MdxComponent'
import { submitAction } from '@/app/dal/post/edit'
import { overlay } from 'overlay-kit'
import SubmitModal, { InputState } from './SubmitModal'
import Button from '@/app/_component/Button'
import { redirect } from 'next/navigation'

function PostingForm({ mdxFile }: { mdxFile: Omit<MDXFile, 'default'> }) {
  const { frontmatter: matter, rawMDX } = mdxFile
  const { date, slug, summary, title, tags } = matter

  const { state: inputState, handleChange } = useInputs({
    title,
    tags: tags?.join(', ') ?? '',
    content: rawMDX,
  })

  const [response, action, isPending] = useActionState(
    (_state: unknown, submitState: Parameters<typeof submitAction>[0]) =>
      submitAction(submitState),
    null
  )

  return (
    <div className="px-3">
      <div>
        <div className="mb-2 grid grid-cols-2 gap-x-4 gap-y-2">
          {['title', 'tags'].map((name) => {
            return (
              <InputField
                key={name}
                name={name}
                label={KOREAN_LABEL_MAP[name]}
                value={inputState[name as keyof typeof inputState]}
                onChange={handleChange}
              />
            )
          })}
        </div>
        <div className="flex justify-end">
          <Button
            className="mr-4"
            onClick={async () => {
              const modalInput = await overlay.openAsync<InputState>(
                ({ isOpen, close }) =>
                  isOpen && (
                    <SubmitModal
                      initialInputState={{
                        slug: slug ?? inputState.title.replace(' ', '-'),
                        date: date ?? Date.now().toString(),
                        summary: summary ?? '',
                      }}
                      onClose={close}
                    />
                  )
              )

              const res = { ...modalInput, ...inputState }
              const submitState = {
                ...res,
                tags:
                  inputState.tags.length > 0
                    ? inputState.tags.split(', ').map((str) => str.trim())
                    : [],
              }

              startTransition(() => {
                action(submitState)
                redirect('/post')
              })
            }}
          >
            제출하기
          </Button>

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
            value={inputState.content}
            onChange={handleChange}
          />
          <div className="h-160 flex-1 overflow-y-auto">
            <MdxComponent mdxText={inputState.content} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const InputField = ({
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
    <div className="flex flex-col">
      <label className="mr-1.5 text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-sm border-1 border-neutral-300 px-3 py-0.5"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export const KOREAN_LABEL_MAP: Record<string, string> = {
  title: '제목',
  slug: '슬러그',
  date: '날짜',
  summary: '요약',
  tags: '태그',
}

export default PostingForm

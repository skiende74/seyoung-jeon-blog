import React from 'react'
import { InputField, KOREAN_LABEL_MAP } from './PostingForms'
import useInputs from './useInput'
import { Save } from 'lucide-react'
import Button from '@/app/_component/Button'

const DATA = ['slug', 'date', 'summary'] as const
export type InputState = Record<(typeof DATA)[number], string>
function SubmitModal({
  initialInputState,
  onClose,
}: {
  initialInputState: InputState
  onClose: (inputState: InputState) => void
}) {
  const { state: inputState, handleChange } =
    useInputs<InputState>(initialInputState)

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-black opacity-30" />
      <div className="relative z-10 rounded-md bg-neutral-700 p-4">
        <h3 className="text-sm font-bold">제출모달</h3>
        <div className="modal-action">
          <div>
            {/* if there is a button in form, it will close the modal */}
            <div className="grid max-w-100 grid-cols-2 flex-wrap justify-center gap-x-4">
              {DATA.map((name) => {
                return (
                  <InputField
                    key={name}
                    name={name}
                    label={KOREAN_LABEL_MAP[name]}
                    value={inputState[name as keyof typeof initialInputState]}
                    onChange={handleChange}
                  />
                )
              })}
            </div>
            <button
              className="absolute top-3 right-3 cursor-pointer text-red-400"
              type="button"
              onClick={() => onClose(initialInputState)}
            >
              X
            </button>

            <Button
              className="mt-3"
              onClick={() => {
                onClose(inputState)
              }}
            >
              <Save size={14} /> 제출
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitModal

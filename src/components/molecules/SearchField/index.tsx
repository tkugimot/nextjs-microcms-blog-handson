import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { useSearchParams } from 'next/navigation'
import { useCallback, useRef, useState } from 'react'

export default function SearchField() {
  const [composing, setComposition] = useState(false)
  const startComposition = () => setComposition(true)
  const endComposition = () => setComposition(false)
  const _onEnter: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.code === 'Enter' && !composing) {
        location.href = `/search?q=${inputRef.current?.value}`
      }
    },
    [composing]
  )
  const inputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()
  const defaultQuery = searchParams.get('q') || ''
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.700" />
      </InputLeftElement>
      <Input
        variant="filled"
        type="search"
        name="q"
        ref={inputRef}
        placeholder="Search..."
        onKeyDown={_onEnter}
        onCompositionStart={startComposition}
        onCompositionEnd={endComposition}
        defaultValue={defaultQuery}
      />
    </InputGroup>
  )
}

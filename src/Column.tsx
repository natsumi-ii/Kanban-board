import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as color from './color'
import { Card } from './Card'
import { PlusIcon } from './icon'
import { InputForm as _InputForm } from './InputForm'

export function Column({
  title,
  filterValue: rawFilterValue,
  cards: rawCards,
  onCardDragStart,
  onCardDrop,
  onCardDeleteClick,
  onCardMoveClick,
  onCardEditClick,
  text,
  onTextChange,
  onTextConfirm,
  onTextCancel,
}: {
  title?: string
  filterValue?: string
  cards?: {
    id: string
    text?: string
  }[]
  onCardDragStart?(id: string): void
  onCardDrop?(entered: string | null): void
  onCardDeleteClick?(id: string): void
  onCardMoveClick?(id: string): void
  onCardEditClick?(id: string): void
  text?: string
  onTextChange?(value: string): void
  onTextConfirm?(): void
  onTextCancel?(): void
}) {
  const filterValue = rawFilterValue?.trim()
  const keywords = filterValue?.toLowerCase().split(/\s+/g) ?? []
  const cards = rawCards?.filter(({ text }) =>
    keywords?.every(w => text?.toLowerCase().includes(w)),
  )
  const totalCount = rawCards?.length ?? -1

  const [inputMode, setInputMode] = useState(false)
  const toggleInput = () => setInputMode(v => !v)
  const confirmInput = () => {
    onTextConfirm?.()
  }
  const cancelInput = () => {
    setInputMode(false)
    onTextCancel?.()
  }

  const [draggingCardID, setDraggingCardID] = useState<string | undefined>(
    undefined,
  )
  const handleCardDragStart = (id: string) => {
    setDraggingCardID(id)
    onCardDragStart?.(id)
  }

  // この書き方もできる
  // const [resultNumber, setResultNumber] = useState('green')
  // useEffect(() => {
  //   console.log('useEffect')
  //   if (cards?.length === 0) {
  //     setResultNumber('#cccccc')
  //   } else if (cards?.length === 1) {
  //     setResultNumber('black')
  //   } else {
  //     setResultNumber('yellow')
  //   }
  // }, [cards])

  // infinite loop!!!!
  // const changeHandler = (card) => {
  //   if (card === 0) {
  //     setResultNumber('#cccccc')
  //   } else if (card === 1) {
  //     setResultNumber('black')
  //   }
  // }

  const getColor = length => {
    if (length === 0) {
      return '#cccccc'
    } else if (length === 1) {
      return 'black'
    } else {
      return 'green'
    }
  }

  return (
    <Container>
      <Header>
        {totalCount >= 0 && <CountBadge>{totalCount}</CountBadge>}
        <ColumnName>{title}</ColumnName>

        <AddButton onClick={toggleInput} />
      </Header>

      {inputMode && (
        <InputForm
          value={text}
          onChange={onTextChange}
          onConfirm={confirmInput}
          onCancel={cancelInput}
        />
      )}

      {!cards ? (
        <Loading />
      ) : (
        <>
          {/* <div style={{background: resultNumber}}>{cards.length} results</div> */}
          {filterValue && (
            <ResultCount style={{ color: getColor(cards.length) }}>
              {cards.length} results
            </ResultCount>
          )}
          {/* <div style={{background: getColor(cards.length)}}>{cards.length} results</div> */}

          <VerticalScroll>
            {cards.map(({ id, text }, i) => (
              <Card.DropArea
                key={id}
                disabled={
                  draggingCardID !== undefined &&
                  (id === draggingCardID || cards[i - 1]?.id === draggingCardID)
                }
                onDrop={() => onCardDrop?.(id)}
              >
                <Card
                  text={text}
                  onDragStart={() => handleCardDragStart(id)}
                  onDragEnd={() => setDraggingCardID(undefined)}
                  onDeleteClick={() => onCardDeleteClick?.(id)}
                  onMoveClick={() => onCardMoveClick?.(id)}
                  onEditClick={() => onCardEditClick?.(id)}
                />
              </Card.DropArea>
            ))}

            <Card.DropArea
              style={{ height: '100%' }}
              disabled={
                draggingCardID !== undefined &&
                cards[cards.length - 1]?.id === draggingCardID
              }
              onDrop={() => onCardDrop?.(null)}
            />
          </VerticalScroll>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 355px;
  height: 100%;
  border: solid 1px ${color.Silver};
  border-radius: 6px;
  background-color: ${color.LightSilver};
  > :not(:last-child) {
    flex-shrink: 0;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`

const CountBadge = styled.div`
  margin-right: 8px;
  border-radius: 20px;
  padding: 2px 6px;
  color: ${color.Black};
  background-color: ${color.Silver};
  font-size: 12px;
  line-height: 1;
`

const ColumnName = styled.div`
  color: ${color.Black};
  font-size: 14px;
  font-weight: bold;
`

const AddButton = styled.button.attrs({
  type: 'button',
  children: <PlusIcon />,
})`
  margin-left: auto;
  color: ${color.Black};
  :hover {
    color: ${color.Orange};
  }
`

const InputForm = styled(_InputForm)`
  padding: 8px;
`

const Loading = styled.div.attrs({
  children: 'Loading...',
})`
  padding: 8px;
  font-size: 14px;
`

const ResultCount = styled.div`
  font-size: 12px;
  text-align: center;
`
const ResultNumber = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: skyblue;
  border-radius: 50%;
`

const VerticalScroll = styled.div`
  height: 100%;
  padding: 8px;
  overflow-y: auto;
  flex: 1 1 auto;
  > :not(:first-child) {
    margin-top: 8px;
  }
`

import React, { useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';

import { updateTicket } from '../../store/actions';

import { Textarea } from './styles';

type Props = {
  columnId: string;
  ticketId: string;
  textValue: string;
  setTextValue: (value: string) => void;
  setIsEditable: (value: boolean) => void;
  isEmpty: boolean;
};

function UpdateTicket({
  columnId,
  ticketId,
  textValue,
  setTextValue,
  setIsEditable,
  isEmpty
}: Props) {
  const dispatch = useDispatch();
  const textareaRef = useRef<any>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setTextValue(event.target.value);
  };

  const handleEnterKey = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.keyCode === 13) {
      event.preventDefault();

      if (textValue.length) {
        dispatch(updateTicket(columnId, ticketId, textValue));
        setIsEditable(false);
      }
    }
  };

  useEffect(() => {
    textareaRef.current.focus();
    textareaRef.current.selectionStart = textValue.length;
  }, [textValue.length]);

  return (
    <Textarea
      placeholder="Add your text here"
      onKeyDown={handleEnterKey}
      value={isEmpty ? '' : textValue}
      onChange={handleChange}
      inputRef={textareaRef}
      columnid={columnId}
    />
  );
}

export default UpdateTicket;

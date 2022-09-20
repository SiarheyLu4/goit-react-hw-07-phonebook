import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";

import { getFilter } from "redux/filter/filter-selectors";
import { setFilter } from "redux/filter/filter-actions";

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value));
  }

  return (
    <Label>Find contacts by name
          <Input
            type="search"
            name="filter"
            placeholder="enter part or all of the name"
            value={filter}
            onChange={onSetFilter}
          />
        </Label>
  )
}

const Input = styled.input`
  margin: 12px 0;
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
`

const Label = styled.label`
  font-size: 16px;
  display: flex;
  flex-direction: column;
`
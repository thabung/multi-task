/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ns__file unit: list, comp: ItemCreationForm
// ns__custom_start unit: list, comp: ItemCreationForm, loc: beforeImports
/*

  This file contains generated code, with some locations for adding modifications.
  This file will occasionally be replaced as needed when a stack changes.  But,
  you are allowed to add code in certain locations.  You may also create additional
  files and include them here.

  IMPORTANT:
    (1) don't ever delete comment lines beginning `// ns__custom`.
    (2) don't modify the code except between matching comment lines `// ns__custom with start`
    and `// ns__custom with end`
    (3) if you need to modify code outside of those areas, please contact
    info@pivotate.com and send the file with a request.  We can always generate
    new `ns__custom` lines to accommodate you.

 */

/*
    This is a location for anything at the top of your code.  By default,
    `use strict` is shown.
 */
// ns__custom_end unit: list, comp: ItemCreationForm, loc: beforeImports
import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

// ns__custom_start unit: list, comp: ItemCreationForm, loc: addedImports
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

import ItemForm from '../../../custom/itemForm';
// ns__custom_end unit: list, comp: ItemCreationForm, loc: addedImports

import { CREATE_ITEM_FOR_LIST_ACTION_ID } from '../../../config';

// ns__custom_start unit: list, comp: ItemCreationForm, loc: styling
// change styling here
const Form = styled.div`
  text-align: end;
`;
const StyleButton = styled(Button)`
  && {
    border-radius: 25px;
    border: 2px solid;
  }
`;
// ns__custom_end unit: list, comp: ItemCreationForm, loc: styling

function ItemCreationForm({
  userId,
  createItem,
  refetchQueries,
  // ns__custom_start unit: list, comp: ItemCreationForm, loc: addedProps
  // ns__custom_end unit: list, comp: ItemCreationForm, loc: addedProps
}) {
  // ns__custom_start unit: list, comp: ItemCreationForm, loc: beginning
  /* any special declarations etc. */
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }
  // ns__custom_end unit: list, comp: ItemCreationForm, loc: beginning

  async function handleSubmit(itemValue) {
    if (!itemValue) {
      return;
    }
    const createItemResponse = await createItem({
      variables: {
        actionId: CREATE_ITEM_FOR_LIST_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: userId,
          value: itemValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    // const newItemData = JSON.parse(createItemResponse.data.Execute);
  }

  // ns__custom_start unit: list, comp: ItemCreationForm, loc: beforeReturn
  // ns__custom_end unit: list, comp: ItemCreationForm, loc: beforeReturn

  // ns__start_section unit: list, comp: ItemCreationForm, loc: return
  return (
    <Form>
      <StyleButton size="medium" variant="outlined" onClick={setOpen}>
        <AddIcon />
        ADD TASK
      </StyleButton>
      <ItemForm
        open={open}
        onSave={handleSubmit}
        title="Create Task"
        buttonLabel="Add"
        onClose={close}
        inProgressMessage="Creating task..."
        completedMessage="Task successfully created."
      />
    </Form>
  );
  // ns__end_section unit: list, comp: ItemCreationForm, loc: return
}

export default compose(graphql(EXECUTE, { name: 'createItem' }))(ItemCreationForm);

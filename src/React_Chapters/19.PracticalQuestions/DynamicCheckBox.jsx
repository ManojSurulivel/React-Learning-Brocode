//Machine coding question: Dynamic checkbox counter
// Display 4 checkboxes with different names and a button named selectall User can select each checkbox
// Select all button click will check all checkboxes
// Button should be disabled once all checkboxes are selected.
// Display selected checkboxes count and names in ui.

import React, { useState } from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

const DynamicCheckBox = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Checkbox 1', checked: false },
    { id: 2, label: 'Checkbox 2', checked: false },
    { id: 3, label: 'Checkbox 3', checked: false },
    { id: 4, label: 'Checkbox 4', checked: false },
  ]);

  const [selectAllChecked, setSelectAllChecked] = useState(false);

  // Handle change for individual checkbox
  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );

    setCheckboxes(updatedCheckboxes);

    // Check if all checkboxes are selected
    const allChecked = updatedCheckboxes.every((checkbox) => checkbox.checked);
    setSelectAllChecked(allChecked);
  };

  // Handle Select/Deselect All
  const handleSelectAll = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectAllChecked,
    }));

    setCheckboxes(updatedCheckboxes);
    setSelectAllChecked(!selectAllChecked);
  };

  // Get selected checkboxes
  const selectedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
  const selectedCount = selectedCheckboxes.length;

  return (
    <div>
      {checkboxes.map((checkbox) => (
        <Checkbox
          key={checkbox.id}
          label={checkbox.label}
          checked={checkbox.checked}
          onChange={() => handleCheckboxChange(checkbox.id)}
        />
      ))}

      <button onClick={handleSelectAll}>
        {selectAllChecked ? 'Deselect All' : 'Select All'}
      </button>

      <p>Selected: {selectedCount}</p>

      <ul>
        {selectedCheckboxes.map((checkbox) => (
          <li key={checkbox.id}>{checkbox.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicCheckBox;

import React, { useState }  from 'react';
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';

const UserStatusComponent = () => {
  const [status, setStatus] = useState("offline");
  return (
    <InputGroup className="mb-3">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title="Dropdown"
        id="input-group-dropdown-1"
        disabled={status == "offline"}
      >
        <Dropdown.Item href="#">Visible</Dropdown.Item>
        <Dropdown.Item href="#">Do not disturb</Dropdown.Item>
        <Dropdown.Item href="#">Invisible</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
}

export default UserStatusComponent;

import * as React from "react";
import { useService } from "../../shared/hooks";
import { filter_users } from "../services/users_repository";
import UserTable from "../components/UserTable";
import UserModal from "../components/UserModal";

import {
  userRequest,
  loadUserData,
  userRequestError,
} from "../actions";

import { connect } from "react-redux";

function useUserService(filters) {
  const { name } = filters;
  return useService({
    start: userRequest,
    effect: loadUserData,
    error: userRequestError,
  }, () => filter_users(filters), [name]);
}

function UserPage({ count = 10, loading, error, data }) {
  const [name, setNameFilter] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState(null);
  useUserService({ name });
  if (error) {
    return "Ooops!";
  }

  return <div>
    <div>
      <input type="text"
        style={{ float: 'right' }}
        defaultValue={name}
        onChange={({ target: { value } }) => setNameFilter(value)} />
    </div>
    <UserTable rows={data} showModal={(user) => setSelectedUser(user)}>
    </UserTable>
    {selectedUser
      &&
      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
  </div>
}

const mapStateToProps = ({ user }) => user;

export default connect(mapStateToProps)(UserPage);

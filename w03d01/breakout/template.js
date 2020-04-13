const template = (vars) => {
  return `
    <div>
      <h1>Hi ${vars.firstName} ${vars.lastName}</h1>
      <h3>Your username is ${vars.username} and you have been a member since ${vars.dateJoined}</h3>
    </div>
  `;
};

module.exports = template;

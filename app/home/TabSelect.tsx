import React from 'react';

const NavBar = () => {
  return (
    <ul className="flex justify-center space-x-3 p-3">
      <li>All</li>
      <li>-</li>
      <li>Collected</li>
      <li>-</li>
      <li>Uncollected</li>
      <li>-</li>
      <li>Unreleased</li>
    </ul>
  );
};

export default NavBar;

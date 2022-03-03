import NavDropdown from "./NavContents/NavDropdown";
import Toggle from "./NavContents/Toggle";

export default function Navbar() {
  return (
    <navbar>
      <div className="flex items-center justify-center fixed w-full h-16 bg-brand-500 shadow-md bg-blue-500">
        <div className="w-full sm:max-w-xl mx-auto flex items-center justify-between h-full px-4">
          <Toggle></Toggle>
          <NavDropdown></NavDropdown>
        </div>
      </div>
    </navbar>
  );
}

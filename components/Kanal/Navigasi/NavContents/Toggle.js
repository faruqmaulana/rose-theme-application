import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11 -z-20`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6 bg-white" : "translate-x-1 bg-blue-500"
        } transition ease-in-out duration-500 inline-block w-4 h-4 transform  rounded-full`}
      />
    </Switch>
  );
}

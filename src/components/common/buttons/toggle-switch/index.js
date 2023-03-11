import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const ToggleSwitchBtn =({state=true,setState})=> {
  const [enabled, setEnabled] = useState(state)
  useEffect(() => {
    setEnabled(state)
  },[state])
  useEffect(() => {
    setState && setState(enabled)
  },[enabled])
  return (
    <Switch
    checked={enabled}
    onChange={setEnabled}
    className={classNames(
      enabled ? 'bg-color-purple-600' : 'bg-gray-200',
      'relative inline-flex h-[20px] w-[36px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    )}
  >
    <span className="sr-only">Use setting</span>
    <span
      className={classNames(
        enabled ? 'translate-x-4' : 'translate-x-0',
        'pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
      )}
    >
      <span
        className={classNames(
          enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
        )}
        aria-hidden="true"
      >
      </span>
      <span
        className={classNames(
          enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
        )}
        aria-hidden="true"
      >
      </span>
    </span>
  </Switch>
  )
}


export default ToggleSwitchBtn

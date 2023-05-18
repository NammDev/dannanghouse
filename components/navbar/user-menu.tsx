'use client'

import MenuItem from './menu-item'
import { Icons } from '../icons'
import Avatar from '../avatar'
import { useCallback, useState } from 'react'

interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const currentUser = false

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className='relative'>
      <div className='flex flex-row items-center'>
        <div className='hidden px-4 py-3 -mr-2 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100'>
          Airbnb your home
        </div>
        <div className='hidden px-3 py-3 mr-1 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100'>
          <Icons.globe className='w-4 h-4' />
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <Icons.menu className='w-4 h-4' />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl w-[40vw] mt-1 py-2 shadow-dropdown md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            {currentUser ? (
              <>
                <MenuItem label='My trips' />
                <MenuItem label='My favorites' />
                <MenuItem label='My reservations' />
                <MenuItem label='My properties' />
                <MenuItem label='Airbnb your home' />
                <hr />
                <MenuItem label='Logout' />
              </>
            ) : (
              <>
                <MenuItem label='Sign up' />
                <MenuItem label='Login' />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu

'use client'

import { Icons } from '../icons'
import Avatar from '../avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = () => {
  return (
    <div className='relative'>
      <div className='flex flex-row items-center'>
        <div className='hidden px-4 py-3 -mr-2 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100'>
          Airbnb your home
        </div>
        <div className='hidden px-3 py-3 mr-1 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100'>
          <Icons.globe className='w-4 h-4' />
        </div>

        <DropdownMenu>
          <Dialog>
            <DropdownMenuTrigger asChild>
              <div className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                <Icons.menu className='w-4 h-4' />
                <div className='hidden md:block'>
                  <Avatar />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem asChild className='font-semibold'>
                <DialogTrigger asChild>
                  <div>Sign Up</div>
                </DialogTrigger>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <DialogTrigger asChild>
                  <div>Login</div>
                </DialogTrigger>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <div>Airbnb your home</div>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <div>Help</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </DropdownMenu>
      </div>
      {/* {isOpen && (
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
      )} */}
    </div>
  )
}

export default UserMenu

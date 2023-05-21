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
              {/* <h3 className='mb-4 text-xl font-medium text-gray-900'>Sign in to our platform</h3>
              <form className='space-y-6'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 '>
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 '>
                    Your password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    required
                  />
                </div>
                <div className='flex justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        type='checkbox'
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 '
                        required
                      />
                    </div>
                    <label className='ml-2 text-sm font-medium text-gray-900'>Remember me</label>
                  </div>
                  <a href='#' className='text-sm text-blue-700 hover:underline'>
                    Forgot Password?
                  </a>
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Login to your account
                </button>
                <div className='text-sm font-medium text-gray-500'>
                  Not registered?{' '}
                  <a href='#' className='text-blue-700 hover:underline'>
                    Create account
                  </a>
                </div>
              </form> */}
              <div className='mx-auto flex flex-col justify-center space-y-6 sm:w-[350px]'>
                <div className='flex flex-col space-y-2 text-center'>
                  <Icons.logo className='w-6 h-6 mx-auto' />
                  <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
                  <p className='text-sm text-muted-foreground'>
                    Enter your email to sign in to your account
                  </p>
                </div>
                <div className='grid gap-6'>
                  <form>
                    <div className='grid gap-2'>
                      <div className='grid gap-1'>
                        <label
                          className='text-sm font-medium leading-none sr-only peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                          htmlFor='email'
                        >
                          Email
                        </label>
                        <input
                          className='flex w-full h-10 px-3 py-2 text-sm bg-transparent border rounded-md border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                          id='email'
                          placeholder='name@example.com'
                          autoCapitalize='none'
                          autoComplete='email'
                          autoCorrect='off'
                          type='email'
                          name='email'
                        />
                      </div>
                      <button className='inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90'>
                        Sign In with Email
                      </button>
                    </div>
                  </form>
                  <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                      <span className='w-full border-t' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                      <span className='px-2 bg-background text-muted-foreground'>
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors border rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border-input hover:bg-accent hover:text-accent-foreground'
                  >
                    <Icons.gitHub className='w-4 h-4 mr-2' /> Github
                  </button>
                </div>
                <p className='px-8 text-sm text-center text-muted-foreground'>
                  <a className='underline hover:text-brand underline-offset-4' href='/register'>
                    Don&apos;t have an account? Sign Up
                  </a>
                </p>
              </div>
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

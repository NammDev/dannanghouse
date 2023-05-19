import Container from '../container'
import Categories from './categories'
import Logo from './logo'
import Search from './search'
import UserMenu from './user-menu'

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <div className='fixed z-10 w-full bg-white'>
      <div className='py-[17px] border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  )
}

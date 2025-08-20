import { UserButton } from '@clerk/nextjs'


const UserCircle = async() => {
  return (
    <UserButton appearance={{
        variables: {
            spacingUnit:"1rem",
        }
    }
    } />
  )
}

export default UserCircle
const Error = ({children}) => {
  return (
    <div className='bg-red-700 text-white text-center p-3
                          mb-3 rounded-md font-bold'>
        {children}
    </div>
  )
}

export default Error;

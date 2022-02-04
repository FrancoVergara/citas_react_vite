const Error = ({children}) => {
    return (
        <div className='bg-red-800 text-center text-white font-bold p-3 mb-3 uppercase rounded-md'>
            {children}
        </div>
    );
}
 
export default Error;
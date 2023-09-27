
export default function MyModal({visible, onClose}) {

  const handleOnClose = () =>{
      onClose()
  }
  if(!visible) return null

  return (
    <div onClick={handleOnClose} id="container" className="fixed z-[9999] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-[#81C784] p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
        All good!
        </h1>
        <p className="text-center text-gray-700 mb-5">Thanks for your submission , we will get back to you shortly!</p>

      </div>
    </div>
  );
}
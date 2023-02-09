

function Textarea({jokes}) 
{
  return (
    <p className="flex justify-center items-center w-2/4 text-center text-white text-xl" name="inputArea" class="p-2 text-base font-medium flex justify-center items-center w-2/4 text-center text-white text-xl">
{jokes.joke}
    </p>
  )
}

export default Textarea
import { ArrowUpRight } from 'lucide-react'

const LeftSide = () => {
  return (
    <div className="w-[30%] p-16 flex flex-col justify-between">
      <div className="space-y-10">
        <h2 className="text-5xl font-extrabold leading-tight">
          Prospective <br />
          customer <br />
          segmentation
        </h2>

        <p className="text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident similique et deserunt ab sunt.
        </p>
      </div>

      <ArrowUpRight className="w-14 h-14" />
    </div>
  )
}

export default LeftSide

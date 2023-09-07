import DisplayDate from '@/components/display-date'
import { Badge } from '@/components/ui/badge'
import DateTimeDisplay from '@/lib/current-date'
import Image from 'next/image'

export default function Home() {


  return (
    <main className='w-[80%] flex flex-col '>
      <div className='flex items-center justify-center w-full z-50 fixed inset-x-0 top-2 mt-3 px-6'>
        <Badge variant='outline' className=" bg-[#0A1A29] text-white border-none  h-12 rounded-md w-full flex items-center justify-between">
          <p data-testid="slackUserName" className=' text-xs md:text-lg font-bold text-purple-800'>
            ABDULRAHEEM OLAWALE
          </p>

          <DisplayDate />

        </Badge>
      </div>
      <section
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
        id="about"
      >
        <div className="w-full h-420 flex items-center justify-center">
          <div className=" relative w-275 h-340  bg-emerald-200 rounded-md">
            <Image
              data-testid="slackDisplayImage"
              src='/radeg.jpeg'
              alt="RAHEEM"
              width={300}
              height={300}
              className=" -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full h-420 flex flex-col items-center justify-center ">
          <p className="text-lg text-white text-center">
            I am <span data-testid="slackUserName" className=' text-lg font-bold text-purple-800'> ABDULRAHEEM OLAWALE </span>, <span data-testid="myTrack">Frontend</span> Intern in HNGx . I create interactive experiences for people using modern web technology,independent fellow who has soft spot for team/group work. Committed to high standards of service, performance and integrity.
          </p>

          <button className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
            <a href='https://github.com/Rahdeg/hngx-task1' data-testid="githubURL" className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Visit GitHub
            </a>
          </button>
        </div>
      </section>
    </main>
  )
}

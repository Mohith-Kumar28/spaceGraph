import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Histogram from './BarChart'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
    let [categories] = useState({
        Search: [
          {
            id: 1,
            component:"Histogram"
          },
      
        ],
       
        Convertor: [
          {
            id: 2,
      
            component:"Convertor"
          }
        ],
       
        Stack: [
          {
            id: 3,
      
            component:"Stack"
          }
        ]
    
      })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
   <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((tabs, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                { tabs[0].component=="Histogram"&&  <Histogram/>}
               
                <div className="w-96"></div>
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
 
    </div>
  )
}

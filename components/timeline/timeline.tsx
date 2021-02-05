import { TimelineItem, TimelineItemType } from '../../generated/graphcms.codegen'
import markdownToHtml from '../../lib/markdownToHtml'
import AcademicCap from '../icons/academic-cap/academic-cap'
import Beaker from '../icons/beaker/beaker'
import Briefcase from '../icons/briefcase/briefcase'

import { format } from 'date-fns'

interface Props {
  items: Partial<TimelineItem>[]
}

const Timeline: React.FC<Props> = (props) => {
  const iconMap = {
    [TimelineItemType.School]: <AcademicCap />,
    [TimelineItemType.Job]: <Briefcase />,
    [TimelineItemType.Research]: <Beaker />,
    [TimelineItemType.Certification]: <Beaker />,
    [TimelineItemType.Project]: <Beaker />,
  }

  const colorMap = {
    [TimelineItemType.School]: 'bg-blue-500',
    [TimelineItemType.Job]: 'bg-red-500',
    [TimelineItemType.Research]: 'bg-green-500',
    [TimelineItemType.Certification]: 'bg-gray-500',
    [TimelineItemType.Project]: 'bg-yellow-500',
  }

  const items = props.items.map((item) => {
    const content = item.content ? markdownToHtml(item.content) : ''

    return {
      ...item,
      content,
    }
  })

  return (
    <div className="relative">
      <div className="absolute h-full border-r-4 border-solid border-primary-500 left-1/2"></div>
      {items.map((item, idx) => {
        return (
          <div key={idx} className="relative py-5 ">
            <div className={`${idx % 2 === 0 ? `` : `left-1/2`}  w-1/2 box-border relative`}>
              <div className="flex flex-col">
                <div
                  style={
                    idx % 2 === 0 ? { left: 'calc(100% - 22px)' } : { right: 'calc(100% - 26px)' }
                  }
                  className={`${
                    idx % 2 === 0 ? `flex-row-reverse` : `flex-row`
                  } absolute flex items-center whitespace-nowrap`}
                >
                  <small className={`${idx % 2 === 0 ? `ml-6` : `mr-10`}  text-gray-400`}>
                    {`
                      ${format(new Date(item.fromDate), 'MMMM yyyy')} 
                      ${item.toDate ? ` – ${format(new Date(item.toDate), 'MMMM yyyy')}` : ``}
                    `}
                  </small>

                  <div
                    className={`w-12 h-12 p-2 text-white rounded-full ${
                      item.type && colorMap[item.type]
                    }`}
                  >
                    {item.type && iconMap[item.type]}
                  </div>
                </div>
                <div className="p-6 ml-auto mr-16 prose-sm prose shadow">
                  <h3>{item.title}</h3>
                  <i className="text-primary-500">{item.place}</i>

                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Timeline

import { format } from 'date-fns'
import { TimelineItem, TimelineItemType } from '../../generated/graphcms.codegen'
import markdownToHtml from '../../lib/markdownToHtml'
import AcademicCap from '../icons/academic-cap/academic-cap'
import Beaker from '../icons/beaker/beaker'
import Briefcase from '../icons/briefcase/briefcase'

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
      <div className="box-content relative w-0 border-4 border-primary-500 left-4 xl:left-1/2">
        {items.map((item, idx) => {
          return (
            <div className="relative pt-20" key={item.id}>
              <div
                className={`
                  absolute
                  w-16 
                  h-16
                  p-2
                  top-20
                  -left-8
                  text-white
                  rounded-full ${item.type && colorMap[item.type]}
                `}
              >
                {item.type && iconMap[item.type]}
              </div>

              <div
                className={`
                  absolute ml-10 -mt-10 text-gray-400 whitespace-nowrap
                  ${idx % 2 === 1 ? `xl:-ml-65ch-14 xl:w-65ch text-right` : `xl:ml-14`}
                `}
              >
                {`
                  ${format(new Date(item.fromDate), 'MMMM yyyy')}
                  ${item.toDate ? ` – ${format(new Date(item.toDate), 'MMMM yyyy')}` : ``}
                `}
              </div>

              <div
                className={`
                  w-min-100vw-6rem-or-65ch p-4 ml-10 xl:ml-14 prose-sm prose shadow xl:prose-md sm:w-65ch
                  ${idx % 2 === 1 && `xl:-ml-65ch-14`}
                `}
              >
                <h3>{item.title}</h3>
                <small className="italic text-primary-500">{item.place}</small>

                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline

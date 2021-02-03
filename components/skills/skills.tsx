import { Skill as ISkill } from '../../generated/graphcms.codegen'
import Skill from '../skill/skill'

interface Props {
  skills?: Partial<ISkill>[]
}

const Skills: React.FC<Props> = (props) => {
  return props.skills ? (
    <div className="flex flex-wrap justify-center">
      {props.skills.map((skill) => {
        return <Skill key={skill.id} skill={skill} />
      })}
    </div>
  ) : (
    <>No skills avaible</>
  )
}

export default Skills

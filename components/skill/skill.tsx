import { Skill as ISkill } from '../../generated/graphcms.codegen'

interface Prop {
  skill: Partial<ISkill>
}

const Skill: React.FC<Prop> = (props) => {
  return (
    <>
      <span className="block px-4 py-2 m-1 font-bold border-solid shadow-md whitespace-nowrap">
        {props.skill.name}
      </span>
    </>
  )
}

export default Skill

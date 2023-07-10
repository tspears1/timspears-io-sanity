import { useFormValue, useProjectId } from 'sanity'


const ListOverrideField = (props: StringInputProps) => {
  //@ts-ignore
  const projectID = useProjectId()
  const document = useFormValue([])
  props.schemaType.options.list = props.schemaType.options.listGenerator({
    document,
    path: props.path,

  })
  return props.renderDefault(props)
}

export default ListOverrideField
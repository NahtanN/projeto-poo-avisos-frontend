import * as yup from 'yup'

interface IData {
  title: string;
  description: string;
  link: {
    title: string;
    url: string;
  }
}

const validation = async (data: IData) => {

  const notificationSchema = yup.object().shape({
    title: yup.string().required(),

    description: yup
      .string()
      .when(['link.title', 'link.url'], {
        is: '',
        then: yup.string().required()
      }),

    link: yup.object().shape({
      title: yup.string(),
      url: yup
        .string()
        .url()
        .when('link.title', {
          is: () => data.link.title.length > 0,
          then: yup.string().url().required()
        })
    })

  })

  return await notificationSchema.validate(data, {
    abortEarly: false
  });

}

export default validation 
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
    title: yup.string().required('Adicione o título do aviso!'),

    description: yup
      .string()
      .when(['link.title', 'link.url'], {
        is: '',
        then: yup.string().required('Descrição ou link precisam ser preenchidos!')
      }),

    link: yup.object().shape({
      title: yup.string(),
      url: yup
        .string()
        .url('Adicione uma URL válida!')
        .when('link.title', {
          is: () => data.link.title.length > 0,
          then: yup.string().url().required('Adicione uma URL válida!')
        })
    })

  })

  return await notificationSchema.validate(data, {
    abortEarly: false
  });

}

export default validation 
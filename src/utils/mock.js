export const mockApi = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            [
                {
                    title: 'Visa infinite Сбербанк первый',
                    cardNumber: 9999,
                    dateTo: '14.08.2019',
                    amount: 28.756,
                    currency: '₽',
                    texts: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.`
                },
                {
                    title: 'Visa infinite Сбербанк второй',
                    cardNumber: 4444,
                    dateTo: '17.09.2009',
                    amount: 23.140,
                    currency: '₽',
                    texts: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.`
                },
                {
                    title: 'Visa infinite Сбербанк десятый',
                    cardNumber: 3333,
                    dateTo: '01.06.2020',
                    amount: 12.14,
                    currency: '₽',
                    texts: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.`
                },
                {
                    title: 'Visa infinite Сбербанк двенадцатый',
                    cardNumber: 1111,
                    dateTo: '22.04.2019',
                    amount: 148.25,
                    currency: '₽',
                    texts: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.
                    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dolor cursus, ultricies nibh eget,
                    viverra elit. Fusce porta mi in est feugiat tincidunt. Proin auctor lorem enim, at fermentum nunc suscipit ut.
                    Proin commodo ligula at semper pellentesque. Sed facilisis ut augue eu tincidunt. Integer id lacus purus.
                    In vitae consequat quam. Etiam ac fermentum libero, ut fringilla arcu. Aliquam erat volutpat.
                    Pellentesque non leo vitae velit molestie finibus eget ut est.`
                }
            ]
        )
    }, 1000)
})

export const adminMenu = [
    { //hệ thống
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor'
            },
            {//quan li ke hoach kham benh
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            },
            {//quan li benh nhan kham benh cua bac si
                name: 'menu.doctor.manage-patient', link: '/doctor/manage-patient'
            }
        ]
    },
    {//quan li phong khoa
        name: 'menu.admin.clinic',
        menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'
            },
        ]
    },
    {//quan li chuyen khoa
        name: 'menu.admin.specialty',
        menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manage-specialty'
            },
        ]
    },
    {// quan li cam nang
        name: 'menu.admin.handbook',
        menus: [
            {
                name: 'menu.admin.manage-handbook', link: '/system/manage-handbook'
            }
        ]
    }
];

export const doctorMenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [
            {//quan li benh nhan kham benh cua bac si
                name: 'menu.doctor.manage-patient', link: '/doctor/manage-patient'
            }
        ]
    }
]